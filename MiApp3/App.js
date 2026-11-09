import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import IniciarSesion from './screens/IniciarSesion';
import RegistrarServicio from './screens/RegistrarServicio';
import PanelAdmin from './screens/PanelAdmin';
import SolicitarServicio from './screens/SolicitarServicio';
import ReportarQueja from './screens/ReportarQueja';
import GestionarUsuarios from './screens/GestionarUsuarios';
import IntercambioCreditos from './screens/IntercambioCreditos';
import Inicio from './screens/Inicio';
import CrearCuenta from './screens/CrearCuenta';
import AtenderQuejas from './screens/AtenderQuejas';
import Perfil from './screens/Perfil';
import ValidarServicios from './screens/ValidarServicios';
import EstadisticasReportes from './screens/EstadisticasReportes';

function MenuScreen({ setPantallaActual }) {
  const pantallas = [
    'Inicio', 'IniciarSesion', 'CrearCuenta', 'Perfil', 
    'RegistrarServicio', 'SolicitarServicio', 'ReportarQueja', 
    'IntercambioCreditos', 'PanelAdmin', 'GestionarUsuarios', 
    'AtenderQuejas', 'ValidarServicios', 'EstadisticasReportes'
  ];

  return (
    <ScrollView style={styles.menuContainer}>
      <Text style={styles.title}>Menú Principal (Temporal)</Text>
      {pantallas.map((pantalla) => (
        <TouchableOpacity 
          key={pantalla} 
          style={styles.button} 
          onPress={() => setPantallaActual(pantalla)}
        >
          <Text style={styles.buttonText}>{pantalla}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('Menu');

  const renderizarPantalla = () => {
    switch (pantallaActual) {
      case 'Inicio': return <Inicio />;
      case 'IniciarSesion': return <IniciarSesion />;
      case 'CrearCuenta': return <CrearCuenta />;
      case 'Perfil': return <Perfil />;
      case 'RegistrarServicio': return <RegistrarServicio />;
      case 'SolicitarServicio': return <SolicitarServicio />;
      case 'ReportarQueja': return <ReportarQueja />;
      case 'IntercambioCreditos': return <IntercambioCreditos />;
      case 'PanelAdmin': return <PanelAdmin />;
      case 'GestionarUsuarios': return <GestionarUsuarios />;
      case 'AtenderQuejas': return <AtenderQuejas />;
      case 'ValidarServicios': return <ValidarServicios />;
      case 'EstadisticasReportes': return <EstadisticasReportes />;
      default: return <MenuScreen setPantallaActual={setPantallaActual} />;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.screenContainer}>
        {renderizarPantalla()}
      </View>
      
      {pantallaActual !== 'Menu' && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => setPantallaActual('Menu')}
        >
          <Text style={styles.backButtonText}>Volver al Menú</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  screenContainer: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3B68FF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#D32F2F',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
