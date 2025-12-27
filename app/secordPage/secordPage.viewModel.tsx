import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { useCounterViewModel } from '../../viewmodels/useCounterViewModel';

/**
 * View - Home Page
 * Uses ViewModel to get data and actions, renders View components
 */
export default function useFirstPageViewModel() {
  // Get data and actions from ViewModel
  const { count, increaseCount, decreaseCount, resetCount, handleQuickSet } = useCounterViewModel();

  return {
    count:{
      count,
      increaseCount,
      decreaseCount,
      resetCount,
      handleQuickSet
    }
  }
}
