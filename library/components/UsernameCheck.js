import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function UsernameCheck(props){
    return(
        <TouchableOpacity>
            <View styles = {styles.screen}>
                <Text style = {styles.text}>{props.response}</Text>
            </View>
        </TouchableOpacity>
            );
};

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        flex: 1,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        marginVertical: 10

    },
    text:{
        color: 'white'
    }
});
export default UsernameCheck;