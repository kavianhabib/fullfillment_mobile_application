import React, {useState, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Image, Button, FlatList, TouchableOpacity} from 'react-native';

import db from '../components/FirebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';
function OrdersPage(props){
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        db.collection('orders').onSnapshot(snap=>
            setOrders(
                snap.docs.map((doc) =>({
                    id: doc.id,
                    amount: doc.data().amount,
                    city: doc.data().city,
                    firstName: doc.data().firstName,
                    lastName: doc.data().lastName,
                    phoneNumber: doc.data().phoneNumber,
                    price: doc.data().price,
                    state: doc.data().state,
                    streetNumber: doc.data().streetNumber,
                    zipCode: doc.data().zipCode, 
                    picked: doc.data().picked,
                    packed: doc.data().packed,
                    onDelivery: doc.data().onDelivery,
                    delivered: doc.data().delivered,
                }
                ))
            ))
    })
    return(
        <View style = {styles.screen}>
            <FlatList
            keyExtractor = {(item, index) => item.id}
            data = {orders}
            renderItem = {itemData =>
            <TouchableOpacity style = {styles.touchable}>
                <View id = {itemData.item.id} style = {styles.orderContainer}>
                    <View style = {styles.sections}>
                        <Text>Customer Info</Text>
                        <Text>First Name: {itemData.item.firstName}</Text>
                        <Text>First Name: {itemData.item.lastName}</Text>
                    </View>
                    <View style = {styles.sections}>
                        <Text>Address</Text>
                        <Text>Street Number: {itemData.item.streetNumber}</Text>
                        <Text>City : {itemData.item.city}</Text>
                        <Text>State : {itemData.item.state}</Text>
                        <Text>Zip Code : {itemData.item.zipCode}</Text>
                    </View>
                    <View style = {styles.sections}>
                        <Text>Order Info</Text>
                        <Text>Amount : {itemData.item.amount}</Text>
                        <Text>Price : {itemData.item.price}</Text>
                    </View>
                    <View>
                        <Text>Status</Text>
                    {itemData.item.picked && <Text>Picked</Text>}
                    {itemData.item.packed && <Text>Packed</Text>}
                    {itemData.item.onDelivery && <Text>On Route</Text>}
                    {itemData.item.delivered && <Text>Delivered</Text>}
                    </View>

               </View>
            </TouchableOpacity>
            }
        />
        </View>
    );
}

const styles = StyleSheet.create({
    touchable:{
        marginVertical: 10
    },
    screen:{
        justifyContent: 'center',
        
    },
    orderContainer:{
        borderColor: 'red',
        borderWidth: 2
    },
    sections:{
        borderColor: 'gray',
        borderBottomWidth: 1
    }
})

export default OrdersPage;
