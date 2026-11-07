
import React, { useState, useEffect } from 'react';

import {View, Text, TextInput, Pressable, FlatList, ImageBackground, ActivityIndicator, Alert, StyleSheet, StatusBar, Image } from 'react-native';

export default function App() {

  // Estados de la aplicación
  const [mostrarInicio, setMostrarInicio] = useState(true);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);

  const [cargando, setCargando] = useState(false);

  // SplashScreen: espera de 2 segundos
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMostrarInicio(false);
    }, 5000);

    return () => clearTimeout(temporizador);
  }, []);

  // Agregar libro
  const agregarLibro = () => {

    // Validar campos vacíos
    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {
      Alert.alert(
        'Campos incompletos',
        'Por favor, completa todos los campos.'
      );
      return;
    }

    // Activar indicador de carga
    setCargando(true);

    // Simular espera de 4 segundos
    setTimeout(() => {

      // Crear objeto del libro
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      // Agregar libro a la lista
      setLibros((listaAnterior) => [
        ...listaAnterior,
        nuevoLibro
      ]);

      // Limpiar campos
      setTitulo('');
      setAutor('');
      setGenero('');

      // Desactivar indicador
      setCargando(false);

      // Notificar al usuario
      Alert.alert(
        'Libro agregado',
        'El libro se registró correctamente.'
      );

    }, 4000);
  };

  // Pantalla de bienvenida
  if (mostrarInicio) {
    return (
      <View style={styles.splash}>
        <Image source={require('./assets/gu.png')}></Image>
        <Text style={styles.splashTitulo}>
          Mis Libros
        </Text>

        <Text style={styles.splashSubtitulo}>
          Registro de Libros Leídos
        </Text>

        <ActivityIndicator
          size="large"
          color="#E98223"
          style={{ marginTop: 25 }}
        />
      </View>
    );
  }

  // Pantalla principal
  return (
    <ImageBackground
      source={require('./assets/images (10).jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >

      <View style={styles.contenedor}>

        {/* Encabezado */}
        <Text style={styles.tituloPrincipal}>
          Registro de Libros
        </Text>

        <Text style={styles.descripcion}>
          Guarda tus libros favoritos
        </Text>

        {/* Formulario */}
        <View style={styles.formulario}>

          <TextInput
            style={styles.input}
            placeholder="Escribe el título"
            placeholderTextColor="#888"
            value={titulo}
            onChangeText={setTitulo}
          />

          <TextInput
            style={styles.input}
            placeholder="Nombre del autor"
            placeholderTextColor="#888"
            value={autor}
            onChangeText={setAutor}
          />

          <TextInput
            style={styles.input}
            placeholder="Ej. Terror, romance, fantasía..."
            placeholderTextColor="#888"
            value={genero}
            onChangeText={setGenero}
          />

          {/* Botón Pressable */}
          <Pressable
            style={({ pressed }) => [
              styles.boton,
              pressed && styles.botonPresionado,
              cargando && styles.botonDesactivado
            ]}
            onPress={agregarLibro}
            disabled={cargando}
          >

            {cargando ? (
              <View style={styles.contenidoBoton}>
                <ActivityIndicator
                color="#51ff4f"
                size="small"
                />

                <Text style={styles.textoBoton}>
                  Guardando libro...
                </Text>
              </View>
            ) : (
              <Text style={styles.textoBoton}>
                + Agregar libro
              </Text>
            )}

          </Pressable>
          

        </View>

        {/* Título de la lista */}
        <Text style={styles.tituloLista}>
          Mis libros registrados ({libros.length})
        </Text>

        {/* FlatList */}
        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          style={styles.lista}
          contentContainerStyle={styles.contenidoLista}
          showsVerticalScrollIndicator={true}

          ListEmptyComponent={
            <Text style={styles.mensajeVacio}>
              Todavía no has registrado ningún libro.
            </Text>
          }

          renderItem={({ item, index }) => (
            <View style={styles.tarjetaLibro}>

              <Text style={styles.numeroLibro}>
                Libro #{index + 1}
              </Text>

              <Text style={styles.nombreLibro}>
                {item.titulo}
              </Text>

              <Text style={styles.datoLibro}>
                Autor: {item.autor}
              </Text>

              <Text style={styles.datoLibro}>
                Género: {item.genero}
              </Text>

            </View>
          )}
        />

      </View>

    </ImageBackground>
  );
}

// Estilos de la aplicación
const styles = StyleSheet.create({

  // Pantalla de bienvenida
  splash: {
    flex: 1,
    backgroundColor: '#65B936',
    justifyContent: 'center',
    alignItems: 'center',
  },

  splashIcon: {
    fontSize: 85,
    marginBottom: 15,
  },

  splashTitulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  splashSubtitulo: {
    fontSize: 16,
    color: '#FFF0C9',
    marginTop: 10,
  },

  // Fondo principal
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  contenedor: {
    flex: 1,
    backgroundColor: 'rgba(42, 70, 27, 0.65)',
    paddingTop: 45,
    paddingHorizontal: 20,
  },

  // Encabezado
  tituloPrincipal: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  descripcion: {
    fontSize: 15,
    color: '#FFF0C9',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 20,
  },

  etiqueta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#426B29',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#A6CE72',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
    marginBottom: 13,
    color: '#333333',
    fontSize: 14,
  },

  // Botón
  boton: {
    backgroundColor: '#65B936',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 2,
    borderColor: '#4B962A',
  },

  botonPresionado: {
    backgroundColor: '#E98223',
    opacity: 0.9,
  },

  botonDesactivado: {
    backgroundColor: '#A6CE72',
  },

  contenidoBoton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Lista de libros
  tituloLista: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginBottom: 10,
  },

  contenidoLista: {
    paddingBottom: 25,
    flexGrow: 1,
  },

  mensajeVacio: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
    backgroundColor: 'rgba(65, 105, 40, 0.85)',
    padding: 15,
    borderRadius: 12,
  },

  // Tarjetas de libros
  tarjetaLibro: {
    backgroundColor: '#FFF0C9',
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#E98223',
    borderWidth: 1,
    borderColor: '#F4B2C6',
  },

  numeroLibro: {
    fontSize: 12,
    color: '#E98223',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  nombreLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#426B29',
    marginBottom: 7,
  },

  datoLibro: {
    fontSize: 14,
    color: '#55483D',
    marginTop: 3,
  },


});

//aaaaaaaaaaaa