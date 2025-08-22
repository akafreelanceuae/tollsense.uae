import { callFunction } from '../api';
import { PaymentProvider } from './provider';

export class StripeProvider implements PaymentProvider {
  async createCheckoutSession(plan: string): Promise<string> {
    const res = await callFunction<{ plan: string }, { url: string }>(
      'createStripeCheckout',
      { plan }
    );
    return res.url;
  }
}
