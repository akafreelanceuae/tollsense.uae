import { create } from 'zustand';

interface FeaturesState {
  flags: Record<string, boolean>;
  setFlags: (f: Record<string, boolean>) => void;
}

export const useFeaturesStore = create<FeaturesState>(set => ({
  flags: {},
  setFlags: flags => set({ flags })
}));
