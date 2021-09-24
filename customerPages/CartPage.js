import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, FlatList} from 'react-native';
import CartCard from '../customerPages/CartCard';
import * as firebase from 'firebase';
import 'firebase/firestore';
import db from '../components/FirebaseConfig';

function CartPage(props){
    const [cart, setCart] = useState([]);
    
    const data = props.route.params;
    useEffect(() =>{
        const myDb = db.collection('users').doc(data.userName);
        myDb.get().then(function(doc){
            if(doc.exists){
                setCart(doc.data().cart);
            }
        })
    },[]);

    function deleteItem(id){
            const removedItem = cart.filter((item) => item.id !== id);
            db.collection('users').doc(data.userName).update({cart: removedItem});
            setCart(removedItem);     
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.checkoutButton}>
            <Button title = 'Proceed to checkout' onPress = {()=> props.navigation.navigate('PaymentPage',{
                cart: cart,
                data: data
            })}/>
            </View>
           
            <FlatList 
            keyExtractor  = {(item, index) => item.id} 
            data = {cart}
            renderItem = {itemData =>
            <CartCard id = {itemData.item.id} name = {itemData.item.name}
            image = {itemData.item.image}
            price = {itemData.item.price} quantity = {itemData.item.amount}
            total = {itemData.item.total} size = {itemData.item.size}
            userName = {data.userName} deleteItem={deleteItem}/>
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    checkoutButton:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CartPage;
