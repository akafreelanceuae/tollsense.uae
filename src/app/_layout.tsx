import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Provider as PaperProvider } from 'react-native-paper';
import { auth } from '../lib/firebase';
import { useUserStore } from '../state/userStore';
import { theme } from '../styles/theme';

export default function Layout() {
  const router = useRouter();
  const setUser = useUserStore(s => s.setUser);
  const clear = useUserStore(s => s.clear);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user.uid, user.email || '');
      } else {
        clear();
        router.replace('/login');
      }
    });
    return unsub;
  }, [router, setUser, clear]);

  return (
    <PaperProvider theme={theme.light}>
      <Stack />
    </PaperProvider>
  );
}
