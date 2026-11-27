const STORAGE_KEY = 'usuarios_db';

// Obtener todos los usuarios guardados
export const obtenerUsuariosStorage = async () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error al leer de localStorage:', error);
    return [];
  }
};

// Guardar el arreglo completo de usuarios
export const guardarUsuariosStorage = async (usuarios) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
    return true;
  } catch (error) {
    console.error('Error al guardar en localStorage:', error);
    throw new Error('No se pudo guardar la información en el navegador.');
  }
};

// Eliminar toda la colección (opcional/utilidad)
export const limpiarUsuariosStorage = async () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error al limpiar localStorage:', error);
    return false;
  }
};