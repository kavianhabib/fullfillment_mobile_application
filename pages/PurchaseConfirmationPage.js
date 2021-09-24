import React, {useState, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Image, Button} from 'react-native';

function PurchaseConfirmationPage(props){
    const data = props.route.params;

    
    return(
        <View style = {styles.screen} >
            <Text>Total : {data.total}</Text>
            <Text>Product: {data.flowerName}</Text>
            <Text>Ship to: </Text>
            <Text>{data.streetNumber}</Text>
            <Text>{data.city}, {data.state}, {data.zipCode} </Text>

            <Button title = 'Done' onPress = {() => props.navigation.navigate('UserPage')}/>
        </View>
    );
}


const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PurchaseConfirmationPage;