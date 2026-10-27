/**1. zona de importaciones/ */
import { StatusBar, View, Text, StyleSheet } from 'react-native';

/*
2.zona Render o Main
*/
export default function FlatList() {
  return (

    <View style={styles.container}>
      <Text>Practica 14</Text>
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