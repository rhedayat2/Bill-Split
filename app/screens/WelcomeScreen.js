import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function WelcomeScreen({ navigation }) {

  const pressHandler = () => {
    navigation.navigate("NumScreen");
  }

  //<Image style={styles.logo} source={require("../assets/favicon.png")} />
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/fmn.jpg")}
    >
      <View style={styles.logoContainer}>
        
        <Text style={styles.ttext}>Bill Split</Text>
      </View>
       <View style={styles.contButton}>
      <TouchableOpacity onPress={pressHandler}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
       </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contButton: {
    width: "100%",
    height: 150,
    backgroundColor: "#b3ffd9",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  ttext: {
    fontSize: 50,
    color: "#b3ffd9",
    fontWeight: "bold",
  },
  button: {
    fontSize: 50,
  }
});
