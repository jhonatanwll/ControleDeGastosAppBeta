import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TelaInserirDados({ navigation }) {
  const [quemPagou, setQuemPagou] = useState(null);
  const [valorPago, setValorPago] = useState("");
  const [comoDividirValor, setComoDividirValor] = useState(null);
  const [gastoOuGanho, setGastoOuGanho] = useState(null);
  const [data, setData] = useState(new Date());
  const [descricao, setDescricao] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

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
    // console.log(formattedValue)
  };

  const handleSave = () => {
    // Lógica para salvar os dados
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>TELA TÍTULO: TELAINSERIRDADOS</Text>

      <TextInput
        style={styles.inputValor}
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

      <View style={styles.switchContainer}>
        <Text>Gasto</Text>
        <Switch value={gastoOuGanho} onValueChange={setGastoOuGanho} />
        <Text>Ganho</Text>
      </View>

      <Text>COMO SERÁ DIVIDIDO:</Text>
      <View style={styles.switchContainer}>
        <Text>Igualmente</Text>
        <Switch value={comoDividirValor} onValueChange={setComoDividirValor} />
        <Text>Por Porcentagem</Text>
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
{
  /* 

TELA INSERÇÃO DE DADOS:
    - Quem pagou (duas opções por agora)
    - Valor pago
    - Gastos/Ganhos
    - Data
    - Descrição
        */
}
