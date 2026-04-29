import { StyleSheet, Button } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useStore } from '@/store/useStore';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const login = useStore((state) => state.login);
  const router = useRouter();

  const handleLogin = () => {
    login();
    // In a real app, this layout switch is typically handled automatically
    // by a root _layout observer. For a seamless feel, we replace the route.
    router.replace('/(app)');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Welcome Back</ThemedText>
      <ThemedText style={styles.subtitle}>Sign in to continue to WeBetter.</ThemedText>

      <Button title="Login (Simulate)" onPress={handleLogin} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 40,
    textAlign: 'center',
  },
});
