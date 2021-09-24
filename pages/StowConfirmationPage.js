import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function StowConfirmationPage(props){
    
    const info = props.route.params;
    return(
        <View style = {styles.screen}>
            <View style = {styles.itemInfoContainer}>
                <Text>{info.box.name}</Text>
                <Text>{info.box.amount}</Text>
                <Text>{info.box.date}</Text>
                <Text>Stowed in : {info.shelveName}</Text>
            </View>
            <View style = {styles.scanTextContainer}>
                <Button title = 'Scan new item' onPress ={() => props.navigation.navigate('StowerPage',{
                  newItem: true
                })}/>
            </View>
        
                  
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemInfoContainer:{
        width: '80%',
        height: 100,
        margin: 15,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    },
    scanTextContainer: {
        width: '80%',
        height: 30,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '98%',
        height: '50%',
      flexDirection: 'column',
      justifyContent: 'center',
     
    },
});

export default StowConfirmationPage;