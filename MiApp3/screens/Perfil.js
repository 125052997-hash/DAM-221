import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerLight}>
        <Text style={styles.textPrimary}>Configuración</Text>
        <Text style={styles.textDanger}>Cerrar Sesion</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.email}>juan@gmail.com</Text>
          <Text style={styles.memberSince}>Miembro desde: 12/01/2024</Text>
        </View>
      </View>
      <View style={styles.statsRow}>
        <View style={styles.statBox}><Text style={styles.statValBlue}>4.7</Text></View>
        <View style={styles.statBox}><Text style={styles.statValGreen}>8</Text></View>
        <View style={styles.statBoxMain}><Text style={styles.statValBlue}>12.5 h</Text></View>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.cardTitle}>Información de contacto</Text>
        <Text style={styles.textDark}>Email: juan@gmail.com</Text>
      </View>
      <View style={styles.cardWhite}>
        <Text style={styles.cardTitle}>Servicios que ofreces</Text>
        <Text style={styles.textDark}>Clases de programación</Text>
        <TouchableOpacity style={styles.btnOutline}><Text style={styles.textPrimary}>+ Agregar servicio</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerLight: { backgroundColor: colors.headerLight, flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 40 },
  textPrimary: { color: colors.primary, fontWeight: 'bold' },
  textDanger: { color: colors.danger, fontWeight: 'bold' },
  profileSection: { flexDirection: 'row', padding: 20, alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: colors.textMuted, marginRight: 15 },
  email: { color: colors.textWhite, fontWeight: 'bold', fontSize: 16 },
  memberSince: { color: colors.textMuted, fontSize: 12 },
  statsRow: { flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between' },
  statBox: { backgroundColor: colors.cardLight, width: '30%', padding: 10, borderRadius: 8, alignItems: 'center' },
  statBoxMain: { backgroundColor: '#E3F2FD', width: '30%', padding: 10, borderRadius: 8, alignItems: 'center' },
  statValBlue: { color: colors.primary, fontWeight: 'bold', fontSize: 18 },
  statValGreen: { color: colors.success, fontWeight: 'bold', fontSize: 18 },
  cardWhite: { backgroundColor: colors.cardLight, margin: 15, padding: 15, borderRadius: 10 },
  cardTitle: { color: colors.textDark, fontWeight: 'bold', marginBottom: 10 },
  textDark: { color: colors.textDark, marginBottom: 5 },
  btnOutline: { borderWidth: 1, borderColor: colors.primary, padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }
});
