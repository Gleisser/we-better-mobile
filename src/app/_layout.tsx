import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

export default function Layout() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (
      // If the user is not authenticated and not in the auth group...
      !isAuthenticated &&
      !inAuthGroup
    ) {
      // Redirect to the login page.
      router.replace('/(auth)/login');
    } else if (isAuthenticated && inAuthGroup) {
      // Redirect away from the login page to the home page.
      router.replace('/(app)');
    }
  }, [isAuthenticated, segments, router]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
