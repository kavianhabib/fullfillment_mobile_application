import React, {useState,useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';

function PackerOptionsPage(props){
    const data = props.route.params;
    function packerPageHandler(){
        data.setScanned(false);
        data.setScanItem(false);
        props.navigation.navigate('PackerScannerPage');
    }
    return(
        <View>
            <Button title = 'Box is full' onPress = {packerPageHandler}/>
            
        </View>
    );
}

const styles = StyleSheet.create({

});

export default PackerOptionsPage;