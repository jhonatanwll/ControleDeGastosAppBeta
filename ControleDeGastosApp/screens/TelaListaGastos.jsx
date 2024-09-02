import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaListaGastos({ navigation }) {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("dados");
        const parsedData = storedData ? JSON.parse(storedData) : [];
        setGastos(parsedData);
      } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (index) => {
    navigation.navigate("TelaInserirDados", {
      gasto: gastos[index],
      editIndex: index,
    });
  };

  const handleDelete = async (index) => {
    const updatedGastos = gastos.filter((_, i) => i !== index);

    try {
      await AsyncStorage.setItem("dados", JSON.stringify(updatedGastos));
      setGastos(updatedGastos);
      Alert.alert("Sucesso", "Gasto excluído com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Falha ao excluir o gasto.");
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemText}>Quem pagou: {item.quemPagou}</Text>
        <Text style={styles.itemText}>Valor: {item.valorPago}</Text>
        <Text style={styles.itemText}>
          Tipo: {item.gastoOuGanho ? "Gasto" : "Ganho"}
        </Text>
        <Text style={styles.itemText}>Data: {item.data}</Text>
        <Text style={styles.itemText}>Descrição: {item.descricao}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button title="Editar" onPress={() => handleEdit(index)} />
        <Button
          title="Excluir"
          onPress={() => handleDelete(index)}
          color="red"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos do mês</Text>
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
    backgroundColor: "#fff",
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120, // Ajuste o tamanho conforme necessário
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
