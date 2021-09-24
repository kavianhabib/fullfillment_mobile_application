import React, {useState, Component} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

import MyDatePicker from '../components/MyDatePicker';
function StartHistoryPage(props){
    return(
        <Modal
        transparent = {false}
        animationType = 'fade'
        visible = {props.visiblity}>
            <View style = {styles.screen}>
                <Appbar>
                    <Appbar.BackAction onPress = {props.functionCall}/>
                </Appbar>
                <View>
                    <MyDatePicker/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

});

export default StartHistoryPage;