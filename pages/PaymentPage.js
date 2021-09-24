import React, {useState, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Image, Button, TextInput} from 'react-native';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';

import db from '../components/FirebaseConfig';

function PaymentPage(props){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [streetNumber, setstreetNumber] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const data = props.route.params;
    // const [previousData, setPreviousData] = useState({});
   
    useEffect(() =>{
        console.log('data is ==============', data);
    }, [])
    function submitBuy(){
        db.collection('orders').add({
            firstName: firstName,
            lastName: lastName,
            streetNumber: streetNumber,
            address2: address2,
            city: city,
            state: state,
            zipCode: zipCode,
            phoneNumber: phoneNumber,
            items : data.cart,
            userName: data.data.userName,
            picked: false,
            packed: false,
            delivered: false,
            onDelivery: false, 
        });
        // const myData = db.collection('flowers').doc(data.id);
        // myData.get().then(function(doc) {
        //     if(doc.exists){
        //         // console.log('document data', doc.data());
        //         setPreviousData({
        //             count: doc.data().count,
        //             image: doc.data().image,
        //             name: doc.data().name,
        //             price: doc.data().price
        //         })
        //     }else{
        //         console.log('no such thing');
        //     }
        // })
        // db.collection('flowers').doc(data.id).update({
        //     count: data.count
        // });


        db.collection('users').doc(data.data.userName).update({cart: []})
        props.navigation.navigate('PurchaseConfirmationPage', {
            // total : data.total,
            // flowerName : data.name,
            firstName: firstName,
            lastName: lastName,
            streetNumber: streetNumber,
            address2: address2,
            city: city,
            state: state,
            zipCode: zipCode,
            phoneNumber: phoneNumber,
            // id: data.id

        });
    }
    return(
        <View style = {styles.screen}>
            <View style = {styles.userInfo}>
                <TextInput value = {firstName} placeholder = 'First Name' style = {styles.textInput} onChangeText = {value => setFirstName(value)}/>
                <TextInput value = {lastName} placeholder = 'Last Name' style = {styles.textInput} onChangeText ={value => setLastName(value)}/>
            </View>
      
            <TextInput  placeholder = 'Card Number' style = {styles.cardTextInput}/>
            <TextInput placeholder = 'Security Code' style = {styles.cardTextInput}/>

            <View style = {styles.bailingContainer}>
                <Text style = {{fontWeight:'bold'}}>Billing Address</Text>
                <TextInput value = {streetNumber} placeholder = 'Street #' style = {styles.cardTextInput} onChangeText = {value => setstreetNumber(value)}/>
                <TextInput value = {address2} placeholder = 'Address 2' style = {styles.cardTextInput} onChangeText ={value => setAddress2(value)}/>
                <TextInput value = {city} placeholder = 'City' style = {styles.cardTextInput} onChangeText ={value => setCity(value)}/>
                <TextInput value = {state} placeholder = 'State' style = {styles.cardTextInput} onChangeText ={value => setState(value)}/>
                <TextInput value = {zipCode} placeholder = 'Zip Code' style = {styles.cardTextInput} onChangeText ={value => setZipCode(value)}/>
                <TextInput value = {phoneNumber} placeholder = 'Phone Number' style = {styles.cardTextInput} onChangeText ={value => setPhoneNumber(value)}/>

            </View>
            <Button title = 'SUBMIT' onPress = {submitBuy}/>
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
    userInfo:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '95%',
        height: 50,
    },
    textInput:{
        height: 45,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '45%'
    },
    cardTextInput:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '90%',
        height: 45,
    },
    bailingContainer:{
        width: '95%',
        marginVertical: 15,
        // borderTopColor: 'black',
        // borderTopWidth: 1,
        paddingVertical: 10,
        alignItems: 'center'
    }
});

export default PaymentPage;