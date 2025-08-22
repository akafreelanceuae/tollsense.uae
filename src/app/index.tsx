import { Link, useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { auth } from '../lib/firebase';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (auth.currentUser) {
      router.replace('/dashboard');
    }
  }, [router]);

  return (
    <View className="p-4">
      <Text>Welcome to TollSense</Text>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </View>
  );
}
