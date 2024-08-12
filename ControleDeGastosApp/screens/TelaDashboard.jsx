import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import ButtonChangeScreen from "../components/ButtonChangeScreen";
import TelaListaGastos from "./TelaListaGastos";

const TelaDashboard = ({ styleText }) => {
  return (
    <View>
      <Text style={styleText}>TELA DE DASHBOARD</Text>
      <View>
        {/* <Text style={styleText}> Lista de Dados aqui</Text> */}
        <TelaListaGastos styleText={styles.buttonText} />
      </View>
      <ButtonChangeScreen
        label="TelaInserirDados"
        goto="TelaInserirDados"
        styleText={styles.buttonText}
      />
      {/* 
        - Lista de gastos do mês
        - Botão para acessar tela inserir  
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
  },
});

export default TelaDashboard;

{
  /*

TELA DASHBOARD:
          - Acesso a tela de gastos do mês
          - Botão para tela de inserção de dados
        */
}
