import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import * as firebase from 'firebase';
import 'firebase/firestore';
import db from '../components/FirebaseConfig';

function PickConfirmationPage(props){
    const [quantity, setQuantity] = useState(0);
    const data = props.route.params;
    function pickConfirmed(){
        if(data.amount === quantity){
            if(data.counter < data.itemsLength-1 ){
                data.setCounter(data.counter + 1);
                props.navigation.navigate('PickerScannerPage');
            }
            else{
                Alert.alert('Pick Done');
                const obj = db.collection('orders').doc(data.id);
                obj.update({picked: true});
                // remove order from order table
                // add order to be packed table
                props.navigation.navigate('PickerPage');
            }
        }
        else{
            Alert.alert('The quantity does not match');
        }
    }
    return(
        <View>
            <Text>How many did you pick?</Text>
            <NumericInput value = {quantity} onChange = {value => setQuantity(value)}/>
            <Button title = 'CONFIRM' onPress = {pickConfirmed}/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default PickConfirmationPage;