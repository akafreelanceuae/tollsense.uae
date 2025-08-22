import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { auth } from '../lib/firebase';
import AlertBanner from '../components/AlertBanner';
import { useUserStore } from '../state/userStore';

export default function Login() {
  const router = useRouter();
  const setUser = useUserStore(s => s.setUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      setUser(cred.user.uid, cred.user.email || '');
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
      <TextInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} loading={loading} disabled={loading}>
        Login
      </Button>
      <Button onPress={() => router.push('/signup')}>No account? Sign Up</Button>
    </View>
  );
}
