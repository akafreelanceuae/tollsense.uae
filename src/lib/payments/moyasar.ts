import { PaymentProvider } from './provider';

export class MoyasarProvider implements PaymentProvider {
  async createCheckoutSession(): Promise<string> {
    throw new Error('Moyasar not implemented');
  }
}
