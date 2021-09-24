import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, FlatList} from 'react-native';
import CartCard from '../customerPages/CartCard';
import * as firebase from 'firebase';
import 'firebase/firestore';
import db from '../components/FirebaseConfig';


function PackerPage(props){
    const [orders, setOrders] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);

    function ifPicked(doc){
        if(doc.data().picked === true && doc.data().packed === false){
            setIsEmpty(false);
            setOrders(currentList =>[...currentList,
                {
                    id: doc.id,
                    name: doc.data().name,
                    // price: doc.data().price,
                    // quantity: doc.data().amount,
                    // image: doc.data().image,
                    firstName: doc.data().firstName,
                    lastName: doc.data().lastName,
                    streetNumber: doc.data().streetNumber,
                    city: doc.data.city,
                    state: doc.data().state,
                    zipCode: doc.data().zipCode,
                    // flowerId: doc.data().flowerId,
                    items: doc.data().items,
                    picked: doc.data().picked,
                    packed: doc.data().packed,
                    delivered: doc.data().delivered,
                    onDelivery: doc.data().onDelivery
                }]
            )   
        }
        else{
            
        }
  
    }
    React.useLayoutEffect(() =>{
        db.collection('orders').onSnapshot(snap =>
            snap.docs.map((doc) =>(
                // {
                //     id: doc.id,
                //     name: doc.data().name,
                //     // price: doc.data().price,
                //     // quantity: doc.data().amount,
                //     // image: doc.data().image,
                //     firstName: doc.data().firstName,
                //     lastName: doc.data().lastName,
                //     streetNumber: doc.data().streetNumber,
                //     city: doc.data.city,
                //     state: doc.data().state,
                //     zipCode: doc.data().zipCode,
                //     // flowerId: doc.data().flowerId,
                //     items: doc.data().items
                // }
                ifPicked(doc)
            ))
            )
    },[]);
    // useEffect(() =>{

    // },[]);

    return(
        <View>
            {!isEmpty &&
                <FlatList 
                keyExtractor = {(item, index) => item.id}
                data = {orders}
                renderItem = {itemData =>
                    <View style = {styles.screen}>
                        <View style = {styles.customerInfoContainer}>
                            <Text>Customer Info</Text>
                            <Text>First Name: {itemData.item.firstName}</Text>
                            <Text>Last Name: {itemData.item.lastName}</Text>
                        </View>
                        <View style = {styles.productInfoContainer}>
                            {/* <Text>Product Info</Text>
                            <Text>Flower Name: {itemData.item.name}</Text>
                            <Text>Quantity: {itemData.item.quantity}</Text>
                            <Text>Price: {itemData.item.price}</Text> */}
                        </View>
                        <Button title = 'PACK' onPress = {()=> props.navigation.navigate('PackerScannerPage',{
                            order: itemData.item,

                        }) }/>
                    </View>
                }
                />
            }
            {/* {isEmpty && <Text>There is nothing to pick</Text>} */}
      
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: 90,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    customerInfoContainer:{
        height: '95%'
    },
    productInfoContainer:{
        height: '95%'
    }
});

export default PackerPage;