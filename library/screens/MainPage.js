// import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Profile from '../pages/Profile';
import History from '../pages/History';
import Measure from '../pages/Measure';
import Exercises from '../pages/Exercises';
import Workout from '../pages/Workout';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
  
function Page(){
 
return(
  <Tab.Navigator
  initialRouteName="Profile"
  activeColor="#e91e63"
  style={{ backgroundColor: 'tomato' }}
>
  <Tab.Screen
    name="Profile"
    component={Profile}
    options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
      
    }}
  />
  <Tab.Screen
    name="History"
    component={History}
    options={{
      tabBarLabel: 'History',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="bell" color={color} size={26} />
      ),
      // headerTitle: props => <Text>This is the title</Text>,
      //     headerRight: () => ( 
      //       <TouchableOpacity>
      //           <MaterialCommunityIcons name = 'account-settings' color = 'black' size = {30}/>
      //       </TouchableOpacity>
      //     ),
      
    }}
  />
  <Tab.Screen
    name="Workout"
    component={Workout}
    options={{
      tabBarLabel: 'Workout',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="clipboard-plus" color={color} size={26} />
      ),
    
    }}
  />
  <Tab.Screen
    name = "Exercises"
    component = {Exercises}
    options ={{
      tabBarLabel : 'Exercises',
      tabBarIcon: ({color}) =>(
        <MaterialCommunityIcons name ="dumbbell" color ={color} size = {26}/>
      ),
    }}
  />
  <Tab.Screen 
    name = "Measure"
    component = {Measure}
    options ={{
      tabBarLabel: 'Measure',
      tabBarIcon: ({color}) =>(
        <MaterialCommunityIcons name = "tape-measure" color = {color} size = {26}/>
        ),
        
    }}
  />

</Tab.Navigator> 
);
}


// !isFocused ? 25 : 0,

  
  export default function MainPage() {
    
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Page} 
        // options={
        //   ({navigation, route}) =>({
        //   headerTitle: props => <Text>{...props}</Text>,
        //   headerRight: () => ( 
           
        //     <TouchableOpacity>
        //         <MaterialCommunityIcons name = 'account-settings' color = 'black' size = {30}/>
        //         {props.options.Profile}
        //     </TouchableOpacity> 
            

        //   ),
        // })} 
        />
       
      </Stack.Navigator>
    </NavigationContainer>
    );
  }




