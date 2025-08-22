import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  role: z.enum(['driver', 'fleetAdmin']),
  createdAt: z.number(),
  salikAccountLinked: z.boolean(),
  defaultVehicleId: z.string().optional()
});

export const vehicleSchema = z.object({
  vehicleId: z.string(),
  uidOwner: z.string(),
  plate: z.string(),
  nickname: z.string().optional(),
  fleetId: z.string().optional(),
  createdAt: z.number()
});

export const fleetSchema = z.object({
  fleetId: z.string(),
  adminUid: z.string(),
  name: z.string(),
  vehicleCount: z.number(),
  createdAt: z.number()
});

export const tollTransactionSchema = z.object({
  vehicleId: z.string(),
  timestamp: z.number(),
  plaza: z.string(),
  direction: z.string(),
  amountAED: z.number(),
  source: z.enum(['manual', 'csv', 'pdf', 'api']),
  rawRef: z.string().optional()
});

export const balanceSchema = z.object({
  vehicleId: z.string(),
  currentBalanceAED: z.number(),
  predictedDepletionDate: z.number().optional()
});

export const subscriptionSchema = z.object({
  uid: z.string(),
  plan: z.enum(['b2c_monthly', 'fleet_10']),
  status: z.string(),
  provider: z.enum(['stripe', 'moyasar']),
  renewsAt: z.number()
});

export const alertSchema = z.object({
  uid: z.string(),
  vehicleId: z.string().optional(),
  type: z.enum(['low_balance', 'overspend', 'anomaly']),
  message: z.string(),
  createdAt: z.number(),
  read: z.boolean()
});

export const featureFlagsSchema = z.object({
  flags: z.record(z.boolean())
});
