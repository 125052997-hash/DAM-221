import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function PanelAdmin() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerAdmin}>
        <Text style={styles.headerTitle}>Panel de Administrador</Text>
      </View>
      <View style={styles.statsRow}>
        <View style={styles.statBoxLight}><Text style={styles.statValBlue}>248</Text></View>
        <View style={styles.statBoxLight}><Text style={styles.statValGreen}>156</Text></View>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridBtnBlue}><Text style={styles.textWhite}>Gestionar usuarios</Text></TouchableOpacity>
        <TouchableOpacity style={styles.gridBtnBlue}><Text style={styles.textWhite}>Validar servicios</Text></TouchableOpacity>
        <TouchableOpacity style={styles.gridBtnBlue}><Text style={styles.textWhite}>Reportes</Text></TouchableOpacity>
        <TouchableOpacity style={styles.gridBtnDanger}><Text style={styles.textWhite}>Atender quejas</Text></TouchableOpacity>
      </View>
      <View style={styles.alertBoxLight}><Text style={styles.textDark}>7 servicios por validar</Text></View>
      <View style={styles.alertBoxLight}><Text style={styles.textDark}>3 quejas sin resolver</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerAdmin: { backgroundColor: colors.primary, padding: 20, paddingTop: 40 },
  headerTitle: { color: colors.textWhite, fontWeight: 'bold', fontSize: 18 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', margin: 15 },
  statBoxLight: { backgroundColor: colors.cardLight, width: '45%', padding: 20, borderRadius: 10, alignItems: 'center' },
  statValBlue: { color: colors.primary, fontSize: 24, fontWeight: 'bold' },
  statValGreen: { color: colors.success, fontSize: 24, fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginHorizontal: 10 },
  gridBtnBlue: { backgroundColor: colors.primary, width: '42%', margin: 10, padding: 20, borderRadius: 10, alignItems: 'center' },
  gridBtnDanger: { backgroundColor: colors.danger, width: '42%', margin: 10, padding: 20, borderRadius: 10, alignItems: 'center' },
  textWhite: { color: colors.textWhite, fontWeight: 'bold', textAlign: 'center' },
  alertBoxLight: { backgroundColor: colors.cardLight, marginHorizontal: 15, marginVertical: 5, padding: 15, borderRadius: 8 },
  textDark: { color: colors.textDark, fontWeight: 'bold' }
});
