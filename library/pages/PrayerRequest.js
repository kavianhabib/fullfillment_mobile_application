import React, {useState} from 'react';
import {View, StyleSheet,Button, Text,TouchableOpacity,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WorkoutComponent from '../components/WorkoutComponent';

import Colors from '../constants/Colors';
import EmptyWorkoutPage from '../screens/EmptyWorkoutPage';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import MyView from '../components/MyView';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {Appbar} from 'react-native-paper';
import TextButton from '../components/TextButton';
import SwipeUpDown from 'react-native-swipe-up-down';



function PrayerRequest(props){
    const {navigation, route} = props;
    const [emptyWorkoutPageVisiblity, setEmptyWorkoutPageVisiblity] = useState(false);
    React.useLayoutEffect(() =>{
       navigation.setOptions({
        headerStyle: {backgroundColor: Colors.primary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
       })

    }, [navigation]);

    function emptyWorkoutPageHandler(apply){
        setEmptyWorkoutPageVisiblity(apply)
    }
    return(
    <View style = {styles.screen}>
            <View style = {styles.quickStartContainer}>
                <Text style = {styles.headerText}>NEW PRAYER REQUEST</Text>

                <View style = {styles.titleContainer}>
                    <TextInput placeholder = 'Prayer Title' placeholderTextColor= 'white'
                    style = {styles.titleTextInput}/>
                </View>
                <View style = {styles.prayerContainer}>
                    <TextInput placeholder = 'Prayer...' placeholderTextColor= 'white'
                    style = {styles.prayerTextInput}/>
                </View>
                <Button title = 'SUBMIT'   style = {styles.button} onPress = {emptyWorkoutPageHandler.bind(this,true)}/>
            </View> 
            <View style = {styles.myRoutinesContainer}>
                <Text style = {styles.headerText}>PREVIOUS PRAYER REQUESTS</Text>
                <WorkoutComponent/>
                <WorkoutComponent/>
            </View>   
        </View>
        
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        width: '100%',
        backgroundColor: '#232e42',
        alignItems: 'center'
    },

    sampleRoutinesContainer:{
        width: '95%',
    },
    quickStartContainer:{
        width: '95%',
  
    },
    myRoutinesContainer:{
        width: '95%',
        marginTop: 10
    },
    headerText:{
        marginVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    bottomPopout:{
        position: 'absolute',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        top: '93%',
        shadowColor: 'gray'
    },
    titleContainer:{
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 8,
        padding: 6
    },
    prayerContainer:{
        width: '100%',
        height: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 8,
        padding: 6,
        marginBottom: 20,
    },
    titleTextInput:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    prayerTextInput:{
     
        color: 'white'
    }

});

const options = {
    container:{
        backgroundColor: '#232e42',
        color: 'white'
       },
       text:{
           color: 'gray',
           fontSize: 15
           
       }
}

export default PrayerRequest;