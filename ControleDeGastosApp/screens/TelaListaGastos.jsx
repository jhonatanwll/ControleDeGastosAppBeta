import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyData = [
  { id: '1', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  { id: '2', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  { id: '3', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  { id: '4', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  { id: '5', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  { id: '6', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  { id: '7', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  { id: '8', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  { id: '9', descricao: 'Supermercado', valor: 100, quemPagou: 'Pessoa 1', data: '2024-08-01', tipo: 'Gasto' },
  // Outros itens de exemplo...
];

export default function GastosMesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.descricao}</Text>
            <Text>{item.valor}</Text>
            <Text>{item.quemPagou}</Text>
            <Text>{item.data}</Text>
            <Text>{item.tipo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
});
