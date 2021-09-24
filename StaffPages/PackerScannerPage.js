import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from '../components/FirebaseConfig';
import { set } from 'react-native-reanimated';
import * as firebase from 'firebase';
import BoxCart from '../components/BoxCart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function PickerScannerPage(props){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scanItem, setScanItem] = useState(false);
    const [box, setBox] = useState('');
    const [items, setItems] = useState([]);
    const myData = props.route.params;
    const [myDb, setMyDb] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [itemExist, setItemExist] = useState(false);
    const [total, setTotal] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);
    
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
      // setScanBox(false);
    },[]);


    React.useLayoutEffect(() =>{
      // Alert.alert('I am in the useLayoutEffect');
      props.navigation.setOptions({
          headerRight: () =>(
              <TouchableOpacity style={{marginRight: 15}}   onPress = {() => props.navigation.navigate('PackerOptionsPage',{
                  setScanItem : setScanItem,
                setScanned : setScanned}
                  )}>
                  <MaterialCommunityIcons name = 'question' color = 'black' size = {25}/>
              </TouchableOpacity>
          ),
          // headerStyle: { backgroundColor: Colors.primary },
          // headerTintColor: '#fff',
          // headerTitleStyle: { fontWeight: 'bold' },

      });
      // setChange(false);
  });
    // seEffect(() => {
      // React.useLayoutEffect(()=>{
      //   console.log('order.id =====================', myData);
      //   const myDb  = db.collection('shelves').get().then((snap) =>{
      //       snap.docs.forEach(doc =>{
      //        //   setShelf({name: doc.data().name, id: doc.id});
      //        firebase.firestore().collection('shelves').doc(doc.id).collection('items')
      //        .get()
      //        .then((array) =>{
      //           array.docs.forEach(ar =>{
      //              if(ar.id === myData.order.items[counter].flowerId){
      //                setShelf({id: doc.id, name: doc.data().name, capacity: doc.data().capacity})
      //              }
      //           })
      //        })
      //       })
 
  
      //   })
      // }, [counter])
 
      // },[counter]);
    useEffect(() =>{
      myData.order.items.map(item =>{
        setOrderTotal(orderTotal + item.amount);
      })
    },[])
      
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      function checkItemExist(id){
        let rt = false;
        let q = 0;
        myData.order.items.map( item =>{
          if(item.flowerId.valueOf() === id.valueOf()){
            rt = true
            q = item.amount;
          }
        })
        return {rt, q};
      }  
      const handleBarCodeScanned = ({ type, data }) => {
        
        setScanned(true);
        console.log(checkItemExist(data));
          if(!scanItem){
            setBox(data);
            const myDb = db.collection('deliveryBoxes').doc(data);
            myDb.get().then(function(doc){
              if(doc.exists){
                setScanItem(true);
              }else{
                Alert.alert('Wrong barcode! Scan another box');
              }
            })
          }else{
            let r = checkItemExist(data);
            if(r.rt){
              const myDb = db.collection('deliveryBoxes').doc(box);
              myDb.collection('items').doc(data).get().then((item)=>{
                if(item.exists){
                  if(r.q > item.data().quantity){
                    myDb.collection('items').doc(data).update({quantity: item.data().quantity + 1});
                  setQuantity(item.data().quantity + 1);
                  }else{
                    setTotal(total + item.data().quantity);
                    if(total === orderTotal ){
                      Alert.alert('Order is done');
                      props.navigation.navigate('PackConfirmationPage',{orderId : myData.order.id,
                      });
                    }
                    Alert.alert('Item quantity if fulfilled');
                  }
                }else{
                  myDb.collection('items').doc(data).set({quantity: 1, flowerId: data});
                  setQuantity(1);
                }
              });
            }else{
              Alert.alert('Scanned item is not in order, please scan another one');
            }
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
            <View style ={{width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      {!scanned && !scanItem && <Text>Scan a Box</Text>}
      {scanned && <View><Text>{myData.order.firstName}</Text>
      <Text>quantity: {quantity}</Text>
      </View> }
            {/* <BoxCart name = {myData.order.firstName} /> */}
            </View>
            <View style={styles.container}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                   {scanned   && <Button title={'Tap to Scan Item'} onPress={() => setScanned(false)} />}

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