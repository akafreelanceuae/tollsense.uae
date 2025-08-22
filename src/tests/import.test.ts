import { parseCsv } from '../lib/csv';

test('parses csv', () => {
  const csv = 'date,time,plaza,amount\n2023-01-01,10:00,A,4';
  const rows = parseCsv(csv);
  expect(rows[0]).toMatchObject({ plaza: 'A', amount: 4 });
});
