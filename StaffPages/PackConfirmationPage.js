import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import * as firebase from 'firebase';
import db from '../components/FirebaseConfig';

function PackConfirmationPage(props){

    const data = props.route.params;

    useEffect(()=>{
        db.collection('orders').doc(data.orderId).get().then((item)=>{
            if(item.exists){
                db.collection('orders').doc(data.orderId).update({packed: true});
            }else{
                Alert.alert('Order does not exist');
            }
        })
    },[])
    return(
        <View>
            <Text>Order all done</Text>

        </View>
    );
}

const styles = StyleSheet.create({

});

export default PackConfirmationPage;