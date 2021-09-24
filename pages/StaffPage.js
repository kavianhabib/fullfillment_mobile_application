import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function StaffPage({navigation}){
    return(
        <View style = {styles.screen}>
                 <View style = {styles.button}>
            <Button title = 'Manager' style = {styles.button} onPress = {() => navigation.navigate('ManagerPage')}/>

            </View>
            
            <View style = {styles.button}>
            <Button title = 'Stower' style = {styles.button} onPress = {() => navigation.navigate('StowerPage',{
                newItem: false
            })}/>

            </View>
            <View style = {styles.button}>
            <Button title = 'Picker' style = {styles.button}
            onPress = {() => navigation.navigate('PickerPage') }/>

            </View>
            <View style = {styles.button}>
            <Button title = 'Packer' style = {styles.button}
            onPress = {() => navigation.navigate('PackerPage')}/>

            </View>
            <View style = {styles.button}>
            <Button title = 'Driver' style = {styles.button}/>

            </View>
         
       
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    button:{
        marginVertical: 5
    }
});

export default StaffPage;