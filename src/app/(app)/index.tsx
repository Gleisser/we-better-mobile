import { StyleSheet, View, Button } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useStore } from '@/store/useStore';

export default function HomeScreen() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Welcome to WeBetter!
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        This is the groundwork for your app.
      </ThemedText>

      <View style={styles.counterContainer}>
        <ThemedText type="subtitle">Counter: {count}</ThemedText>
        <View style={styles.buttonRow}>
          <Button title="Decrease" onPress={decrement} />
          <Button title="Reset" onPress={reset} />
          <Button title="Increase" onPress={increment} />
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 40,
    textAlign: 'center',
  },
  counterContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
});
