import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function IniciarSesion() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>TC</Text>
      </View>
      <Text style={styles.welcomeText}>Bienvenido Usuario</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Gmail</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  logoContainer: { alignItems: 'center', marginTop: 50, marginBottom: 30 },
  logoText: { color: colors.textWhite, fontSize: 30, fontWeight: 'bold' },
  welcomeText: { color: colors.textWhite, fontSize: 20, marginBottom: 20 },
  form: { paddingHorizontal: 10 },
  label: { color: colors.textMuted, fontSize: 12, marginBottom: 5, marginTop: 15 },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 5, color: colors.textWhite, padding: 10, height: 40 },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 30 },
  buttonText: { color: colors.textWhite, fontWeight: 'bold' }
});
