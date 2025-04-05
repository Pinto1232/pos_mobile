import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      initialRouteName='splash'
    >
      <Stack.Screen
        name='splash'
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name='auth/login'
        options={{ headerShown: false }}
      />
      <Stack.Screen name='(tabs)' />
    </Stack>
  );
}
