import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { auth, db } from '../lib/firebase';
import { doc, setDoc, addDoc, collection, updateDoc } from 'firebase/firestore';
import AlertBanner from '../components/AlertBanner';

export default function Onboarding() {
  const router = useRouter();
  const [plate, setPlate] = useState('');
  const [fleetCode, setFleetCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;
    setLoading(true);
    setError('');
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        email: user.email,
        role: 'driver',
        createdAt: Date.now(),
        salikAccountLinked: false
      });
      const vehicleRef = await addDoc(collection(db, 'vehicles'), {
        uidOwner: user.uid,
        plate,
        fleetId: fleetCode || undefined,
        createdAt: Date.now()
      });
      await updateDoc(userRef, { defaultVehicleId: vehicleRef.id });
      router.replace('/dashboard');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="p-4 gap-2">
      <AlertBanner visible={!!error} message={error} />
      <TextInput label="Plate Number" value={plate} onChangeText={setPlate} />
      <TextInput label="Fleet Code (optional)" value={fleetCode} onChangeText={setFleetCode} />
      <Button mode="contained" onPress={handleSave} loading={loading} disabled={loading || !plate}>
        Continue
      </Button>
    </View>
  );
}
