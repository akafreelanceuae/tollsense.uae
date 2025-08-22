export function predictDepletion(balance: number, dailyAvg: number): Date | null {
  if (dailyAvg <= 0) return null;
  const daysLeft = balance / dailyAvg;
  return new Date(Date.now() + daysLeft * 86400000);
}
