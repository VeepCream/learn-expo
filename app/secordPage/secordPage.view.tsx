import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import useSecordPageViewModel from './secordPage.viewModel';
import { CounterSection } from '../../views/components/CounterSection';

/**
 * View - Home Page
 * Uses ViewModel to get data and actions, renders View components
 */
export default function SecordPageView() {
  // Get data and actions from ViewModel
  const { count } = useSecordPageViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 2</Text>
      <Text style={styles.subtitle}>This is the second example page</Text>

      <CounterSection
        count={count.count}
        onIncrease={count.increaseCount}
        onDecrease={count.decreaseCount}
        onQuickSet={count.handleQuickSet}
        showQuickSet={true}
        noteText="✨ This is the same counter from Home Page!"
      />

      <View style={styles.buttonContainer}>
        <Link href="/firstPage" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => router.back()}
        >
          <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Go Back</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 15,
    width: '100%',
    maxWidth: 300,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#007AFF',
  },
});