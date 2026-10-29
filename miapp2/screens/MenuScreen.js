/**1. zona de importaciones/ */
import { StatusBar, View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import  TarjetasScreen from './TarjetasScreen';
import  SafeScreen  from './SafeScreen';
import ScrollScreen from './ScrollScreen';
import PressableScreen from './PressableScreen';
import TextImput from './TextImput';
import  FlatList  from './FlatList';
import ImageScreen from './ImageScreen';
import Modal from './Modal';
import ActivityIndicator from './ActivityIndicator';
import KeyboardScreen from './KeyboardScreen';

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
    case 'scroll':
      return <ScrollScreen/>
    case  'Press':
      return <PressableScreen/>
    case 'Text':
      return <TextImput/>
    case 'Flat':
      return <FlatList/>
    case 'image':
      return <ImageScreen/>
    case 'modal':
      return <Modal/>
    case 'indicator':
      return <ActivityIndicator/>
    case 'key':
      return <KeyboardScreen/>
    case 'menu':
        default:
            return (
            <View style={styles.container}>
                <Text>Menú de prácticas</Text>
                <Button title="Pract:tarjetas" onPress={()=> setScreen('tarjetas')}> </Button>
                <Button title="Pract:SafeAreaView" onPress={()=> setScreen('safe')}> </Button>
                <Button title="Pract:ScrollScreen" onPress={()=> setScreen('scroll')}> </Button>
                <Button title="Pract:Pressable" onPress={()=> setScreen('Press')}></Button>
                <Button title="Pract:TextImput" onPress={()=> setScreen('Text')}> </Button>
                <Button title="Pract:FlatList" onPress={()=> setScreen('Flat')}> </Button>
                <Button title="Pract:ImagineBackground" onPress={()=> setScreen('image')}> </Button>
                <Button title="Pract:Modal" onPress={()=> setScreen('modal')}> </Button>
                <Button title="Pract:ActivityIndicator" onPress={()=> setScreen('indicator')}> </Button>
                <Button title="Pract:Keyboard" onPress={()=> setScreen('key')}> </Button>

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
