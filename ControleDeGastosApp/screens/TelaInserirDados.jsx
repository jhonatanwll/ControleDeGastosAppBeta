import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Switch,
  StyleSheet,
} from "react-native";

const TelaInserirDados = ({ styleText }) => {
  const [quemPagou, setQuemPagou] = useState(null);
  const [valorPago, setValorPago] = useState("");
  const [comoDividirValor, setComoDividirValor] = useState(null);
  const [gastoOuGanho, setGastoOuGanho] = useState(null);
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSave = () => {
    // Lógica para salvar os dados
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>TELA TÍTULO: TELAINSERIRDADOS</Text>

      <Text>VALOR PAGO:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor PAGO"
        keyboardType="numeric"
        value={valorPago}
        onChangeText={setValorPago}
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
      <TextInput
        style={styles.input}
        placeholder="Digite a data"
        value={data}
        onChangeText={setData}
      />
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
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    // borderRadius: 10,
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

export default TelaInserirDados;

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
