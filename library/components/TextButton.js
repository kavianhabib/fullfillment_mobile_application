import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function TextButton(props){
    let content = null;

    if(props.haveIcon){
        content =  <Icon name ='arrow-right' size = {15} color = 'cyan'/>

    }
    return(
        <TouchableOpacity onPress={props.action}>
            <View style = {styles.screen}> 
                <Text style = {{...styles.buttonText, ...props.style}}>{props.text}</Text>
                {content}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    screen:{
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: '10%'
    },
    buttonText:{
        color: 'cyan',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5,
        textTransform: 'uppercase'
    }
});

export default TextButton;