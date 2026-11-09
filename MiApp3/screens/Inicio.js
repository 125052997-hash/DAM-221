import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function Inicio() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerLight}>
        <Text style={styles.userName}>Bienvenido,{"\n"}Juan Garcia</Text>
        <View style={styles.avatar} />
      </View>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Créditos disponibles</Text>
        <Text style={styles.balanceValue}>12.5 h</Text>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridBtn}><Text style={styles.btnText}>Grupo</Text></TouchableOpacity>
        <TouchableOpacity style={styles.gridBtn}><Text style={styles.btnText}>Solicitar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.gridBtn}><Text style={styles.btnText}>Registrar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.gridBtn}><Text style={styles.btnText}>Intercambio</Text></TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Últimas transacciones</Text>
      <View style={styles.transactionCard}>
        <Text style={styles.transText}>Clases de guitarra</Text>
        <Text style={styles.transPos}>+2h</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerLight: { backgroundColor: colors.headerLight, flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 40 },
  userName: { color: colors.primary, fontWeight: 'bold', fontSize: 16 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.textMuted },
  balanceCard: { backgroundColor: colors.cardLight, margin: 20, padding: 20, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  balanceLabel: { color: colors.primary, fontWeight: 'bold' },
  balanceValue: { color: colors.primary, fontSize: 24, fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginHorizontal: 10 },
  gridBtn: { backgroundColor: colors.primary, width: '40%', margin: 10, padding: 20, borderRadius: 10, alignItems: 'center' },
  btnText: { color: colors.textWhite, fontWeight: 'bold' },
  sectionTitle: { color: colors.textWhite, margin: 20, fontWeight: 'bold' },
  transactionCard: { backgroundColor: colors.cardLight, marginHorizontal: 20, padding: 15, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between' },
  transText: { color: colors.textDark, fontWeight: 'bold' },
  transPos: { color: colors.success, fontWeight: 'bold' }
});
