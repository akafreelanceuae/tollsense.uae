import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { auth } from '../lib/firebase';
import AlertBanner from '../components/AlertBanner';
import { useUserStore } from '../state/userStore';

export default function Signup() {
  const router = useRouter();
  const setUser = useUserStore(s => s.setUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setLoading(true);
    setError('');
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      setUser(cred.user.uid, cred.user.email || '');
      router.replace('/onboarding');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="p-4 gap-2">
      <AlertBanner visible={!!error} message={error} />
      <TextInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleSignup} loading={loading} disabled={loading}>
        Create Account
      </Button>
      <Button onPress={() => router.push('/login')}>Have an account? Login</Button>
    </View>
  );
}
