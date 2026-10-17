/**
      wave.png
      / */
/**1. zona de importaciones/ */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

/*
2.zona Render o Main
*/
export default function App() {
  return (

    <View style={styles.container}>
      {/*  <Text>Hello, World React Native!</Text>
      
      <Image source={require('./assets/wave.png')} ></Image> 

      <Text>---------------------------------------------</Text>

     <Saludo></Saludo><Saludo/>

      <Text>---------------------------------------------</Text>

      <Saludo2></Saludo2><Saludo2/>

      <Text>---------------------------------------------</Text> */}
       
      <Perfil nombre="Jose" carrera="ITIID" materia="Aplicaciones Moviles" cuatri="4"/>
      <Perfil nombre="Erick" carrera="ITIID" materia="Aplicaciones Moviles" cuatri="4"/>
      <Perfil nombre="Alvaro" carrera="ITIID" materia="Aplicaciones Moviles" cuatri="4"/>


      <StatusBar style="auto" />
    </View>
  );
}
/**3. zona de estilos/ */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
