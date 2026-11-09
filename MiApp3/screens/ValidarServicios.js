import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function ValidarServicios() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerAdmin}>
        <Text style={styles.headerTitle}>Validar servicios</Text>
      </View>
      <View style={styles.tabsRow}>
        <View style={styles.tabActive}><Text style={styles.textPrimary}>Pendientes</Text></View>
        <View style={styles.tabInactive}><Text style={styles.textDanger}>Rechazados</Text></View>
        <View style={styles.tabInactive}><Text style={styles.textDark}>Aprobados</Text></View>
      </View>
      <View style={styles.cardDark}>
        <Text style={styles.textWhite}>Clases de repostería</Text>
        <Text style={styles.textMuted}>Por Sofia Martinez</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnOutlineSuccess}><Text style={styles.textSuccess}>Aprobar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnOutlineDanger}><Text style={styles.textDanger}>Rechazar</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerAdmin: { backgroundColor: colors.primary, padding: 20, paddingTop: 40 },
  headerTitle: { color: colors.textWhite, fontWeight: 'bold', fontSize: 18 },
  tabsRow: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: colors.cardLight, padding: 10 },
  tabActive: { borderBottomWidth: 2, borderBottomColor: colors.primary, paddingBottom: 5 },
  tabInactive: { paddingBottom: 5 },
  textPrimary: { color: colors.primary, fontWeight: 'bold' },
  textDanger: { color: colors.danger, fontWeight: 'bold' },
  textDark: { color: colors.textDark, fontWeight: 'bold' },
  textWhite: { color: colors.textWhite, fontWeight: 'bold', marginBottom: 5 },
  textMuted: { color: colors.textMuted, fontSize: 12, marginBottom: 15 },
  cardDark: { backgroundColor: colors.cardDark, margin: 15, padding: 15, borderRadius: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  btnOutlineSuccess: { borderWidth: 1, borderColor: colors.success, padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
  btnOutlineDanger: { borderWidth: 1, borderColor: colors.danger, padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
  textSuccess: { color: colors.success, fontWeight: 'bold' }
});
