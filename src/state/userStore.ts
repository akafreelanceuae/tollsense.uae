import { create } from 'zustand';

interface UserState {
  uid?: string;
  email?: string;
  setUser: (uid: string, email: string) => void;
  clear: () => void;
}

export const useUserStore = create<UserState>(set => ({
  uid: undefined,
  email: undefined,
  setUser: (uid, email) => set({ uid, email }),
  clear: () => set({ uid: undefined, email: undefined })
}));
