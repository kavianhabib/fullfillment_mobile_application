import React, {useState,useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

function ListCard(props){
    return(
   
            
     <FlatList
        keyExtractor = {(item, index) => item.id}
        data = {props.data}
        renderItem = {itemData =>
            <View id = {itemData.item.id} style = {styles.screen}>
                <Text>{itemData.item.name}</Text>
                <Text>{itemData.item.date}</Text>
                <Text>{itemData.item.amount}</Text>
            </View>
        }
        />
        
   
    );
}

const styles = StyleSheet.create({
  
    screen:{
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1
    }
})
export default ListCard;