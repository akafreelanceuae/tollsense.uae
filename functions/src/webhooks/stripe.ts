import * as functions from 'firebase-functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_PUBLIC_KEY || '', {
  apiVersion: '2022-11-15'
});

export const stripeWebhook = functions.https.onRequest(async (req, res) => {
  res.sendStatus(200);
});
