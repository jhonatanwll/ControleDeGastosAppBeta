import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";
import TelaDashboard from "./screens/TelaDashboard";
import TelaInserirDados from "./screens/TelaInserirDados";
import TelaListaGastos from "./screens/TelaListaGastos";
import ButtonChangeScreen from "./components/ButtonChangeScreen";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* 
        TELAS: 
          - Tela DASHBOARD Inicial
          - Tela para inserir dados
          - Tela Gastos do mês 
        
        TELA DASHBOARD:
          - Acesso a tela de gastos do mês
          - Botão para tela de inserção de dados
        TELA INSERÇÃO DE DADOS:
          - Quem pagou (duas opções por agora)
          - Valor pago
          - Gastos/Ganhos
          - Data
          - Descrição
        TELA GASTOS DO MÊS
          - Mostra a lista de dados dos valores gastos no mês 
        */}

        {/* <ButtonChangeScreen label="TelaDashboard" goto="TelaDashboard" styleText={styles.text}/>
        <ButtonChangeScreen label="TelaInserirDados" goto="TelaInserirDados" styleText={styles.text}/>
        <ButtonChangeScreen label="TelaListaGastos" goto="TelaListaGastos" styleText={styles.text}/>
           */}
        <TelaDashboard styleText={styles.text}/>

        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
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
