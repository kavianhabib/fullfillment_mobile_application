import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

function DoubleStackText(props){
    return(
        <View style = {styles.newAccountTextContainer}>
            <Text style = {styles.newAccountText}>New</Text>
            <Text style = {styles.newAccountText}>Account</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    newAccountTextContainer:{
        flexDirection: 'column'
    },
    newAccountText:{
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
});

export default DoubleStackText;