export interface LatLng {
  lat: number;
  lng: number;
}

export interface RouteInfo {
  distanceKm: number;
  durationMinutes: number;
  salikAED: number;
  polyline: string;
}

export interface MapsProvider {
  getRoutes(origin: LatLng, destination: LatLng): Promise<RouteInfo[]>;
}
