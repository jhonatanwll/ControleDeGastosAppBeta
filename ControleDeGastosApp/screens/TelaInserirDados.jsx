import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const TelaInserirDados = ({ styleText }) => {
  const [quemPagou, setQuemPagou] = useState(null);
  const [valorGasto, setValorGasto] = useState("");
  const [comoDividirValor, setComoDividirValor] = useState(null);
  const [tipoGasto, setTipoGasto] = useState(null);
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>TELA TÍTULO: TELAINSERIRDADOS</Text>

      <Text style={styles.textStyle}>VALOR GASTO</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valorGasto}
        onChangeText={setValorGasto}
      />

      <Text style={styles.textStyle}>QUEM PAGOU?</Text>
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

      <Text style={styles.textStyle}>COMO FOI PAGO?</Text>
      <View style={styles.buttonGroup}>
        <Button
          title="Porcentagem"
          onPress={() => setComoDividirValor("porcentagem")}
          color={comoDividirValor === "porcentagem" ? "blue" : "gray"}
        />
        <Button
          title="Dividido Igualmente"
          onPress={() => setComoDividirValor("igualmente")}
          color={comoDividirValor === "igualmente" ? "blue" : "gray"}
        />
      </View>

      <Text style={styles.textStyle}>É UM GANHO OU GASTO?</Text>
      <View style={styles.buttonGroup}>
        <Button
          title="Ganho"
          onPress={() => setTipoGasto("Ganho")}
          color={tipoGasto === "Ganho" ? "blue" : "gray"}
        />
        <Button
          title="Gasto"
          onPress={() => setTipoGasto("Gasto")}
          color={tipoGasto === "Gasto" ? "blue" : "gray"}
        />
      </View>
      <Text style={styles.textStyle}>DATA:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a data"
        value={data}
        onChangeText={setData}
      />
      <Text style={styles.textStyle}>DESCRIÇÃO:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva a descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
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
    borderRadius: 10,
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
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
