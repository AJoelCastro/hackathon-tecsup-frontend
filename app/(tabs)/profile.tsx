import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Perfil</ThemedText>
        <ThemedText>Este es un placeholder de perfil. Conecta con tu sistema de autenticación para mostrar datos reales.</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 8,
    height: '100%',
  },
});
