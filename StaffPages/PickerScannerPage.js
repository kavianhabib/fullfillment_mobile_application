import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from '../components/FirebaseConfig';
import { set } from 'react-native-reanimated';
import * as firebase from 'firebase';
import BoxCart from '../components/BoxCart';

function PickerScannerPage(props){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scanShelf, setScanShelf] = useState(false);
    const [scanBox, setScanBox] = useState(false);
    const [box, setBox] = useState({});
    const [shelf, setShelf] = useState({});
    const myData = props.route.params;
    const [counter, setCounter] = useState(0);
    // useEffect(() =>{
    //     if(props.route.params.newItem){
    //         setScanned(false);
    //         setScanBox(false);
    //         // setCounter(counter + 1);
    //     }
    //     props.route.params.newItem = false;
    // }, [counter]);
    
    React.useLayoutEffect(()=>{
      setScanned(false);
            setScanBox(false);
    },[counter])
    // seEffect(() => {
      React.useLayoutEffect(()=>{
        console.log('order.id =====================', myData);
        const myDb  = db.collection('shelves').get().then((snap) =>{
            snap.docs.forEach(doc =>{
             //   setShelf({name: doc.data().name, id: doc.id});
             firebase.firestore().collection('shelves').doc(doc.id).collection('items')
             .get()
             .then((array) =>{
                array.docs.forEach(ar =>{
                   if(ar.id === myData.order.items[counter].flowerId){
                     setShelf({id: doc.id, name: doc.data().name, capacity: doc.data().capacity})
                   }
                })
             })
            })
 
  
        })
      }, [counter])
 
      // },[counter]);

      
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      
      const handleBarCodeScanned = ({ type, data }) => {
        console.log('items length =============', myData.order.items.length);
        console.log('myData : ', myData, ' shelf.id : ', shelf.id);
        if(!scanBox){
          if(data === shelf.id){
            setScanned(true);
            setBox({name: myData.order.items[counter].name, amount : myData.order.items[counter].amount,
              image : myData.order.items[counter].image, price : myData.order.items[counter].price, total: myData.order.items[counter].total});
            setScanBox(true);
          }else{  

            Alert.alert('Wrong shelf please scan shelf : ', shelf.name);
          }
        }else{
          if(data === myData.order.items[counter].flowerId){
            //Navigate to pick page
            props.navigation.navigate('PickConfirmationPage',{
              amount: myData.order.items[counter].amount,
              counter: counter,
              itemsLength: myData.order.items.length,
              setCounter: setCounter,
              id: myData.order.id
            });
          }else{
            Alert.alert('Wrong box, please put back the box and scan another one');
          }

        }
   
        // if(!scanShelf){
        //     setScanShelf(true);
        //     const myDb = db.collection('boxes').doc(data);
        //     myDb.get().then(function(doc){
        //         if(doc.exists){
        //             var myDate = doc.data().date.toDate();
        //             setBox({
        //                 name: doc.data().name,
        //                 date: myDate.toString().slice(0,16),
        //                 amount: doc.data().amount,
        //                 id: data
        //             });
        //             // console.log( doc.data().date.toDate().toString());
        //         }
        //     })
        // }
        // else{
        //     const myDb = db.collection('shelves').doc(data);
        //     myDb.get().then(function(doc){
        //         if(doc.exists){
        //             myDb.update({items: firebase.firestore.FieldValue.arrayUnion({name:box.name, id:box.id, amount: box.amount,date:box.date})})
        //     props.navigation.navigate('StowConfirmationPage', {
        //                 box: box,
        //                 data: data,
        //                 shelveName: doc.data().name
        //             });
        //         }
        //     });
        
            
        // }
      };
    
 
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
      return (
        <View style = {styles.screen}>
            <View style ={{width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      {!scanned && !scanShelf && <Text>Scan shelf {shelf.name}</Text>}
            {scanned && <BoxCart name = {box.name} image = {box.image} price = {box.price} amount = {box.amount}/>}
            </View>
            <View style={styles.container}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && <Button title={'Tap to Scan Box'} onPress={() => setScanned(false)} />}
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

    container: {
        width: '98%',
        height: '70%',
      flexDirection: 'column',
      justifyContent: 'center',
     
    },

});

export default PickerScannerPage;