import { create } from 'zustand';

export interface Transaction {
  id: string;
  vehicleId: string;
  timestamp: number;
  plaza: string;
  amount: number;
}

interface TxState {
  transactions: Transaction[];
  add: (t: Transaction) => void;
}

export const useTransactionsStore = create<TxState>(set => ({
  transactions: [],
  add: t => set(state => ({ transactions: [...state.transactions, t] }))
}));
