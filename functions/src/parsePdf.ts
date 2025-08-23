import * as functions from 'firebase-functions';
import pdf from 'pdf-parse';

export const parsePdf = functions.https.onCall(async (data: { base64: string }) => {
  const buffer = Buffer.from(data.base64, 'base64');
  const res = await pdf(buffer);
  return { text: res.text };
});
