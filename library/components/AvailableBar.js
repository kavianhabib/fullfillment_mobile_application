import React from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';

import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



function AvailableBar(props){
    return(
        <View style = {styles.section}>
            <Text style = {styles.sectionText}>{props.name}</Text>
            <Text style = {styles.sectionText}>{props.weight}</Text>
            <Text style = {styles.defaultText}>{!props.default ? '' : 'default'}</Text>
            <TouchableOpacity onPress = {props.functionCall} >
                <MaterialCommunityIcons name = 'dots-vertical' color = 'white' size = {25}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    section:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 11,
        paddingLeft: 18
    },
    sectionText:{
        color: 'white',
        fontSize: 15,
        maxWidth: '30%',
    },
    defaultText:{
        color: '#cfcbc2',
        fontStyle: 'italic',
        fontWeight: '100',
        
    }
});

export default AvailableBar;