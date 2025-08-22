export interface PaymentProvider {
  createCheckoutSession(plan: string): Promise<string>;
}
