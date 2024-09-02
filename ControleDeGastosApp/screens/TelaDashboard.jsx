import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import TelaListaGastos from "./TelaListaGastos.jsx";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Button
          style={styles.block}
          title="Gastos do Mês"
          onPress={() => navigation.navigate("TelaListaGastos")}
        />
      </View>
      <View style={styles.block}>
        <Button
          style={styles.button}
          title="TelaInserirDados"
          onPress={() => navigation.navigate("TelaInserirDados")}
        />
      </View>
      <View style={styles.block}>
        <Button
          style={styles.button}
          title="InserirDados"
          onPress={() => navigation.navigate("InserirDados")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
  }
});
