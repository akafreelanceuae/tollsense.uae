import * as functions from 'firebase-functions';
import Papa from 'papaparse';

export const importCsv = functions.https.onCall(async (data: { csv: string }) => {
  const rows = Papa.parse(data.csv, { header: true, skipEmptyLines: true }).data;
  return { rows };
});
