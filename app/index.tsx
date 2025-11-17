import { LoginForm } from '@/components/login-form';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // TODO: Add actual login logic here with backend call
    // For now, just navigate to courses
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)/courses');
    }, 500);
  };

  return (
    <ThemedView style={styles.container}>
      <LoginForm onSubmit={handleLogin} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen