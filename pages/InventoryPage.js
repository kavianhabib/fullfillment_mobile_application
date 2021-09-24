import React, {useState, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Image, Button, FlatList} from 'react-native';
import db from '../components/FirebaseConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';
import ListCard from '../components/ListCard';

function InventoryPage(props){
    const [inventory, setInventory] = useState([]);

    useEffect(() =>{
        db.collection('shelves').onSnapshot(snap=>
            setInventory(
                snap.docs.map((doc) =>({
                    id: doc.id,
                    capacity: doc.data().capacity,
                    name: doc.data().name,
                    items: doc.data().items
                }
                ))
            ))
    })

    return(
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <Text>Name</Text>
                <Text>Date</Text>
                <Text>Amount</Text>
            </View>
            <FlatList
            keyExtractor = {(item, index) => item.id}
            data = {inventory}
            renderItem = {itemData =>
            <View id = {itemData.item.id} style = {styles.screen}>
                <Text>Shelf : {itemData.item.name}</Text>
                <Text>Capacity : {itemData.item.capacity}</Text>
                <Text>Shelf ID : {itemData.item.id}</Text>
                <ListCard data = {itemData.item.items}/>
            </View>}
        />
        </View>
     
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%'
    },
    screen:{
        width: '100%',
        justifyContent: 'center',
    
        marginVertical: 15,
        padding: 2
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
});

export default InventoryPage;