import { findDuplicateTransactions } from '../lib/rules/anomalies';

test('detects duplicate transactions', () => {
  const txs = [
    { vehicleId: '1', timestamp: 0, plaza: 'A', amount: 4 },
    { vehicleId: '1', timestamp: 2 * 60 * 1000, plaza: 'A', amount: 4 }
  ];
  const dups = findDuplicateTransactions(txs);
  expect(dups).toHaveLength(1);
});
