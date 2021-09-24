import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header(props){
    return(
        <View>
            <Text>This is the header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white'
    }
});

export default Header;