import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CounterControlsProps {
  onIncrease: () => void;
  onDecrease: () => void;
  onReset?: () => void;
  showReset?: boolean;
}

/**
 * View Component - Counter Controls
 * Pure presentational component for counter actions
 */
export const CounterControls = ({ 
  onIncrease, 
  onDecrease, 
  onReset,
  showReset = false 
}: CounterControlsProps) => {
  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity 
        style={[styles.button, styles.decreaseButton]} 
        onPress={onDecrease}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      
      {showReset && onReset && (
        <TouchableOpacity 
          style={[styles.button, styles.resetButton]} 
          onPress={onReset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      )}
      
      <TouchableOpacity 
        style={[styles.button, styles.increaseButton]} 
        onPress={onIncrease}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  increaseButton: {
    backgroundColor: '#34C759',
  },
  decreaseButton: {
    backgroundColor: '#FF3B30',
  },
  resetButton: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

