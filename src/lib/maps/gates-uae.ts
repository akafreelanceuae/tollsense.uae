export interface SalikGate {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  amount: number; // AED
}

export const salikGates: SalikGate[] = [
  { id: 'al_garhoud', name: 'Al Garhoud', location: { lat: 25.2373, lng: 55.3468 }, amount: 4 },
  { id: 'al_maktoum', name: 'Al Maktoum', location: { lat: 25.2220, lng: 55.2882 }, amount: 4 },
  { id: 'al_barsha', name: 'Al Barsha', location: { lat: 25.0989, lng: 55.1707 }, amount: 4 },
  { id: 'al_safa', name: 'Al Safa', location: { lat: 25.1881, lng: 55.2436 }, amount: 4 },
  { id: 'al_mamzar', name: 'Al Mamzar', location: { lat: 25.3019, lng: 55.3575 }, amount: 4 }
];

export default salikGates;
