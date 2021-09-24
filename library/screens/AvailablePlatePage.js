import React, {useState} from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity, Button,
FlatList} from 'react-native';

import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';
import AvailablePlate from '../components/AvailablePlate';




function LbScreen(props){
    function convertKgtoLb(value){
        return Math.round(value * 2.2);
    }
    return(<View style = {styles.screen}>
        <FlatList
            data = {props}
            renderItem = {({item}) =>
            <AvailablePlate key = {item.key} weight = {convertKgtoLb(item.value.weight)} iconName = 'dots-vertical' color = 'white' size = {25}/>
        }
        />
    </View>)
}

function KgScreen(props){


    return(<View style = {styles.screen}>
        <FlatList
            data = {props}
            renderItem = {({item}) =>

            <AvailablePlate key = {item.key} weight = {item.value.weight} iconName = 'dots-vertical'
            color = 'white' size = {25}/>    }
        />
    </View>);
}
function AvailablePlatePage(props){
    const Tab = createMaterialTopTabNavigator();
        const [weights, setWeight] = useState( [{key : '1', value :{weight: 25, activate: false}},
        {key : '2', value :{weight: 20, activate: false}}, {key : '3', value :{weight: 15, activate: false}},
        {key : '4', value :{weight: 10, activate: false}},{key : '5', value :{weight: 5, activate: false}}
        ,{key : '6', value :{weight: 2.5, activate: false}},{key : '7', value :{weight: 2, activate: false}}
        ,{key : '8', value :{weight: 1.25, activate: false}},{key : '9', value :{weight: 1, activate: false}}
        ,{key : '10', value :{weight: 0.27, activate: false}},{key : '11', value :{weight: 0.5, activate: false}}
        ,{key : '12', value :{weight: 0.25, activate: false}}]);
    return(
        <Modal
        transparent = {true}
        visible = {props.visiblity}
        animationType = 'slide'
        >
        
            <Appbar style={{backgroundColor: '#232e42'}}>
                <Appbar.BackAction onPress = {props.functionCall}/>
            </Appbar>
           {/* <NavigationContainer
           independent = {true}
           > */}
                <Tab.Navigator
                initialRouteName = 'feed'
                tabBarOptions ={{
                    activeTintColor: 'white',
                    labelStyle: { fontSize: 15 },
                    style: { backgroundColor: Colors.primary },
                }}
              
                >
                    <Tab.Screen name= 'lb' component = {LbScreen.bind(this,weights)}/>
                    <Tab.Screen name = 'kg' component ={KgScreen.bind(this,weights)}/>
                </Tab.Navigator>
           {/* </NavigationContainer> */}
           
           

        </Modal>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#232e42'
    }
});

export default AvailablePlatePage;