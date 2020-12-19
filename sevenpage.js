import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

class sevenpage extends React.Component {
  
  render() {
   
    return (
        <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //對齊上面
          }}
        />
        <View>
          <ImageBackground
            style={styles.background}
            source={require("./1/background.jpeg")}
          > 
              {/*upperline (back and save) */}
              <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "6%"}}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("fifthpage");}}>
                  <Ionicons name="arrow-back" size={26*rem} color="#484848" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
              </View>      

                {/********************/}
                {/*put your code here*/}  
                {/********************/}

            </ImageBackground>

           
          </View>
      </View>
    );
  }
}
  


export default sevenpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  //style for upperline
  background : {
    height : windowHeight,
    width : windowWidth,
  },
  text : {
    marginLeft : "78%",
    fontSize : 18*rem,
    color : "#484848",
    fontWeight : "bold",
  },

  //put the styles you defined here

  //style for home button
  home : {
    backgroundColor :"#7FA6A6",
    width : "68%",
    height : "24%",
    marginRight : "16%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
 //style for right button
 button :{
    padding : "2%",
    flexDirection : "row",
    backgroundColor :"#484848",
    marginLeft : "8%",
    width : "80%",
    height : "24%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
 buttontext : {
    color : "#EFEFEF",
    fontSize : 12*rem,
    marginLeft : "4%",
 },
});
