import { StyleSheet, Text, View } from 'react-native';

interface CounterDisplayProps {
  count: number;
  label?: string;
  showNote?: boolean;
  noteText?: string;
}

/**
 * View Component - Counter Display
 * Pure presentational component, receives props and displays them
 */
export const CounterDisplay = ({ 
  count, 
  label = 'Counter (Zustand Store):',
  showNote = false,
  noteText 
}: CounterDisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{count}</Text>
      {showNote && noteText && (
        <Text style={styles.note}>{noteText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  value: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    color: '#34C759',
    fontWeight: '600',
  },
});

