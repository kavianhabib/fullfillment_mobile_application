import React from 'react';
import {View, StyleSheet, Text, Modal,Button, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomTextArea from '../components/CustomTextArea';

function ProfileEditPage(props){
    return(
        <Modal
        transparent = {false}
        animationType = 'slide'
        visible ={props.visiblity}
        >
            <Appbar style = {styles.headerContainer}>
                <TouchableOpacity onPress = {props.functionCall}>
                    <MaterialCommunityIcons name  = 'close' color = 'white' size = {20} style = {styles.icons}/>                    
                </TouchableOpacity>
                <TouchableOpacity onPress = {props.functionCall}>
                    <MaterialCommunityIcons name  = 'check' color = 'white' size = {20} style = {styles.icons}/>                    
                </TouchableOpacity>
            </Appbar>

            <View style ={styles.screen}>
            <CustomTextArea placeholder = 'Name'/>
            <CustomTextArea placeholder = 'Username'/>
            <CustomTextArea placeholder = 'Email'/>
            </View>
        
        </Modal>
    ); 
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: 25,
        backgroundColor: '#232e42'

    },
    icons:{
        padding: 5
    }
});

export default ProfileEditPage;



