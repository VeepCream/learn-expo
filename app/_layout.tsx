import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="firstPage/index"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen 
        name="firstPage/index" 
        options={{ title: 'Home', }} 
      />
      <Stack.Screen 
        name="secordPage/index" 
        options={{ title: 'Page 2' }} 
      />
    </Stack>
  );
}

