import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function AtenderQuejas() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerAdmin}>
        <Text style={styles.headerTitle}>Atender quejas</Text>
      </View>
      <View style={styles.tabsRow}>
        <View style={styles.tabInactive}><Text style={styles.textPrimary}>Resueltas</Text></View>
        <View style={styles.tabActive}><Text style={styles.textDanger}>Pendientes</Text></View>
        <View style={styles.tabInactive}><Text style={styles.textDark}>Aprobadas</Text></View>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.textDarkBold}>Servicio no completado</Text>
        <Text style={styles.textMuted}>Por Juan Garcia</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnOutlineSuccess}><Text style={styles.textSuccess}>Atender</Text></TouchableOpacity>
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
  tabActive: { borderBottomWidth: 2, borderBottomColor: colors.danger, paddingBottom: 5 },
  tabInactive: { paddingBottom: 5 },
  textPrimary: { color: colors.primary, fontWeight: 'bold' },
  textDanger: { color: colors.danger, fontWeight: 'bold' },
  textDark: { color: colors.textDark, fontWeight: 'bold' },
  cardWhite: { backgroundColor: colors.cardLight, margin: 15, padding: 15, borderRadius: 10 },
  textDarkBold: { color: colors.textDark, fontWeight: 'bold', marginBottom: 5 },
  textMuted: { color: colors.textMuted, fontSize: 12, marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  btnOutlineSuccess: { borderWidth: 1, borderColor: colors.success, padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
  btnOutlineDanger: { borderWidth: 1, borderColor: colors.danger, padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
  textSuccess: { color: colors.success, fontWeight: 'bold' }
});
