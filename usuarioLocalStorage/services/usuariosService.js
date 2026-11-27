import { obtenerUsuariosStorage, guardarUsuariosStorage } from '../storage/localStorage';

// Validación centralizada de datos del usuario
const validarDatosUsuario = (nombre, edad) => {
  if (!nombre || nombre.trim().length === 0) {
    throw new Error('El nombre del usuario es obligatorio.');
  }
  const edadNumero = Number(edad);
  if (!edad || isNaN(edadNumero) || edadNumero <= 0 || edadNumero > 120) {
    throw new Error('Ingresa una edad válida (entre 1 y 120 años).');
  }
};

// READ: Listar usuarios
export const obtenerUsuarios = async () => {
  return await obtenerUsuariosStorage();
};

// CREATE: Registrar nuevo usuario
export const crearUsuario = async (nombre, edad) => {
  validarDatosUsuario(nombre, edad);

  const usuarios = await obtenerUsuariosStorage();
  const nuevoUsuario = {
    id: Date.now().toString(),
    nombre: nombre.trim(),
    edad: Number(edad),
  };

  const listaActualizada = [...usuarios, nuevoUsuario];
  await guardarUsuariosStorage(listaActualizada);
  return nuevoUsuario;
};

// UPDATE: Actualizar usuario existente por ID
export const actualizarUsuarioPorId = async (id, nombre, edad) => {
  if (!id) {
    throw new Error('ID de usuario no válido.');
  }
  validarDatosUsuario(nombre, edad);

  const usuarios = await obtenerUsuariosStorage();
  const existe = usuarios.some((u) => String(u.id) === String(id));
  if (!existe) {
    throw new Error('El usuario que intentas actualizar no existe.');
  }

  const listaActualizada = usuarios.map((u) =>
    String(u.id) === String(id)
      ? { ...u, nombre: nombre.trim(), edad: Number(edad) }
      : u
  );

  await guardarUsuariosStorage(listaActualizada);
  return true;
};

// DELETE: Eliminar usuario por ID
export const eliminarUsuarioPorId = async (id) => {
  if (!id) {
    throw new Error('ID de usuario no válido.');
  }

  const usuarios = await obtenerUsuariosStorage();
  const listaActualizada = usuarios.filter((u) => String(u.id) !== String(id));
  await guardarUsuariosStorage(listaActualizada);
  return true;
};