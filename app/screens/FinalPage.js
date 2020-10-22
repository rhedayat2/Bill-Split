
import React, { useState, Component } from 'react';
import { Text, TextInput, Button, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { color } from 'react-native-reanimated';


class FinalPage extends Component {

  constructor(props){
    super(props);
  }
    //const [inputData] = navigation.getParam("inputData");

   /* const pressHandler2 = () => {
      navigation.navigate("WelcomeScreen");
    }

    const Separator = () => (
        <View style={styles.separator} />
    );*/

    render(){
      const inputData = this.props.navigation.getParam("inputData"); 
      const tip = this.props.navigation.getParam("tip"); 
      const tot = this.props.navigation.getParam("tot"); 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Total Price Per Person</Text>
        { inputData.map((item) =>  {
         return(
          <View>
            <Text style={styles.text}>Person {parseFloat(item.index) + 1}: {((parseFloat(item.text) + parseFloat((item.text * (tot * (1/100)))) + parseFloat((item.text * (tip * (1/100))))).toFixed(2))} Tip: {(parseFloat(item.text * (tip * (1/100)))).toFixed(2) } </Text>
          </View>
          )
        })}
        <Button title='Done' onPress={() => this.props.navigation.navigate("WelcomeScreen")} />
    </View>

    )
      }
}

export default FinalPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#80e5ff",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    text: {
      fontSize: 30
    },
    title: {
      fontSize: 37,
      color: "#ff99cc",
      fontWeight: "bold",
      justifyContent: "flex-start",
      position: "absolute",
      top: 0,
      paddingTop: 15,
    },
});