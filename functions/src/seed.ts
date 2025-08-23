import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({ credential: applicationDefault() });
const db = getFirestore();

async function seed() {
  const driverUid = 'driver1';
  const fleetAdminUid = 'fleetAdmin1';

  await db.collection('users').doc(driverUid).set({
    email: 'driver@example.com',
    role: 'driver',
    createdAt: new Date(),
    salikAccountLinked: false,
    defaultVehicleId: 'vehicle1'
  });

  await db.collection('users').doc(fleetAdminUid).set({
    email: 'admin@example.com',
    role: 'fleetAdmin',
    createdAt: new Date(),
    salikAccountLinked: false
  });

  const fleetRef = db.collection('fleets').doc('fleet1');
  await fleetRef.set({
    adminUid: fleetAdminUid,
    name: 'Demo Fleet',
    vehicleCount: 1,
    createdAt: new Date()
  });

  const vehicle1Ref = db.collection('vehicles').doc('vehicle1');
  await vehicle1Ref.set({
    uidOwner: driverUid,
    plate: 'A12345',
    nickname: 'Personal Car',
    createdAt: new Date()
  });

  const vehicle2Ref = db.collection('vehicles').doc('vehicle2');
  await vehicle2Ref.set({
    uidOwner: fleetAdminUid,
    plate: 'B54321',
    nickname: 'Fleet Car',
    fleetId: fleetRef.id,
    createdAt: new Date()
  });

  const now = new Date();
  for (let i = 0; i < 30; i++) {
    const ts = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i, 8).getTime();
    const txRef = db.collection('tollTransactions').doc();
    await txRef.set({
      vehicleId: vehicle1Ref.id,
      timestamp: ts,
      plaza: 'Safa',
      direction: 'N',
      amount: 4,
      source: 'seed',
      rawRef: null
    });
    if (i === 0) {
      const dupRef = db.collection('tollTransactions').doc();
      await dupRef.set({
        vehicleId: vehicle1Ref.id,
        timestamp: ts + 2 * 60 * 1000,
        plaza: 'Safa',
        direction: 'N',
        amount: 4,
        source: 'seed',
        rawRef: null
      });
    }
  }

  console.log('Seed data written.');
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
