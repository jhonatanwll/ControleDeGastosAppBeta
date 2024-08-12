import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
const ButtonChangeScreen = ({ label, goto, styleText }) => {
  return (
    <View>
      <Pressable onPress={() => alert("Mudar para a tela" + goto)}>
        <Text style={styleText}>Botão ir para {label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
  },
});

export default ButtonChangeScreen;
