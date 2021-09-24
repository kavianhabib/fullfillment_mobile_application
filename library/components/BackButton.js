import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function BackButton(props){
    return(
        <TouchableOpacity onPress = {props.control}>
            <View>
                <Icon name = 'arrow-left' size = {15} color = 'white'/>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({

});

export default BackButton;