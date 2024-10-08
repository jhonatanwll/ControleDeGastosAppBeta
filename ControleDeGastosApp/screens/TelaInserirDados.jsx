import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaInserirDados({ route, navigation }) {
  const { gasto, editIndex } = route.params || {}; // Recebe os dados e o índice
  const [quemPagou, setQuemPagou] = useState(gasto ? gasto.quemPagou : "Nome1");
  const [valorPago, setValorPago] = useState(gasto ? gasto.valorPago : "");
  const [comoDividirValor, setComoDividirValor] = useState(
    gasto ? gasto.comoDividirValor : false
  );
  const [gastoOuGanho, setGastoOuGanho] = useState(
    gasto ? gasto.gastoOuGanho : false
  );
  const [data, setData] = useState(gasto ? new Date(gasto.data) : new Date());
  const [descricao, setDescricao] = useState(gasto ? gasto.descricao : "");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [inputBorderColor, setInputBorderColor] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowDatePicker(false);
    setData(currentDate);
  };

  const formatarMoeda = (valor) => {
    if (!valor) return "0.00";
    const valorNumerico = valor.replace(/[^0-9]/g, "");
    const valorFormatado = (valorNumerico / 100).toFixed(2);
    return valorFormatado.replace(/\d(?=(d{3})+\.)/g, "#&,").replace(".", ",");
  };

  const handleMudancaValor = (text) => {
    const formattedValue = formatarMoeda(text);
    setValorPago(`R$ ${formattedValue}`);
  };

  const handleSave = async () => {
    if (!valorPago || valorPago === "R$ 0,00") {
      setInputBorderColor(true);
      setTimeout(() => {
        setInputBorderColor(false);
      }, 1000);
      return;
    }

    try {
      const dados = {
        quemPagou,
        valorPago,
        comoDividirValor,
        gastoOuGanho,
        data: data.toLocaleDateString(),
        descricao,
      };
      const storedData = await AsyncStorage.getItem("dados");
      let parsedData = storedData ? JSON.parse(storedData) : [];

      if (editIndex !== null && editIndex !== undefined) {
        // Atualiza o item existente
        parsedData[editIndex] = dados;
      } else {
        // Adiciona um novo item
        parsedData.push(dados);
      }

      await AsyncStorage.setItem("dados", JSON.stringify(parsedData));
      Alert.alert("Sucesso", "Dados salvos com sucesso!");

      navigation.navigate("TelaListaGastos");
    } catch (error) {
      Alert.alert("Erro: " + error, "Falha ao salvar os dados.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputValor, { borderWidth: inputBorderColor ? 1 : 0 }]}
        placeholder="R$ 0,00"
        keyboardType="numeric"
        value={valorPago}
        onChangeText={handleMudancaValor}
      />
      <Text>QUEM PAGOU?</Text>
      <View style={styles.buttonGroup}>
        <Button
          title="Nome1"
          onPress={() => setQuemPagou("Nome1")}
          color={quemPagou === "Nome1" ? "blue" : "gray"}
        />
        <Button
          title="Nome2"
          onPress={() => setQuemPagou("Nome2")}
          color={quemPagou === "Nome2" ? "blue" : "gray"}
        />
      </View>

      <Text>COMO SERÁ DIVIDIDO:</Text>
      <View style={styles.switchContainer}>
        <Text>Igualmente</Text>
        <Switch value={comoDividirValor} onValueChange={setComoDividirValor} />
        <Text>Por Porcentagem</Text>
      </View>
      
      <View style={styles.switchContainer}>
        <Text>Gasto</Text>
        <Switch value={gastoOuGanho} onValueChange={setGastoOuGanho} />
        <Text>Ganho</Text>
      </View>


      <Text>DATA:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.input}
          placeholder="Data"
          value={data.toLocaleDateString()}
          editable={false}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={data}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Text>DESCRIÇÃO:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva a descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  inputValor: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 50,
    marginVertical: 10,
    borderColor: "red",
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
