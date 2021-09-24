import React from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,MenuProvider,MenuContext} from 'react-native-popup-menu';

function AvailablePlate(props){
    return(
        <MenuContext>
      <View style = {styles.screen}>
            <Text style ={styles.text}>{props.weight}</Text>
            <Menu>
                <MenuTrigger >
                    <MaterialCommunityIcons name = {props.iconName} color = {props.color} size = {props.size}/>
                </MenuTrigger>
                <MenuOptions>
                <MenuOption onSelect={() => alert(`Save`)} text='Activate' />
                </MenuOptions>
            </Menu>
           
        </View>
        </MenuContext>
  
    );
}

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: 50,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text:{
        color: 'white',
    }
});

export default AvailablePlate;

