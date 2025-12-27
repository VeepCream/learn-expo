import { StyleSheet, View } from 'react-native';
import { CounterDisplay } from './CounterDisplay';
import { CounterControls } from './CounterControls';
import { QuickSetButtons } from './QuickSetButtons';

interface CounterSectionProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onReset?: () => void;
  onQuickSet?: (value: number) => void;
  showReset?: boolean;
  showQuickSet?: boolean;
  noteText?: string;
}

/**
 * View Component - Counter Section
 * Composite view component that combines counter display and controls
 */
export const CounterSection = ({
  count,
  onIncrease,
  onDecrease,
  onReset,
  onQuickSet,
  showReset = false,
  showQuickSet = false,
  noteText,
}: CounterSectionProps) => {
  return (
    <View style={styles.container}>
      <CounterDisplay 
        count={count} 
        showNote={!!noteText}
        noteText={noteText}
      />
      
      <CounterControls
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onReset={onReset}
        showReset={showReset}
      />
      
      {showQuickSet && onQuickSet && (
        <QuickSetButtons onQuickSet={onQuickSet} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

