import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { api } from '@/services/api';
import { SesionTutoria } from '@/types/api';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TutorSessionsScreen() {
  const [items, setItems] = useState<SesionTutoria[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    // backend route name may vary; adjust if your backend exposes a different path
    api
      .get<SesionTutoria[]>('/sesionestutoria')
      .then((data) => mounted && setItems(data))
      .catch((err) => mounted && setError(err.message || 'Error'))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Sesiones de Tutoría</ThemedText>
        {loading && <ThemedText>Cargando...</ThemedText>}
        {error && <ThemedText>{error}</ThemedText>}
        <FlatList
          data={items}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <ThemedView style={styles.item}>
              <ThemedText type="subtitle">{item.fecha ?? 'Sin fecha'}</ThemedText>
              <ThemedText>{item.notas}</ThemedText>
            </ThemedView>
          )}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 8,
  },
  item: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
  },
});
