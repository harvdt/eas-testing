import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}

export default AuthLayout;
