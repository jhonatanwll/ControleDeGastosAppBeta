import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importação correta

export default function TelaListaGastos() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('dados');
        const parsedData = storedData ? JSON.parse(storedData) : [];
        setGastos(parsedData);
      } catch (error) {
        console.error('Erro ao buscar os dados: ', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Quem pagou: {item.quemPagou}</Text>
      <Text style={styles.itemText}>Valor: {item.valorPago}</Text>
      <Text style={styles.itemText}>Tipo: {item.gastos ? 'Gasto' : 'Ganho'}</Text>
      <Text style={styles.itemText}>Data: {item.data}</Text>
      <Text style={styles.itemText}>Descrição: {item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={gastos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});
