/**
      wave.png
      / */
/**1. zona de importaciones/ */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import {Perfil} from '../components/Perfil';

/*
2.zona Render o Main
*/
export default function TarjetasScreen() {
  return (

    <View style={styles.container}>
       
      <Perfil style={styles.tarjeta1} nombre="Jose" carrera="ITIID" materia="Aplicaciones Moviles" cuatri="4"/>
      <Perfil style={styles.tarjeta2} nombre="Erick" carrera="ITIID" materia="Aplicaciones Moviles" cuatri="4"/>
      <Perfil style={styles.tarjeta3} nombre="Alvaro" carrera="ITIID" materia="Aplicaciones Moviles" cuatri="4"/>


      <StatusBar style="auto" />
    </View>
  );
}
/**3. zona de estilos/ */
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fffbfb',

    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-evenly',

  },

  tarjetas1:{backgroundColor:'#ffffff'},
  tarjeta2:{backgroundColor:'#6d0cdc'},
  tarjeta3:{backgroundColor:'#831283'},
});
