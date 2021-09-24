import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ExerciseComponent(props){
    return(
        <View style = {styles.exercise}>
            <Text style = {styles.exerciseText}>3* squat...</Text>
            <Text style = {styles.exerciseText}>600lb * 10</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    exercise:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    exerciseText:{
        color: 'white',
        fontSize: 13
    }
});

export default ExerciseComponent;