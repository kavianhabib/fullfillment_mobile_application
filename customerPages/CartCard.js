import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Image,Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, FlatList} from 'react-native';
import db from '../components/FirebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

function CartCard(props){
    const [cart, setCart] = useState([]);
    
    return(
        <View style = {styles.container}> 
            <Image style = {styles.image} source = {{uri: props.image}}/>
            <View style = {styles.infoContainer}>
                <Text>{props.name}</Text>
                <Text style = {styles.priceText}>${props.price}</Text>
                <Text>Size: {props.size}</Text>
                <Text>Qty: {props.quantity}</Text>
                <Text>Total: {props.total}</Text>

            </View>
            <View style = {styles.buttonContainer}>
                <Button title = 'Delete' onPress = {props.deleteItem.bind(this,(props.id))}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '98%',
        height: 95,
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
    image:{
        width: '35%',
        height: '100%'
    },
    infoContainer:{
        width: '35%',
        marginHorizontal: 5
    },
    priceText:{
        color: 'red'
    },
    buttonContainer:{
        height: '100%',
        width: 80,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
});

export default CartCard;