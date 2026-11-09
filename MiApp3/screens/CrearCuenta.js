import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme';

export default function CrearCuenta() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Crear Cuenta</Text>
        <Text style={styles.subtitle}>Banco de Tiempo y Talento</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre completo</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Telefono</Text>
        <TextInput style={styles.input} keyboardType="phone-pad" />
        <Text style={styles.label}>Gmail</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry />
        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  header: { alignItems: 'center', marginVertical: 30 },
  title: { fontSize: 22, color: colors.textWhite, fontWeight: 'bold' },
  subtitle: { fontSize: 12, color: colors.textMuted, marginTop: 5 },
  form: { paddingHorizontal: 10 },
  label: { color: colors.textMuted, fontSize: 12, marginBottom: 5, marginTop: 15 },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 5, color: colors.textWhite, padding: 10, height: 40 },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 30 },
  buttonText: { color: colors.textWhite, fontWeight: 'bold' }
});
