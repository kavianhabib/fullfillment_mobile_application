import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

function LoginTextArea(props){
    return(
        <TextInput style = {styles.textArea} placeholder = {props.placeHolderText}
        placeholderTextColor ='white'
        value = {props.value}
        onChangeText = {props.onChangeText}
        blurOnSubmit
        autoCapitalize = 'none'
        autoCorrect = {false}/>
    );
};

const styles = StyleSheet.create({
    textArea:{
        width: '80%',
        height: 50,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        padding: 7,
        opacity: 0.7,
        color: 'white'
        
    }
});

export default LoginTextArea;