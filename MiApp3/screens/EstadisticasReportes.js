import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function EstadisticasReportes() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerAdmin}>
        <Text style={styles.headerTitle}>Estadísticas y reportes</Text>
      </View>
      <View style={styles.statsRow}>
        <View style={styles.statBoxLight}><Text style={styles.statValDanger}>47</Text></View>
        <View style={styles.statBoxLight}><Text style={styles.statValDark}>3</Text></View>
      </View>
      <View style={styles.statsRow}>
        <View style={styles.statBoxLight}><Text style={styles.statValGreen}>44</Text></View>
        <View style={styles.statBoxLight}><Text style={styles.statValBlue}>93.6%</Text></View>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.textDarkBold}>Descargas</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnOutlineDark}><Text style={styles.textDark}>PDF</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnOutlineDanger}><Text style={styles.textDanger}>EXCEL</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerAdmin: { backgroundColor: colors.primary, padding: 20, paddingTop: 40 },
  headerTitle: { color: colors.textWhite, fontWeight: 'bold', fontSize: 18 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', margin: 10 },
  statBoxLight: { backgroundColor: colors.cardLight, width: '45%', padding: 20, borderRadius: 10, alignItems: 'center' },
  statValDanger: { color: colors.danger, fontSize: 24, fontWeight: 'bold' },
  statValDark: { color: colors.textDark, fontSize: 24, fontWeight: 'bold' },
  statValGreen: { color: colors.success, fontSize: 24, fontWeight: 'bold' },
  statValBlue: { color: colors.primary, fontSize: 24, fontWeight: 'bold' },
  cardWhite: { backgroundColor: colors.cardLight, margin: 15, padding: 15, borderRadius: 10 },
  textDarkBold: { color: colors.textDark, fontWeight: 'bold', marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  btnOutlineDark: { borderWidth: 1, borderColor: colors.textDark, padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
  btnOutlineDanger: { borderWidth: 1, borderColor: colors.danger, padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
  textDark: { color: colors.textDark, fontWeight: 'bold' },
  textDanger: { color: colors.danger, fontWeight: 'bold' }
});
