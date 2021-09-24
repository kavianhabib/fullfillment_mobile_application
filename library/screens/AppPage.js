import React from 'react';

import {View, Text, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Donation from '../pages/Donation';
import Service from '../pages/Service';
import Sermons from '../pages/Sermons';
import PrayerRequest from '../pages/PrayerRequest';
import Notification from '../pages/Notification';
import Colors from '../constants/Colors';

import { NavigationActions} from 'react-navigation';   





const DonationStack = createStackNavigator();

function DonationStackScreen(){
    return(
        <DonationStack.Navigator>
            <DonationStack.Screen name = "Donation" component={Donation}
           />
        </DonationStack.Navigator>
    );
}

const ServiceStack = createStackNavigator();
function ServiceStackScreen(){
    return(
        <ServiceStack.Navigator>
            <ServiceStack.Screen name = 'Service' component = {Service}
          />
        </ServiceStack.Navigator>
    );
}

const SermonsStack = createStackNavigator();
function SermonsStackScreen(){
    return(
        <SermonsStack.Navigator>
            <SermonsStack.Screen name = 'Sermons' component={Sermons}/>
        </SermonsStack.Navigator>
    );
}

const PrayerRequestStack = createStackNavigator();
function PrayerRequestStackScreen(){
    return(
        <PrayerRequestStack.Navigator>
            <PrayerRequestStack.Screen name = 'Prayer Request' component={PrayerRequest}/>
        </PrayerRequestStack.Navigator>
    );
}

const NotificationStack = createStackNavigator();
function NotificationStackScreen(){
    return(
        <NotificationStack.Navigator>
            <NotificationStack.Screen name = 'Notifications' component = {Notification}/>
        </NotificationStack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary: Colors.primary,
    },
};
function AppPage({navigation}){
   console.log(StackActions);
   console.log(NavigationActions);

//    const navigateAction = StackActions.reset({
//     index: 0,
//     actions: [navigation.navigate({ routeName: "Main" })],
//   });

//   navigation.dispatch({type: 'Reset', index: 0, actions: [{ type: 'Navigate', routeName:'Main'}]});
    return(
        // <NavigationContainer theme = {MyTheme} >
            <Tab.Navigator
            initialRouteName = 'Sermons'
            activeColor = '#e91e63'
            style = {{backgroundColor: 'tomato'}}
            barStyle={{ backgroundColor: '#232e42' }}
            >
                <Tab.Screen name = 'Sermons' component = {SermonsStackScreen}
                 options = {{
                    tabBarLabel: 'Sermons',
                    tabBarIcon: ({color}) =>(
                        <MaterialCommunityIcons name = 'face-profile' color = {color} size = {26}/>
                    ),
                 
                }}/>
                <Tab.Screen name = 'Service' component = {ServiceStackScreen}
                options = {{
                    tabBarLabel: 'Service',
                    tabBarIcon: ({color}) =>(
                        <MaterialCommunityIcons name = 'hand-left' color={color} size={26}/>
                    ),
                }}/>
                <Tab.Screen name = 'Donation' component = {DonationStackScreen}
                options = {{
                    tabBarLabel: 'Donation',
                    tabBarIcon: ({color}) =>(
                        <MaterialCommunityIcons name= 'clipboard-plus' color = {color} size ={26}/>
                    ),
                }}/>
                <Tab.Screen name = 'PrayerRequest' component = {PrayerRequestStackScreen}
                options={{
                    tabBarLabel: 'Prayer Request',
                    tabBarIcon: ({color}) =>(
                        <MaterialCommunityIcons name = 'hand-heart' color = {color} size = {26}/>
                    ),
                }}/>
                <Tab.Screen name = 'Notification' component = {NotificationStackScreen}
                options = {{
                    tabBarLabel : 'Notifications',
                    tabBarIcon : ({color}) =>(
                        <MaterialCommunityIcons name = 'bell' color = {color} size = {26} />
                    )

                }}/>
            </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default AppPage;