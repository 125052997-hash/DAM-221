import {Text, View, Button, StyleSheet} from 'react-native';
import { useState } from 'react';
export const Perfil=({nombre, carrera, materia, cuatri, style})=>{
  const [mostrar, setMostrar] = useState(false);
  return (
  <View style={[estilos.tarjetas, style]} >  
    <Text style={estilos.nombre}>{nombre}</Text >
    {mostrar && 
    <>
     <Text style={estilos.carrera}>{carrera}</Text>
    <Text style={estilos.otrotexto}>{materia}</Text>
    <Text style={estilos.otrotexto}>{cuatri}</Text>
    </>
    //pa examen:fragment
    }
    <Button title='Ver Perfil' onPress={() => setMostrar(!mostrar)}/>
  </View>
  )
}

const estilos= StyleSheet.create({
  nombre:{
    fontSize: 24,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  carrera:{
    fontSize: 20,
    color: 'blue',
    fontFamily: 'Courier',
    fontStyle: 'italic',
  },
   otrotexto:{
    fontSize: 20,
    color: '#15b217',
    fontFamily: 'Courier',
    fontStyle: 'italic',
  },
  tarjetas:{ 
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  
  }
 
});
