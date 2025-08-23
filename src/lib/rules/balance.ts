export function isLowBalance(balance: number, threshold = 50): boolean {
  return balance < threshold;
}
