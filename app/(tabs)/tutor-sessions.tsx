import SafeAreaBackground from '@/components/safe-area-background';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import CardComponent from '@/components/tutor-sessions/Card';
import { api } from '@/services/api';
import { SesionTutoria } from '@/types/api';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

const TutorSessionsScreen = () => {
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
    <SafeAreaBackground>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Sesiones de Tutoría</ThemedText>
        <CardComponent title="Asistente Personal" destiny="/tutor-sessions/assistant" icon="calendar"/>
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
    </SafeAreaBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 8,
    height: '100%',
  },
  item: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
  },
});

export default TutorSessionsScreen;