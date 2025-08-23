import * as functions from 'firebase-functions';

export const optimizeRoute = functions.https.onCall(async (data: { polyline: string }) => {
  return { cost: 0 };
});
