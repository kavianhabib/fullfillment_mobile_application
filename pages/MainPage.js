import React, {useState} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

function MainPage({navigation}){
    function userButtonHandler(){
        navigation.navigate('LoginPage')
    }
    function staffButtonHandler(){
        navigation.navigate('StaffPage');
    }
    return(
        <View style ={styles.screen}>
            <Button title = 'USER' onPress = {userButtonHandler}/>
            <Button title = 'STAFF' onPress = {staffButtonHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});

export default MainPage;