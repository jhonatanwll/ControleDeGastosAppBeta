import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";
import TelaDashboard from "./screens/TelaDashboard";
import TelaInserirDados from "./screens/TelaInserirDados";
import TelaListaGastos from "./screens/TelaListaGastos";
import ButtonChangeScreen from "./components/ButtonChangeScreen";

const PlaceholderImage = require("./assets/images/background-image.png");

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="InserirDados">
        <Stack.Screen name="Dashboard" component={TelaDashboard} />
        <Stack.Screen name="InserirDados" component={TelaInserirDados} />
        <Stack.Screen name="GastosMes" component={TelaListaGastos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
export default App;
