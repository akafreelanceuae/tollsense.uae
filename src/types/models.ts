export interface User {
  uid: string;
  email: string;
  role: 'driver' | 'fleetAdmin';
  createdAt: number;
  salikAccountLinked: boolean;
  defaultVehicleId?: string;
}

export interface Vehicle {
  vehicleId: string;
  uidOwner: string;
  plate: string;
  nickname?: string;
  fleetId?: string;
  createdAt: number;
}

export interface Fleet {
  fleetId: string;
  adminUid: string;
  name: string;
  vehicleCount: number;
  createdAt: number;
}

export interface TollTransaction {
  txId: string;
  vehicleId: string;
  timestamp: number;
  plaza: string;
  direction: string;
  amountAED: number;
  source: 'manual' | 'csv' | 'pdf' | 'api';
  rawRef?: string;
}

export interface Balance {
  balanceId: string;
  vehicleId: string;
  currentBalanceAED: number;
  predictedDepletionDate?: number;
}

export interface Subscription {
  subId: string;
  uid: string;
  plan: 'b2c_monthly' | 'fleet_10';
  status: string;
  provider: 'stripe' | 'moyasar';
  renewsAt: number;
}

export interface Alert {
  alertId: string;
  uid: string;
  vehicleId?: string;
  type: 'low_balance' | 'overspend' | 'anomaly';
  message: string;
  createdAt: number;
  read: boolean;
}

export interface FeatureFlags {
  flags: Record<string, boolean>;
}
