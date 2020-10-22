import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import NumScreen from "./app/screens/NumScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CalcScreen from "./app/screens/CalcScreen";
//import FinalPage from '../app/screens/FinalPage';
import Navigator from "./app/routes/homeStack";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BAFFE0",
    alignItems: "center",
    justifyContent: "center",
  },
  tinypic: {
    width: 200,
    height: 300,
  },
  font: {
    fontSize: 50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
