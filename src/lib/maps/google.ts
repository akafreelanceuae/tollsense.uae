import { MapsProvider, LatLng, RouteInfo } from './provider';
import { env } from '../env';
import salikGates from './gates-uae';

export class GoogleMapsProvider implements MapsProvider {
  async getRoutes(origin: LatLng, destination: LatLng): Promise<RouteInfo[]> {
    const originStr = `${origin.lat},${origin.lng}`;
    const destStr = `${destination.lat},${destination.lng}`;
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${originStr}&destination=${destStr}&key=${env.GOOGLE_MAPS_API_KEY}&alternatives=true`;
    const res = await fetch(url);
    const json = await res.json();
    return json.routes.map((r: any) => {
      const poly = r.overview_polyline.points;
      const salikAED = estimateSalik(poly);
      return {
        distanceKm: r.legs[0].distance.value / 1000,
        durationMinutes: r.legs[0].duration.value / 60,
        salikAED,
        polyline: poly
      } as RouteInfo;
    });
  }
}

// Polyline decoder based on Google's polyline algorithm
function decodePolyline(polyline: string): LatLng[] {
  let index = 0, lat = 0, lng = 0;
  const coordinates: LatLng[] = [];

  while (index < polyline.length) {
    let b, shift = 0, result = 0;
    do {
      b = polyline.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = polyline.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += dlng;

    coordinates.push({ lat: lat / 1e5, lng: lng / 1e5 });
  }

  return coordinates;
}

function haversine(a: LatLng, b: LatLng): number {
  const R = 6371; // km
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sinDLat = Math.sin(dLat / 2);
  const sinDLng = Math.sin(dLng / 2);
  const aCalc = sinDLat * sinDLat + sinDLng * sinDLng * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(aCalc), Math.sqrt(1 - aCalc));
  return R * c;
}

function toRad(v: number): number {
  return (v * Math.PI) / 180;
}

function estimateSalik(polyline: string): number {
  const points = decodePolyline(polyline);
  let total = 0;
  const visited = new Set<string>();
  for (const gate of salikGates) {
    for (const p of points) {
      if (visited.has(gate.id)) break;
      const d = haversine(p, gate.location);
      if (d < 0.1) { // within 100m
        total += gate.amount;
        visited.add(gate.id);
        break;
      }
    }
  }
  return total;
}
