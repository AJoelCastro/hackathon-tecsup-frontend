import { User } from '@/types/api';
import { StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export function UserCard({ user }: { user: User }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">{user.name ?? 'Sin nombre'}</ThemedText>
      <ThemedText>{user.email ?? 'Sin correo'}</ThemedText>
      <ThemedText>{user.role}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
});
