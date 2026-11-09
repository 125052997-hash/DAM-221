import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme';

export default function ReportarQueja() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerLight}>
        <Text style={styles.headerTitle}>Reportar queja</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Asunto</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Descripción detallada</Text>
        <TextInput style={[styles.input, styles.textArea]} multiline={true} numberOfLines={6} />
        <Text style={styles.label}>Tipo de problema</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Servicio relacionado</Text>
        <TextInput style={styles.input} />
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnCancel}><Text style={styles.textPrimary}>Cancelar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnDanger}><Text style={styles.textWhite}>Enviar queja</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerLight: { backgroundColor: colors.headerLight, padding: 20, paddingTop: 40 },
  headerTitle: { color: colors.textDark, fontWeight: 'bold', fontSize: 18 },
  form: { padding: 20 },
  label: { color: colors.textMuted, fontSize: 12, marginBottom: 5, marginTop: 15 },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 5, color: colors.textWhite, padding: 10, height: 40 },
  textArea: { height: 120, textAlignVertical: 'top' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  btnCancel: { backgroundColor: colors.headerLight, padding: 15, borderRadius: 5, width: '45%', alignItems: 'center' },
  textPrimary: { color: colors.primary, fontWeight: 'bold' },
  btnDanger: { backgroundColor: colors.danger, padding: 15, borderRadius: 5, width: '45%', alignItems: 'center' },
  textWhite: { color: colors.textWhite, fontWeight: 'bold' }
});
