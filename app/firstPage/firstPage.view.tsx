import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import useFirstPageViewModel from './firstPage.viewModel';
import { CounterSection } from '../../views/components/CounterSection';

/**
 * View - Home Page
 * Uses ViewModel to get data and actions, renders View components
 */
export default function HomePage() {
  // Get data and actions from ViewModel
  const { count } = useFirstPageViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Text style={styles.subtitle}>This is the first example page</Text>
      
      <CounterSection
        count={count.count}
        onIncrease={count.increaseCount}
        onDecrease={count.decreaseCount}
        onReset={count.resetCount}
        showReset={true}
        noteText="The counter state is shared across pages using Zustand!"
      />
      

        <TouchableOpacity 
          onPress={() => {
            router.push('/secordPage');
          }} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Page 2</Text>
        </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

