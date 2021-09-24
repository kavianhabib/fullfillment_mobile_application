import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Steps(props){
    return(
        <View style = {styles.counterContainer} >
        <View style = {styles.stepCounterContainer}>
         <Text style={styles.stepsCounter}>{props.numberOfSteps}</Text>
         <Text style={styles.steps}>/2</Text>
        </View>
     
        <Text style={styles.stepsText}>STEPS</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    counterContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepsCounter:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    steps:{
        color: 'white',
        fontSize: 15
    },
    stepCounterContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Steps;