import React, {useState,useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import Card from '../components/Card';
import * as firebase from 'firebase';
import 'firebase/firestore';
import db from '../components/FirebaseConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function UserPage(props){
    const [flowers, setFlowers] = useState([]);
    const [cart, setCart] = useState([]);
    const data = props.route.params;
    const [change, setChange] = useState(0);
    
    useEffect(() =>{
        db.collection('boxes').onSnapshot(snap=>
         setFlowers(
             snap.docs.map((doc)=>({
                 id: doc.id,
                 name: doc.data().name,
                 price: doc.data().price,
                 image: doc.data().image,
                 count: doc.data().count
             }))
         ))
        //  const myDB = db.collection('users').doc(data.userName);
        //  myDB.get().then(function(doc){
        //      if(doc.exists){
        //          setCart(doc.data().cart);
        //      }
        //  });

    }, []);

    useEffect(() =>{
        const add = props.navigation.addListener('focus', ()=>{
            const myDB = db.collection('users').doc(data.userName);
            myDB.get().then(function(doc){
                if(doc.exists){
                    setCart(doc.data().cart);
                }
            })
        })
        return add;
    },[props.navigation]);

    React.useLayoutEffect(() =>{
        // Alert.alert('I am in the useLayoutEffect');
        props.navigation.setOptions({
            headerRight: () =>(
                <TouchableOpacity style={{marginRight: 15}}   onPress = {() => props.navigation.navigate('CartPage',{
                    userName : data.userName
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
    });
    return(

        <FlatList
            keyExtractor = {(item, index) => item.id}
            data = {flowers}
            renderItem = {itemData =>
                <Card id = {itemData.item.id} name = {itemData.item.name}
                price = {itemData.item.price} image = {itemData.item.image}
                count = {itemData.item.count}
                navigation = {props.navigation} userName = {data.userName}
                setChange = {setChange}
                
                />
            }

        />
     
    );
}

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: '100%',
        // backgroundColor: 'gray'
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default UserPage;