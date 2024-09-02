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
  const { gasto, editIndex } = route.params || {};
  const [quemPagou, setQuemPagou] = useState(gasto ? gasto.quemPagou : "Nome1");
  const [valorPago, setValorPago] = useState(gasto ? gasto.valorPago : "");
  const [divisaoValor, setDivisaoValor] = useState(
    gasto ? gasto.divisaoValor : false
  );
  const [tipo, setTipo] = useState(gasto ? gasto.tipo : false);
  const [data, setData] = useState(gasto ? new Date(gasto.data) : new Date());
  const [descricao, setDescricao] = useState(gasto ? gasto.descricao : "");
  const [mostrarSeletorData, setmostrarSeletorData] = useState(false);

  /*
  // OS VALORES INICIAIS SERÃO PEGOS DE UMA LISTA.
  // QUANDO TIVER VINDO DA TELA DE LISTA DE GASTOS COM DADOS PARA EDIÇÃO: COLOCAR ESSES DADOS INICIAIS PARA SEREM ALTERADOS
  // QUANDO TIVER VINDO DA TELA DASHBOARD OS DADOS INICIAIS PRECISAM ESTAR ZERADOS.

  //   useEffect(() => {
  //     valoresIniciais()
  //   }, [])
  // const definirValores = {
  //     quemPagou: "Nome1",
  //     valorPago: 13,
  //     divisaoValor: true,
  //     tipo: true,
  //     data: "2024-08-01",
  //     descricao: "Texto...",
  //   }
  //   // Outros itens de exemplo...
  // useEffect(()=>{
  //   valoresIniciais();
  // }, [])

  // const valoresIniciais = () => {
  //   const valores = definirValores;
  //   setQuemPagou(valores.quemPagou);
  //   setValorPago(valores.valorPago);
  //   setDivisaoValor(valores.divisaoValor);
  //   setTipo(valores.tipo);
  //   setData(valores.data);
  //   setDescricao(valores.descricao);
  //   setmostrarSeletorData(false);
  // };
*/
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setmostrarSeletorData(false);
    setData(currentDate);
  };

  const handleMudancaValor = (txt) => {
    //formatar valor
    setValorPago(txt);
  };

  const handleSave = async () => {
    // Salvar
    if (!valorPago || valorPago === "0") {
      Alert.alert("Insira um valor válido.");
      return;
    }

    try {
      const dados = {
        quemPagou,
        valorPago,
        divisaoValor,
        tipo,
        data: data.toLocaleDateString(),
        descricao,
      };

      const dadosSalvos = await AsyncStorage.getItem("dados");
      let parsedData = dadosSalvos ? JSON.parse(dadosSalvos) : [];

      if (editIndex !== null && editIndex !== undefined) {
        // Atualiza o item existente apenas
        parsedData[editIndex] = dados;
      } else {
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
    <View style={StyleSheet.container}>
      <Text>Valor pago:</Text>
      <TextInput
        placeholder="R$ 0,00"
        keyboardType="numeric"
        value={valorPago}
        onChangeText={handleMudancaValor}
      />

      <Text>Quem pagou:</Text>
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

      <Text>Divisão de Valor: {divisaoValor}</Text>
      <View style={styles.switchContainer}>
        <Text>Igualmente</Text>
        <Switch value={divisaoValor} onValueChange={setDivisaoValor} />
        <Text>Por Porcentagem</Text>
      </View>

      <Text>Tipo:</Text>
      <View style={styles.switchContainer}>
        <Text>Gasto</Text>
        <Switch value={tipo} onValueChange={setTipo} />
        <Text>Ganho</Text>
      </View>

      <Text>DATA:</Text>
      <TouchableOpacity onPress={() => setmostrarSeletorData(true)}>
        <TextInput
          style={styles.input}
          placeholder="Data"
          value={data.toLocaleDateString()}
          editable={false}
        />
      </TouchableOpacity>

      {mostrarSeletorData && (
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
