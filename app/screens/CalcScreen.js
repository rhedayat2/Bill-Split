import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState, Component, useEffect } from 'react';
import { Text, TextInput, Button, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';


function CalcScreen({ navigation, route }) {
    const [tot, setTot] = useState("0");
    //const [tipp, setTipp] = useState("0");
    var tip = 0;
    //const [tip, setTip] = useState("0");
    //const num = navigation.getParam("num");
    //var params = props.navigation.state.params.inputData;
    //var params2 = this.props.navigation.getParam("inputData");
    //const [inputData] = navigation.getParam("inputData");
    //const [textInput] = navigation.getParam("textInput");
    //const { inputData } = this.props.route.params;
    //const { state, setParams, navigate} = this.props.navigation;
    //const params = state.params || {};
    //const { textInput , inputData} = route.params;

    /*const Child = (props) => {
      const array = props.inputData;
      console.log(array);
    }*/
    
    const inputData = navigation.getParam("inputData"); 

    const pressHandler = (val) => {
      tip = val;
    }

    const pressHandler1 = () => {
      navigation.navigate("FinalPage", {tot: tot, tip: tip, inputData: inputData});
    }
    const pressHandler2 = () => {
      tip = 25;
      navigation.navigate("FinalPage", {tot: tot, tip: tip, inputData: inputData});
    }
    const pressHandler3 = () => {
      tip = 20;
      navigation.navigate("FinalPage", {tot: tot, tip: tip, inputData: inputData});
    }
    const pressHandler4 = () => {
      tip = 15;
      navigation.navigate("FinalPage", {tot: tot, tip: tip, inputData: inputData});
    }

    

    const Separator = () => (
        <View style={styles.separator} />
    );



    
    return (
    <ScrollView>
    <View style={styles.tax}>
      <Text style={styles.text}>Enter Tax %:</Text>
      <TextInput
        returnKeyType="done"
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 7.5"
        placeholderTextColor="#fff" 
        onChangeText={(val1) => setTot(val1)}
      />
      <Text style={styles.text}> Tax : {tot}% </Text>


    <View style={styles.container} >

     
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 1,
        width: 500,
        height: 150,
        alignItems: "center",

      }}
      >
        <TextInput
        returnKeyType="done"
        keyboardType="numeric"
        style={styles.input2}
        placeholder="Custom: e.g. 12"
        placeholderTextColor="#fff" 
        onChangeText={(val) => pressHandler(val)}
      />
      <Button
        title = "NEXT"
        color = "tomato"
        onPress = {pressHandler1}
      />
      </View>
      
      <View style={{
        backgroundColor: "gold",
        flex: 1,
        width: 500,
        height: 150,
      }}
      >
        <TouchableOpacity onPress={pressHandler2}>
        <Text style={styles.text2}>25%</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: "tomato",
        flex: 1,
        width: 500,
        height: 150,
      }}
      >
        <TouchableOpacity onPress={pressHandler3}>
        <Text style={styles.text2}>20%</Text>
        </TouchableOpacity>
      </View>
      
      
      <View style={{
        backgroundColor: "#ff9933",
        flex: 1,
        width: 500,
        height: 150,
      }}
      >
        <TouchableOpacity onPress={pressHandler4}>
        <Text style={styles.text2}>15%</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: "#00b3b3",
        flex: 1,
        width: 500,
        height: 150,
      }}
      >
        <Text style={styles.text2}>Select Tip %:</Text>
      </View>

      </View>
    </View>
    </ScrollView>
    );
}

export default CalcScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#00b3b3",
      alignItems: "stretch",
      justifyContent: "center",
      flexDirection: "column-reverse",
    },
    input: {
        borderWidth: 2,
        borderColor: "#fff",
        padding: 8,
        margin: 50,
        width: 155,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15
    },
    text: {
      fontSize: 30,
      textAlign: "center"
    },
    text2: {
      fontSize: 40,
      textAlign: "center",
      paddingTop: 50,
    },
    tax: {
      flex: 1,
      backgroundColor: "#d9b3ff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 20,
    },
    input2: {
      borderWidth: 2,
      borderColor: "#fff",
      padding: 8,
      margin: 30,
      width: 200,
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
    },
});