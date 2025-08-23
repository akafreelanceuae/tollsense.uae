import Papa from 'papaparse';

export interface CsvRow {
  date: string;
  time: string;
  plaza: string;
  amount: number;
}

export function parseCsv(text: string): CsvRow[] {
  const result = Papa.parse(text, { header: true, skipEmptyLines: true });
  return result.data.map((row: any) => ({
    date: row.date,
    time: row.time,
    plaza: row.plaza,
    amount: parseFloat(row.amount)
  }));
}
