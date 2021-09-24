import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExerciseComponent from './ExerciseComponent';

function NotificationComponent(props){
    return(
        <TouchableOpacity>
      <View style = {styles.screenContainer0}>
        <View style = {styles.screen} >
            <View style = {styles.header}>
                <Text style = {styles.workoutName}>{props.title}</Text>
                <Text style = {styles.workoutDate}>{props.date}</Text>
            </View>
            <View>
                <Text style = {styles.notificationText}>{props.notification}</Text>
            </View>
        </View>
    </View>
        </TouchableOpacity>
  
    );
}

const styles = StyleSheet.create({
    screenContainer:{
        width: '100%',
        height: 'auto'
       
    },
    screen:{
        margin: 5,
        padding: 15,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10
    },
    header:{
        marginBottom: 5,
    },
    workoutName:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    },
    workoutDate:{
        color: 'gray',
        fontSize: 11
    },  
    miniLoqoContainer:{
        flexDirection: 'row',
        marginHorizontal: 10
    },  
    infoContainer:{
        flexDirection: 'row',
        marginTop: 5
    },
    infoText:{
        color: 'white',
        marginHorizontal: 5
    },
    exerciseHeaderTexts:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    exercisesContainer:{
            

    },
    exercisesContainerHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        alignItems: 'center'
    },
    exercises:{
        marginTop: 5,
    },
    notificationText:{
        color: 'white',
        fontSize: 14,
        fontStyle: 'italic'
    }

});

export default NotificationComponent;
