import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Alert, Button, Switch } from 'react-native';

export default function App() {

  // Estados de los campos de texto
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  // Estados de los Switch
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);


  const registrar = () => {

    // Validar campos vacios
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      Alert.alert(
        'Error',
        'Por favor completa todos los campos.'
      );
      return;
    }

    // Validar que el semestre sea numerico
    if (!/^\d+$/.test(semestre.trim())) {
      Alert.alert(
        'Error',
        'El semestre debe contener solamente numeros.'
      );
      return;
    }

    // Mostrar registro
    Alert.alert(
      'Registro enviado',
      'Nombre: ' + nombre +
      '\nCarrera: ' + carrera +
      '\nSemestre: ' + semestre +
      '\n\nTaller: ' + (taller ? 'Sí' : 'No') +
      '\nConstancia: ' + (constancia ? 'Sí' : 'No') +
      '\nDeportes: ' + (deportes ? 'Sí' : 'No')
    );

  };

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <Text style={styles.titulo}>
          Registro de Evento Universitario
        </Text>

        <Text style={styles.subtitulo}>
          Datos del participante
        </Text>

        {/* Nombre */}
        <Text style={styles.etiqueta}>
          Nombre completo
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        {/* Carrera */}
        <Text style={styles.etiqueta}>
          Carrera
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        {/* Semestre */}
        <Text style={styles.etiqueta}>
          Semestre
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.subtitulo}>
          Preguntas del evento
        </Text>

        {/* Switch del taller */}
        <View style={styles.opcion}>

          <Text style={styles.etiqueta}>
            ¿Asistirá al taller?
          </Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
          />

          <Text>
            {taller ? 'Sí' : 'No'}
          </Text>

        </View>

        {/* Switch de constancia */}
        <View style={styles.opcion}>

          <Text style={styles.etiqueta}>
            ¿Requiere constancia?
          </Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />

          <Text>
            {constancia ? 'Sí' : 'No'}
          </Text>

        </View>

        {/* Switch de deportes */}
        <View style={styles.opcion}>

          <Text style={styles.etiqueta}>
            ¿Participará en actividades deportivas?
          </Text>

          <Switch
            value={deportes}
            onValueChange={setDeportes}
          />

          <Text>
            {deportes ? 'Sí' : 'No'}
          </Text>

        </View>

        {/* Boton de registro */}
        <View style={styles.boton}>

          <Button
            title="Enviar Registro"
            onPress={registrar}
          />

        </View>

      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#253858',
  },

  subtitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  etiqueta: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 15,
  },

  opcion: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  boton: {
    marginTop: 20,
    marginBottom: 30,
  },

});