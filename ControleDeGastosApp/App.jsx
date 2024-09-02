import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";
import TelaDashboard from "./screens/TelaDashboard";
import TelaInserirDados from "./screens/TelaInserirDados";
import InserirDados from "./screens/InserirDados";
import TelaListaGastos from "./screens/TelaListaGastos";
import ButtonChangeScreen from "./components/ButtonChangeScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="TelaDashboard">
        <Stack.Screen name="Dashboard" component={TelaDashboard} />
        <Stack.Screen name="TelaInserirDados" component={TelaInserirDados} />
        <Stack.Screen name="InserirDados" component={InserirDados} />
        <Stack.Screen name="TelaListaGastos" component={TelaListaGastos} />
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
