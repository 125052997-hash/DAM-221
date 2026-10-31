/**1. zona de importaciones/ */
import { StatusBar, View, Text, StyleSheet, TextInput, Alert, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';

/*
2.zona Render o Main
*/
export default function TextInputScreen() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [password, setPassword] = useState('');
  const [comentario, setComentario] = useState('');

  const alertaSimple = () => {
    Alert.alert('Hola', '!Teto word of the day!');
  };

  const alertaDosBotones = () => {
    Alert.alert('Confirmar', '¿Desea continuar?', [
      {text: 'Cancelar'},
      {text: 'Aceptar'},
    ]);
  };

  const mostrarNombre = () => {
    Alert.alert('Tu nombre', nombre === '' ? 'No escribiste nada' : nombre)
  };

  return(
    <ScrollView contentContainerStyle = {styles.container}>
      <Text style={styles.titulo}>TextInput y Alert</Text>
      <Text style={styles.subtitulo}>1. TextInput basico</Text>
      <TextInput
      style={styles.input}
      placeholder='Escribe tu nombre'
      value={nombre}
      onChangeText={setNombre}
      />

      <Text> Escribiste: {nombre}</Text>

      <Text style={styles.subtitulo}>2. Teclado numerico</Text>
      <TextInput
      style={styles.input}
      placeholder='Edad'
      keyboardType='numeric'
      maxLength={3}
      value={edad}
      onChangeText={setEdad}
      />

      <Text style={styles.subtitulo}>3. Contraseña: (secureTextEntry)</Text>
      <TextInput
      style={styles.input}
      placeholder='Contraseña'
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
      />

      <Text style={styles.subtitulo}>4. Varias Lineas</Text>
      <TextInput
      style={[styles.input, styles.grande]}
      placeholder='Escribiste un comentario'
      multiline={true}
      numberOfLines={4}
      value={comentario}
      onChangeText={setComentario}
      />
      
      <Text style={styles.subtitulo}>Ejwmplos de alert</Text>
      <View style={styles.boton}>
        <Button title="Alerta simple" onPress={alertaSimple} />
      </View>
      <View style={styles.boton}>
        <Button title="Alerta con dos botones" onPress={alertaDosBotones}/>
      </View>
      <View style={styles.boton}>
        <Button title="Mostrar mi nombre" onPress={mostrarNombre} />
      </View>
    </ScrollView>
  );
}
/**3. zona de estilos/ */
const styles= StyleSheet.create({
  container:{padding: 24, paddingTop: 60, backgroundColor: '#ffff'},
  titulo: {fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10},
  subtitulo: {fontSize: 16, fontWeight: 'bold', marginTop: 16, marginBottom: 6},
  input: {
    borderWidth: 1,
    borderColor: '#ffff',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  grande: {height: 90, textAlignVertical: 'top'},
  boton: {marginBottom: 10},

});