import { CourseCard } from '@/components/course-card';
import SafeAreaBackground from '@/components/safe-area-background';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { fetchCursos } from '@/services/courseService';
import { Curso } from '@/types/api';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

const CoursesScreen = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchCursos()
      .then((data) => mounted && setCursos(data))
      .catch((err) => mounted && setError(err.message || 'Error'))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SafeAreaBackground>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Cursos</ThemedText>
        
        {loading && <ThemedText>Cargando...</ThemedText>}
        {error && <ThemedText>{error}</ThemedText>}
        <FlatList
          data={cursos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CourseCard curso={item} />}
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
   glassView: {
    position: 'absolute',
    top: 100,
    width: "90%",
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default CoursesScreen;