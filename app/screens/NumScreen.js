import React, { useState, Component } from "react";
import { Text, TextInput, Button, View, StyleSheet, TouchableOpacity } from "react-native";
import { State } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";
import { ScrollView } from 'react-native-gesture-handler';

class NumScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      textInput : [],
      inputData : []
    }
  }


  //function to add TextInput dynamically
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput returnKeyType="done" keyboardType="numeric" style={styles.textInput}
      onChangeText={(text) => this.addValues(text, index)} />);
    this.setState({ textInput });
  }

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput,inputData });
  }

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool){
    this.setState({
      inputData: dataArray
    });
  }
  else {
    dataArray.push({'text':text,'index':index});
    this.setState({
      inputData: dataArray
    });
  }
  }

  //function to console the output
  getValues = () => {
    console.log('Data',this.state.inputData);
    //console.log(this.props.tip)
    //this.props.navigation.navigate("FinalPage", { textInput: this.state.textInput, inputData: this.state.inputData, tip: tip, tot: tot});
  }
  /*gval = ({ navigation }) => {
    this.props.navigation.getParam("tot");
    this.props.navigation.getParam("tip");
    let val = this.state.inputData.map((item) => (item.text * (tip * (1/100)) * (tot * (1/100))));
    this.setState({
      inputData: val
    });
    console.log('OK', this.state.inputData)
  }*/

  render(){
    //const tip = this.props.navigation.getParam("tip");
    //const tot = this.props.navigation.getParam("tot");
    //var [val] = this.state.inputData.map((item) => (item.text[1] * (tip * (1/100)) * (tot * (1/100))));
    //const tipp = this.props.navigation.getParam("tipp");
   /* </View>
    <View style={{margin: 10}}>
    <Button title='Remove' onPress={() => this.removeTextInput()} />
    
    </View>*/
    return(
      
      <View style={styles.container}>
        <View alignItems= "center">
        <Text style={styles.title}>Enter Price Per Person Without Tax and Tip</Text>
        </View>
        <ScrollView>
        <View style= {styles.row}>
        <View style={{margin: 10}}>
        <Button title='Add Person' onPress={() => this.addTextInput(this.state.textInput.length)} />
        </View>
        </View>
        {this.state.textInput.map((value) => {
          return value
        })}
        <Button title='Next' onPress={() => this.props.navigation.navigate("CalcScreen", { textInput: this.state.textInput, inputData: this.state.inputData}) } />
        </ScrollView>
      </View>
      
    )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#80ff80',
  },
  buttonView: {
  flexDirection: 'row'
  },
  textInput: {
  height: 40,
  borderColor: 'black', 
  borderWidth: 1,
  margin: 20,
},
row:{
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 50,
  alignItems: "center",
  },
  title: {
    fontSize: 17,
    color: "#ff1a1a",
    fontWeight: "bold",
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    paddingTop: 15,
    alignItems: "center",
  },
});

export default NumScreen;
