import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

function CustomButton(props){
    return(
        <TouchableOpacity onPress = {props.control}>
            <View style={{...styles.contentFrame, ...props.style}}>
                {props.content}
            </View>
        </TouchableOpacity>
    
    );
};

const styles = StyleSheet.create({
    contentFrame:{
        padding: 10,
        margin:10,
        height: 90,
        width: 90,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CustomButton;
