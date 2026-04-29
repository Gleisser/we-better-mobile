import { StyleSheet, Button } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useStore } from '@/store/useStore';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const logout = useStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Your Profile</ThemedText>
      <ThemedText style={styles.subtitle}>This is a protected route.</ThemedText>

      <Button title="Logout" onPress={handleLogout} color="#d9534f" />
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
  },
});
