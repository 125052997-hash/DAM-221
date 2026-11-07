/**1. zona de importaciones/ */
import { StatusBar, View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import  TarjetasScreen from './TarjetasScreen';
import  SafeScreen  from './SafeScreen';
import PressableScreen from './PressableScreen';
import TextImputScreen from './TextInputScreen';
import  FlatListScreen  from './FlatListScreen';
import SplashScreen from './SplashScreen';
import Modal from './Modal';
import Practica from './Practica';

/*
2.zona Render o Main
*/
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');
  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;
    case 'safe':
      return <SafeScreen />;
    case  'Press':
      return <PressableScreen/>
    case 'Text':
      return <TextImputScreen/>
    case 'Flat':
      return <FlatListScreen/>
    case 'splash':
      return <SplashScreen/>
    case 'modal':
      return <Modal/>
    case 'indicator':
      return <Practica/>
    case 'menu':
        default:
            return (
            <View style={styles.container}>
                <Text>Menú de prácticas</Text>
                <Button title="Pract:tarjetas" onPress={()=> setScreen('tarjetas')}> </Button>
                <Button title="Pract:SafeAreaView" onPress={()=> setScreen('safe')}> </Button>
                <Button title="Pract:Pressable" onPress={()=> setScreen('Press')}></Button>
                <Button title="Pract:TextImput" onPress={()=> setScreen('Text')}> </Button>
                <Button title="Pract:FlatList" onPress={()=> setScreen('Flat')}> </Button>
                <Button title="Pract:SplashScreen" onPress={()=> setScreen('splash')}> </Button>
                <Button title="Pract:Modal" onPress={()=> setScreen('modal')}> </Button>
                <Button title="Pract:ActivityIndicator" onPress={()=> setScreen('indicator')}> </Button>
            </View>
            );
}
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
