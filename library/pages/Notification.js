import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors';
import NotificationComponent from '../components/NotificationComponent';

function Notification(props){
    const {navigation, route} = props;
    React.useLayoutEffect(() =>{
      navigation.setOptions({
        headerRight: () =>(
          <TouchableOpacity >
            <MaterialCommunityIcons name = 'settings' color = 'black' size = {26}/>
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
      });
    }, [navigation]);

    return(
        <View style = {styles.screen}>
          <ScrollView>
            <NotificationComponent title = 'New Christmas Program'
            date = 'December 20 2020' notification = 'Thrive church is starting a new program ...'/>

          <NotificationComponent title = 'Sermon on Fridays'
                      date = 'November 20 2020' notification = 'Thrive church is starting a new program ...'/>

          <NotificationComponent title = 'Baptis Them'
                      date = 'November 12 2020' notification = 'This is a new program ...'/>

          <NotificationComponent title = 'New Year Program'
                      date = 'January 20 2020' notification = 'Happy new year ...'/>
          </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#232e42'
  }
});

export default Notification;