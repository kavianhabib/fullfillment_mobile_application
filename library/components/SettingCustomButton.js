import { StackActions } from '@react-navigation/native';
import  React, {useState}  from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Modal,
    Button,
    DynamicColorIOS,
    Dimensions

  } from 'react-native';


  function SettingCustomButton(props){
    return(
        <View style = {styles.screen}>
            <TouchableOpacity style = {styles.touchable} onPress={props.functionCall}>
               <Text style = {styles.nameText}>{props.name}</Text>
               <Text style = {styles.selectedOneText}>{props.selectedOne}</Text>
            </TouchableOpacity>
        </View>
    );
  }

  const styles = StyleSheet.create({
    screen:{
        backgroundColor:'#232e42',
        padding: 10
    },
    touchable:{
        width: '100%'
    },
    nameText:{
        color: 'white'
    },
    selectedOneText:{
        color: 'gray'
    }

  });
  export default SettingCustomButton;

