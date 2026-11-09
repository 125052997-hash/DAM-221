import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function GestionarUsuarios() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerAdmin}>
        <Text style={styles.headerTitle}>Gestionar usuarios</Text>
      </View>
      <View style={styles.tabsRow}>
        <View style={styles.tabActive}><Text style={styles.textPrimary}>Activos</Text></View>
        <View style={styles.tabInactive}><Text style={styles.textDanger}>Inactivos</Text></View>
        <View style={styles.tabInactive}><Text style={styles.textDark}>Todos</Text></View>
      </View>
      <View style={styles.cardDark}>
        <View style={styles.rowBetween}>
          <Text style={styles.textWhite}>Laura Ramirez</Text>
          <Text style={styles.badgeSuccess}>Activo</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnOutlinePrimary}><Text style={styles.textPrimary}>Editar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnOutlineDanger}><Text style={styles.textDanger}>Eliminar</Text></TouchableOpacity>
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
  textWhite: { color: colors.textWhite, fontWeight: 'bold' },
  cardDark: { backgroundColor: colors.cardDark, margin: 15, padding: 15, borderRadius: 10 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  badgeSuccess: { color: colors.success, fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  btnOutlinePrimary: { borderWidth: 1, borderColor: colors.primary, padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
  btnOutlineDanger: { borderWidth: 1, borderColor: colors.danger, padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' }
});
