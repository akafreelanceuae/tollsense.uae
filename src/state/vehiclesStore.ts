import { create } from 'zustand';

export interface Vehicle {
  id: string;
  plate: string;
  nickname?: string;
}

interface VehiclesState {
  vehicles: Vehicle[];
  setVehicles: (v: Vehicle[]) => void;
}

export const useVehiclesStore = create<VehiclesState>(set => ({
  vehicles: [],
  setVehicles: vehicles => set({ vehicles })
}));
