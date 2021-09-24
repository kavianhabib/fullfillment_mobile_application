import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExerciseComponent from './ExerciseComponent';

function WorkoutComponent(props){
    return(
        <TouchableOpacity>
      <View style = {styles.screenContainer0}>
        <View style = {styles.screen} >
            <View style = {styles.header}>
                <Text style = {styles.workoutName}>Christmas Prayer</Text>
                <Text style = {styles.workoutDate}>November 7 </Text>
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
        fontSize: 14
    },
    workoutDate:{
        color: 'white',
        fontSize: 12
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
        fontSize: 14
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

});

export default WorkoutComponent;
