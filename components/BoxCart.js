import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'; 



function BoxCart(props){
    return(
        <View style = {styles.itemInfoContainer}>
              <View style = {styles.imageContainer}>
              <Image style = {styles.image} source = {{uri: props.image}}/>

              </View>
              <View>
              <Text>Name: {props.name}</Text>
                <Text>Amount: {props.amount}</Text>
                <Text>Date: {props.date}</Text>
                <Text>Price: {props.price}$</Text>
              </View>
               
            </View>
    );
};

const styles = StyleSheet.create({
    itemInfoContainer:{
        width: '95%',
        height: 100,
        flexDirection: 'row',
        margin: 15,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    },
    imageContainer:{
        width: '35%',
        height: '100%'
      },
      image:{
          width: '100%',
          height: '100%'
      }
});

export default BoxCart;
