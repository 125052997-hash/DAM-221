import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function SolicitarServicio() {
  return (
    <View style={styles.container}>
      <View style={styles.headerLight}>
        <Text style={styles.headerTitle}>Solicitar servicio</Text>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.textDark}>Servicio seleccionado</Text>
        <Text style={styles.textPrimary}>Clases de guitarra con Carlos Rodriguez</Text>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.boldText}>Detalles del servicio</Text>
        <Text style={styles.textDark}>Duración: 2 horas</Text>
        <Text style={styles.textDark}>Créditos: 2 h</Text>
        <Text style={styles.textSuccess}>Tu saldo: 12.5 h</Text>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.boldText}>¿Estás seguro?</Text>
        <Text style={styles.textDark}>Se descontarán 2 créditos de tu saldo</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnCancel}><Text style={styles.textPrimary}>Cancelar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnConfirm}><Text style={styles.textWhite}>Realizar Canje</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerLight: { backgroundColor: colors.headerLight, padding: 20, paddingTop: 40 },
  headerTitle: { color: colors.textDark, fontWeight: 'bold', fontSize: 18 },
  cardWhite: { backgroundColor: colors.cardLight, padding: 20, margin: 15, borderRadius: 10 },
  textDark: { color: colors.textDark, marginVertical: 2 },
  textPrimary: { color: colors.primary, fontWeight: 'bold', marginVertical: 2 },
  textSuccess: { color: colors.success, fontWeight: 'bold', marginTop: 10 },
  boldText: { color: colors.textDark, fontWeight: 'bold', marginBottom: 5 },
  textWhite: { color: colors.textWhite, fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  btnCancel: { backgroundColor: colors.headerLight, padding: 15, borderRadius: 5, width: '40%', alignItems: 'center' },
  btnConfirm: { backgroundColor: colors.primary, padding: 15, borderRadius: 5, width: '40%', alignItems: 'center' }
});
