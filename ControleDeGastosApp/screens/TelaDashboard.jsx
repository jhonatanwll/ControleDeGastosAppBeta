import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Gastos do Mês" onPress={() => navigation.navigate('TelaListaGastos')} />
      <Button title="Inserir Dados" onPress={() => navigation.navigate('InserirDados')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
