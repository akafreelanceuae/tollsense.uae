export interface Transaction {
  vehicleId: string;
  timestamp: number; // epoch ms
  plaza: string;
  amount: number;
}

export function findDuplicateTransactions(txs: Transaction[]): Transaction[] {
  const sorted = [...txs].sort((a, b) => a.timestamp - b.timestamp);
  const duplicates: Transaction[] = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    const a = sorted[i];
    const b = sorted[i + 1];
    if (
      a.plaza === b.plaza &&
      a.amount === b.amount &&
      b.timestamp - a.timestamp <= 3 * 60 * 1000
    ) {
      duplicates.push(b);
    }
  }
  return duplicates;
}
