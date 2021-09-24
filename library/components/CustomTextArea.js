import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet,Text} from 'react-native';


function CustomTextArea(props){
    const [isFocused, setIsFocused] = useState(false);
    const [initialFocus, setInitialFocus] = useState(false);
    function handleFocus(e){
        setIsFocused(true);
        setInitialFocus(true);
    }
    function handleUnfocus(e){
        setIsFocused(false);
    }
    function handleBlur(e){
        setIsFocused(true);
        setInitialFocus(true);
    }

    const labelStyle = {position: 'absolute',
    left: 0,
    top: !isFocused ? 25 : 0,
    color: !isFocused ? '#000' : (props.topTextColor == null ? '#aaa' : props.topTextColor),
    fontSize: !isFocused ? 20 : 14,
    opacity: !isFocused ? 0 : 1,
    left: props.topTextLeft == null ? 28 : props.topTextLeft,
    textTransform: props.textTransform == null ? 'uppercase' : props.textTransform};

    const textInputStyle ={
        borderBottomColor: 'orange'
    }

    return(
        <View style ={{...styles.screen, ...props.screenStyle}}>
            <Text  style = {{...labelStyle,...props.labelStyle}}  >{props.placeholder}</Text>
            <TextInput style={!isFocused ? {...styles.textInput, ...props.textInputStyle} : {...styles.textInputFocused,...props.textInputStyleFocused}} 
            placeholder = {!initialFocus ? props.placeholder: ""}
            placeholderTextColor = 'white' onFocus = {handleFocus}  onEndEditing = {handleUnfocus}
            onBlur ={handleBlur} keyboardType = {props.keyboardType} 
            value = {props.value} onChangeText = {props.onChangeText}
            blurOnSubmit
            autoCapitalize= 'none'
            autoCorrect = {false} 
            />
        </View>

    );
};

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
    },
    textInput:{
        width: '85%',
        height: 30,
        marginTop: 15,
        
        backgroundColor: 'black',
        opacity: 0.6,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        color: 'orange',
        // textTransform: 'uppercase'
    },
    textInputFocused:{
        width: '85%',
        height: 30,
        borderBottomColor: 'orange',
        borderBottomWidth: 2,

    }

});

export default CustomTextArea;