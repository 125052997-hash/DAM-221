//* 1. Zona importaciones
import { StatusBar, View, Text, Switch, Image, StyleSheet } from 'react-native';

//* 2. Zona Render o Main

export default function Pressable() {
    return (

    <View style={styles.container}>
        <Text>Practica 16</Text>
        <Text>nigga</Text> 
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

});