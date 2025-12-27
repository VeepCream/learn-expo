import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface QuickSetButtonsProps {
  onQuickSet: (value: number) => void;
  values?: number[];
}

/**
 * View Component - Quick Set Buttons
 * Pure presentational component for quick value setting
 */
export const QuickSetButtons = ({ 
  onQuickSet, 
  values = [10, 50, 100] 
}: QuickSetButtonsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quick Set:</Text>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          style={styles.button}
          onPress={() => onQuickSet(value)}
        >
          <Text style={styles.buttonText}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

