import React from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';

import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function RoundButton(props){
    function test(){
        console.log('this is a text');
    }
    return(
                    <TouchableOpacity onPress = {props.myFunction}>
                        <View style = {{...styles.addButton, ...props.style}}>
                            <MaterialCommunityIcons name = {props.iconName} color = {props.iconColor}  size = {props.iconSize}/>
                        </View>
                    </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    addButton:{
        borderRadius: 100,
        width: 65,
        height: 65,
        borderColor: 'white',
        backgroundColor: '#24A0ED',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RoundButton;