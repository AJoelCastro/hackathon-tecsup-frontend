import { PerfilEstudiante, User } from '@/types/api';
import axios from 'axios';

const BACKEND_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(`${BACKEND_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserById(id: string | number): Promise<User> {
  try {
    const response = await axios.get<User>(`${BACKEND_URL}/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createUser(payload: Partial<User>): Promise<User> {
  try {
    const response = await axios.post<User>(`${BACKEND_URL}/users`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Verifica usuario (ruta: GET /verifyUser/:userId)
export async function verifyUser(userId: string | number): Promise<any> {
  try {
    const response = await axios.get(`${BACKEND_URL}/verifyUser/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Buscar usuario por email (ruta: GET /users/email/:email)
export async function fetchUserByEmail(email: string): Promise<User> {
  try {
    const response = await axios.get<User>(`${BACKEND_URL}/users/email/${encodeURIComponent(email)}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Obtener usuarios con filtros (ruta: GET /users?...)
export async function fetchUsersWithFilters(filters?: Record<string, string | number | boolean>): Promise<User[]> {
  try {
    const response = await axios.get(`${BACKEND_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
      }, 
      params: filters,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Actualizar usuario (ruta: PUT /users/:id)
export async function updateUser(id: string | number, payload: Partial<User>): Promise<User> {
  try {
    const response = await axios.put<User>(`${BACKEND_URL}/users/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Desactivar / eliminar usuario (ruta: DELETE /users/:id)
export async function deactivateUser(id: string | number): Promise<void> {
  try {
    await axios.delete(`${BACKEND_URL}/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw error;
  }
}

// Obtener usuario con su perfil (ruta: GET /users/:userId/profile)
export async function getUserWithProfile(userId: string | number): Promise<any> {
  try {
    const response = await axios.get(`${BACKEND_URL}/users/${userId}/profile`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// --- Rutas de perfil-estudiante ---

export async function createPerfilEstudiante(payload: Partial<PerfilEstudiante>): Promise<PerfilEstudiante> {
  try {
    const response = await axios.post<PerfilEstudiante>(`${BACKEND_URL}/perfil-estudiante`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPerfilEstudianteByUserId(usuarioId: string | number): Promise<PerfilEstudiante> {
  try {
    const response = await axios.get<PerfilEstudiante>(`${BACKEND_URL}/perfil-estudiante/${usuarioId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updatePerfilEstudiante(usuarioId: string | number, payload: Partial<PerfilEstudiante>): Promise<PerfilEstudiante> {
  try {
    const response = await axios.put<PerfilEstudiante>(`${BACKEND_URL}/perfil-estudiante/${usuarioId}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateStreakEstudiante(usuarioId: string | number, payload: { streak?: number }): Promise<any> {
  try {
    const response = await axios.patch(`${BACKEND_URL}/perfil-estudiante/${usuarioId}/streak`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addExperienciaEstudiante(usuarioId: string | number, payload: { experiencia: number }): Promise<any> {
  try {
    const response = await axios.patch(`${BACKEND_URL}/perfil-estudiante/${usuarioId}/experiencia`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// --- Admin ---

export async function verifyAdminCredentials(credentials: { email: string; password: string }): Promise<any> {
  try {
    const response = await axios.post(`${BACKEND_URL}/admin/verify`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// --- Estadísticas ---

export async function getEstadisticasUsuarios(): Promise<any> {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/estadisticas/usuarios`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTopEstudiantesPorExperiencia(params?: Record<string, string | number | boolean>): Promise<any[]> {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/estadisticas/top-estudiantes`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createSession(): Promise<any> {
  try {
      const response = await axios.post(`http://192.168.101.23:8080/api/openai/audio-speech/session`);
      return response.data; 
  } catch (error) {
      console.error('Error creating session:', error);
      throw error;
  }
}


