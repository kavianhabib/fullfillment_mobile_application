import React, {useState} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

function ManagerPage(props){
    return(
        <View>
            <View style = {styles.buttonContainer}>
            <Button title = 'Inventory' onPress ={() => props.navigation.navigate('InventoryPage')}/>
            </View>
            <View style = {styles.buttonContainer} >
            <Button title = 'Orders' onPress ={() => props.navigation.navigate('OrdersPage')}/>

            </View>
     
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        margin: 10
    }
})
export default ManagerPage;