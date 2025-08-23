import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import Card from '../components/Card';
import Chart from '../components/Chart';
import AlertBanner from '../components/AlertBanner';
import { useTransactionsStore } from '../state/transactionsStore';
import { formatAED } from '../lib/currency';
import { predictDepletion } from '../lib/rules/predictions';
import { isLowBalance } from '../lib/rules/balance';

export default function Dashboard() {
  const transactions = useTransactionsStore(s => s.transactions);
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  const monthTx = transactions.filter(t => t.timestamp >= startOfMonth);
  const todayTx = transactions.filter(t => t.timestamp >= startOfDay);

  const monthSpend = monthTx.reduce((sum, t) => sum + t.amount, 0);
  const todaySpend = todayTx.reduce((sum, t) => sum + t.amount, 0);

  // Placeholder balance until integrated with real data
  const balance = 200 - monthSpend;
  const dailyAvg = monthSpend / Math.max(now.getDate(), 1);
  const depletionDate = predictDepletion(balance, dailyAvg);
  const daysLeft = useMemo(() => {
    return depletionDate
      ? Math.ceil((depletionDate.getTime() - now.getTime()) / 86400000)
      : null;
  }, [depletionDate, now]);

  const chartData = useMemo(() => {
    const map: Record<number, number> = {};
    monthTx.forEach(t => {
      const day = new Date(t.timestamp).getDate();
      map[day] = (map[day] || 0) + t.amount;
    });
    return Array.from({ length: now.getDate() }, (_, i) => ({
      x: String(i + 1),
      y: map[i + 1] || 0
    }));
  }, [monthTx, now]);

  return (
    <ScrollView style={{ padding: 16 }}>
      <AlertBanner
        visible={isLowBalance(balance)}
        message={
          isLowBalance(balance)
            ? `Low balance: ${formatAED(balance)}`
            : ''
        }
      />
      <Card style={{ marginBottom: 16 }}>
        <Card.Title title="This Month" subtitle={formatAED(monthSpend)} />
      </Card>
      <Card style={{ marginBottom: 16 }}>
        <Card.Title title="Today" subtitle={formatAED(todaySpend)} />
      </Card>
      <Card style={{ marginBottom: 16 }}>
        <Card.Title title="Current Balance" subtitle={formatAED(balance)} />
      </Card>
      <Card style={{ marginBottom: 16 }}>
        <Card.Title
          title="Predicted days left"
          subtitle={daysLeft !== null ? String(daysLeft) : 'N/A'}
        />
      </Card>
      <Card>
        <Card.Content>
          <Chart data={chartData} />
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
