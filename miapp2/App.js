/**1. zona de importaciones/ */
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';

/*
2.zona Render o Main
*/
export default function App() {
  return (

    <View style={styles.container}>
      <MenuScreen></MenuScreen>
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
