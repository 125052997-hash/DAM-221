import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function IntercambioCreditos() {
  return (
    <View style={styles.container}>
      <View style={styles.headerLight}>
        <Text style={styles.headerTitle}>Intercambio de créditos</Text>
      </View>
      <View style={styles.cardLightBlue}>
        <Text style={styles.balanceLabel}>Tu saldo actual</Text>
        <Text style={styles.balanceValue}>12.5 h</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cardWhiteBox}><Text style={styles.textSuccess}>Dar créditos</Text></TouchableOpacity>
        <TouchableOpacity style={styles.cardWhiteBox}><Text style={styles.textPrimary}>Recibir créditos</Text></TouchableOpacity>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.cardTitle}>Últimas transferencias</Text>
        <View style={styles.transRow}>
          <Text style={styles.textDark}>Transferencia a Carlos R.</Text>
          <Text style={styles.textDanger}>-2 h</Text>
        </View>
        <TouchableOpacity style={styles.btnPrimary}><Text style={styles.textWhite}>Ver historial completo</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerLight: { backgroundColor: colors.headerLight, padding: 20, paddingTop: 40 },
  headerTitle: { color: colors.textDark, fontWeight: 'bold', fontSize: 18 },
  cardLightBlue: { backgroundColor: '#E3F2FD', margin: 20, padding: 20, borderRadius: 10, alignItems: 'center' },
  balanceLabel: { color: colors.primary, fontWeight: 'bold' },
  balanceValue: { color: colors.primary, fontSize: 30, fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 10 },
  cardWhiteBox: { backgroundColor: colors.cardLight, width: '45%', padding: 20, borderRadius: 10, alignItems: 'center' },
  textSuccess: { color: colors.success, fontWeight: 'bold' },
  textPrimary: { color: colors.primary, fontWeight: 'bold' },
  cardWhite: { backgroundColor: colors.cardLight, margin: 20, padding: 20, borderRadius: 10 },
  cardTitle: { color: colors.textDark, fontWeight: 'bold', marginBottom: 15 },
  transRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  textDark: { color: colors.textDark, fontWeight: 'bold' },
  textDanger: { color: colors.danger, fontWeight: 'bold' },
  btnPrimary: { backgroundColor: colors.primary, padding: 15, borderRadius: 5, alignItems: 'center' },
  textWhite: { color: colors.textWhite, fontWeight: 'bold' }
});
