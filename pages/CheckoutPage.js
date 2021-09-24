import React, {useState, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Image, Button
    ,TouchableOpacity, AsyncStorage} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import db from '../components/FirebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function CheckoutPage(props){
    const [amount, setAmount] = useState(0);
    const [cart, setCart] = useState([]);
    const [change, setChange] = useState(false);

    const data = props.route.params;
    let total = amount * data.price;
    let newCount = data.count - amount;

    useEffect(() =>{
            const myDB = db.collection('users').doc(data.userName);
            myDB.get().then(function(doc){
                if(doc.exists){
                    setCart(doc.data().cart);
                }
            })
    },[cart]);
    React.useLayoutEffect(() =>{
        // Alert.alert('I am in the useLayoutEffect');
        props.navigation.setOptions({
            headerRight: () =>(
                <TouchableOpacity style={{marginRight: 15}} onPress = {() => props.navigation.navigate('CartPage',{
                    userName : data.userName,
                    
                     }
                    )}>
                    <Text style = {{left:8, top: 8, color:'red'}}>{cart.length}</Text>
                    <MaterialCommunityIcons name = 'cart' color = 'black' size = {25}/>
                </TouchableOpacity>
            ),
            // headerStyle: { backgroundColor: Colors.primary },
            // headerTintColor: '#fff',
            // headerTitleStyle: { fontWeight: 'bold' },

        });
        // setChange(false);
    },[cart]);
 
    function addAmount(value){
        setAmount(value);
    }
    // function deleteBucket(){
    //     // AsyncStorage.removeItem('bucket');
    // }
    function addToBucket(){
         const myDb = db.collection('users').doc(data.userName);
         myDb.get().then(function(doc){
             if(doc.exists){
                 myDb.update({cart: firebase.firestore.FieldValue.arrayUnion({
                     name:data.name,
                     price: data.price,
                     total: total,
                     amount: amount,
                     image: data.image,
                     flowerId : data.id,
                     id: (Math.random()*10000).toString()
                 })})
             }
         })
         myDb.get().then(function(doc){
             if(doc.exists){
                 setCart(doc.data().cart);
             }
         })
    }
    return(
        <View style ={styles.screen}>
            <Image style = {styles.image} source = {{uri: data.image}}/>
            <Text>{data.name}</Text>
            <Text>{data.price}$</Text>
            <NumericInput value = {amount} onChange={value => setAmount(value)} />
            <Text>Total is : {total}</Text>
            <Button title = 'BUY NOW' onPress = {()=> props.navigation.navigate('PaymentPage',{
                cart:[{total: total,
                    name: data.name,
                    price: data.price,
                    amount: amount,
                    image: data.image,
                    flowerId: data.id,
                    id: (Math.random()*10000).toString()
                }],
                data: {
                    userName: data.userName
                }
            //    count: newCount, 
            })}/>
            <Button title = 'ADD TO BUCKET' onPress = {addToBucket}/>

        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    image: {
        width: 380,
        height: 380,
        marginVertical:15
    }
});

export default CheckoutPage;