/**
      wave.png
      / */
/**1. zona de importaciones/ */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';

/*
2.zona Render o Main
*/
export default function App() {
  return (

    <View style={styles.container}>
      <Text>Hello, World React Native!</Text>
      
      <Image source={require('./assets/palabrota.jpg')} ></Image> 

      <Text>---------------------------------------------</Text>

      <Saludo></Saludo><Saludo/>

      <Text>---------------------------------------------</Text>

      <Saludo2></Saludo2><Saludo2/>

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
