import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExerciseComponent from '../components/ExerciseComponent';

function PRComponent(props){
    return(
        <TouchableOpacity>
       <View style = {styles.screenContainer0}>
            <View style = {styles.screen} >
                <View style = {styles.header}>
                    <Text style = {styles.workoutName}>Media Team</Text>
                    <Text style = {styles.workoutDate}>December 27 </Text>
                    
                    <View style = {styles.infoContainer}>   
                        <View style = {styles.miniLoqoContainer}>
                            <MaterialCommunityIcons name = 'clock' color = 'white' size = {20}/>
                            <Text style = {styles.infoText}>08:00 AM</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.exercisesContainer}>
                    
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
        width: '100%',
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
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

export default PRComponent;