import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, Pressable, Switch, 
  Alert, ScrollView, ActivityIndicator, ImageBackground, 
  SafeAreaView, KeyboardAvoidingView, Platform 
} from 'react-native';

export default function RegistroServicioScreen() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [disponibleUrgente, setDisponibleUrgente] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [publicadoExito, setPublicadoExito] = useState(false);

  const handlePublicar = () => {
    if (!titulo || !descripcion) {
      Alert.alert('Error', 'Por favor llena todos los campos obligatorios.');
      return;
    }
    
    setCargando(true);
    setPublicadoExito(false);

    // Simulamos una petición de guardado
    setTimeout(() => {
      setCargando(false);
      setPublicadoExito(true);
      Alert.alert('¡Éxito!', 'Tu talento ha sido publicado correctamente.');
    }, 1500);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' }} 
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.headerTitle}>Banco de Tiempo - Nuevo Servicio</Text>

            <View style={styles.formCard}>
              <Text style={styles.label}>Título del servicio o talento:</Text>
              <TextInput 
                style={styles.input}
                placeholder="Ej. Clases de Matemáticas" 
                placeholderTextColor="#888"
                value={titulo}
                onChangeText={setTitulo}
              />

              <Text style={styles.label}>Descripción:</Text>
              <TextInput 
                style={[styles.input, styles.textArea]}
                placeholder="Describe brevemente lo que ofreces..." 
                placeholderTextColor="#888"
                multiline={true}
                numberOfLines={4}
                value={descripcion}
                onChangeText={setDescripcion}
              />

              <View style={styles.switchContainer}>
                <Text style={styles.label}>¿Disponible de forma urgente?</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={disponibleUrgente ? "#f5dd4b" : "#f4f3f4"}
                  onValueChange={setDisponibleUrgente}
                  value={disponibleUrgente}
                />
              </View>

              {/* Indicador de carga */}
              {cargando ? (
                <ActivityIndicator size="large" color="#2e7d32" style={{ marginVertical: 15 }} />
              ) : (
                <Pressable onPress={handlePublicar} style={styles.botonPublicar}>
                  <Text style={styles.textoBoton}>Publicar Servicio</Text>
                </Pressable>
              )}

              {/* Mensaje visual de éxito integrado en la tarjeta (Sustituto limpio sin Modal/BottomSheet) */}
              {publicadoExito && (
                <View style={styles.successBox}>
                  <Text style={styles.successText}>✔ ¡Publicación registrada con éxito en el sistema!</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    resizeMode: 'cover' 
  },
  container: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.4)' 
  },
  scrollContainer: { 
    padding: 20, 
    justifyContent: 'center', 
    flexGrow: 1 
  },
  headerTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  formCard: { 
    backgroundColor: 'rgba(255,255,255,0.92)', 
    borderRadius: 12, 
    padding: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5 
  },
  label: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#333', 
    marginBottom: 5, 
    marginTop: 10 
  },
  input: { 
    backgroundColor: '#fff', 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333'
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top'
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  },
  botonPublicar: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  successBox: {
    backgroundColor: '#e8f5e9',
    borderColor: '#4caf50',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center'
  },
  successText: {
    color: '#2e7d32',
    fontWeight: 'bold',
    fontSize: 14
  }
});