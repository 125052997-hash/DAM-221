import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function RegistrarServicio() {
  return (
    <View style={styles.container}>
      <View style={styles.headerLight}>
        <Text style={styles.headerTitle}>Registrar servicio</Text>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.textDark}>Tu servicio</Text>
        <Text style={styles.textPrimary}>Clases de programación Python</Text>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.boldText}>Información del servicio</Text>
        <Text style={styles.textDark}>Categoría: Educación</Text>
        <Text style={styles.textDark}>Duración: 3 horas</Text>
        <Text style={styles.textSuccess}>Créditos a recibir: 3 h</Text>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.boldText}>¿Estás seguro?</Text>
        <Text style={styles.textDark}>Recibirás 3 créditos al completar el servicio</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnCancel}><Text style={styles.textPrimary}>Cancelar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnConfirm}><Text style={styles.textWhite}>Impartir curso</Text></TouchableOpacity>
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
