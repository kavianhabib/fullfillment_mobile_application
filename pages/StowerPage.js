import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from '../components/FirebaseConfig';
import { set } from 'react-native-reanimated';
import * as firebase from 'firebase';


function StowerPage(props){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scanShelf, setScanShelf] = useState(false);
    const [box, setBox] = useState({});
    // const [boxExist, setBoxExist] = useState();
    let boxExist = false;
    // const [name, setName] = useState('');
    // const [date, setDate] = useState('');
    // const [amount, setAmount] = useState(0);

    const [shelve, setShelve] = useState('');
    useEffect(() =>{
        if(props.route.params.newItem){
            setScanned(false);
            setScanShelf(false);
            boxExist = false;
        }
        props.route.params.newItem = false;
    })
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        if(!scanShelf){

            setScanShelf(true);
            const myDb = db.collection('boxes').doc(data);
            myDb.get().then(function(doc){
                if(doc.exists){
                    var myDate = doc.data().date.toDate();
                    setBox({
                        name: doc.data().name,
                        date: myDate.toString().slice(0,16),
                        amount: doc.data().amount,
                        id: data
                    });
                    // console.log( doc.data().date.toDate().toString());
                }
            })
        }
        else{
            const myDb = db.collection('shelves').doc(data);
            myDb.get().then(function(doc){
                if(doc.exists){
            //         myDb.update({items: firebase.firestore.FieldValue.arrayUnion({name:box.name, id:box.id, amount: box.amount,date:box.date})})
 
                    myDb.collection('items')
                    .get()
                    .then((items) =>{
                        items.docs.forEach(item =>{

                            if(item.id === box.id){
                                console.log('this is data ======ksdfjklsdlfkjs==========', box.id);
                                // setBoxExist(true);
                            //   item.update({quantity : (item.data().quantity + 1)});
                            let q = item.data().quantity + 1;
                            boxExist = true;
                            myDb.collection('items').doc(box.id).update({quantity: q});

                              props.navigation.navigate('StowConfirmationPage', {
                                box: box,
                                data: data,
                                shelveName: doc.data().name
                            });

                            }
                           
                        })
                        if(!boxExist){
                            myDb.collection('items').doc(box.id).set({quantity: 1});
                            props.navigation.navigate('StowConfirmationPage', {
                                box: box,
                                data: data,
                                shelveName: doc.data().name
                            });
                        }
                    })
                 
                }
            });
        //{name:box.name, id:box.id, amount: box.amount,date:box.date}
            
        }
      };
    
 
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
      return (
        <View style = {styles.screen}>
            <View style ={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                {!scanned && !scanShelf && <Text>Scan the Item</Text>}
            {scanned && <View style = {styles.itemInfoContainer}>
                <Text>Name: {box.name}</Text>
                <Text>Amount: {box.amount}</Text>
                <Text>Date: {box.date}</Text>
            </View>}
            </View>
            <View style={styles.container}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && <Button title={'Tap to Scan Shelf'} onPress={() => setScanned(false)} />}
                    </View>
        </View>
        
      );
}

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemInfoContainer:{
        width: '60%',
        height: 100,
        margin: 15,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    },
    container: {
        width: '98%',
        height: '75%',
      flexDirection: 'column',
      justifyContent: 'center',
     
    },
  });

export default StowerPage;
