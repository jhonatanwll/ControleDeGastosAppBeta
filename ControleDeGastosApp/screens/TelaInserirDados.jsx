import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const TelaInserirDados = ({ styleText }) => {
  const [quemPagou, setQuemPagou] = useState(null);
  const [valorGasto, setValorGasto] = useState("");
  const [tipoGasto, setTipoGasto] = useState(null);
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>TELA TÍTULO: TELAINSERIRDADOS</Text>

      <Text style={styles.textStyle}>Input "Valor gasto"</Text>
      <TextInput

      />

      <Text style={styles.textStyle}>Quem pagou:</Text>
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

      <Text style={styles.textStyle}>
        2 Opções "Como dividir- Percentagem ou metade cada"
      </Text>
      <Text style={styles.textStyle}>2 Opções "Gasto ou Ganho"</Text>
      <Text style={styles.textStyle}>"Data"</Text>
      <Text style={styles.textStyle}>"Descrição"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#282c34",
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    color: "#fff",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
