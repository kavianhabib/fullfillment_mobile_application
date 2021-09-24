import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

function Card(props){
    let inStock = <Text></Text>
    if(props.count===0){
        inStock = <Text style = {styles.outOfStockText}>Out of Stock</Text>
    }
    return(
        <TouchableOpacity style = {styles.touchablePart} onPress ={()=>props.navigation.navigate('CheckoutPage',
        {id:props.id,
        name: props.name,
        price: props.price,
        image: props.image,
        count: props.count,
        userName: props.userName,
    setChange: props.setChange},
         )} 
       >
            <View style = {styles.screen}>
                    <Image  style = {styles.image} source = {{uri:props.image}}/>
                    <Text>{props.name}</Text>
                    <Text>{props.price}$</Text>
                    {inStock}
                </View>
        </TouchableOpacity>
  
    );
}

const styles = StyleSheet.create({  
    touchablePart:{
        width: '95%',
        height: 250,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen:{
        width: '95%',
        height: 250,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: 200,
        height: 150
    },
    outOfStockText:{
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Card;