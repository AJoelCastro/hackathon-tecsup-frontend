import { Curso } from '@/types/api';
import { StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export function CourseCard({ curso }: { curso: Curso }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">{curso.titulo}</ThemedText>
      {curso.descripcion ? <ThemedText>{curso.descripcion}</ThemedText> : null}
      <ThemedText>{curso.publicado ? 'Publicado' : 'Borrador'}</ThemedText>
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
