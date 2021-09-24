import React, { useState } from 'react';
import {View, Modal, Text, Button, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar} from 'react-native-paper';
import TextButton from '../components/TextButton';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import SlidingUpPanel from 'rn-sliding-up-panel';


function EmptyWorkoutPage(props){
    const [minuteCounter, setMinuteCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

 

  
    return(
        <Modal
        transparent = {false}
        visible = {props.visiblity}
        animationType ='slide'>
           

            <Appbar style = {styles.header}>
                <View style = {styles.headerIconsContainer}>
                    <TouchableOpacity onPress = {props.minimizePage}>
                        <MaterialCommunityIcons name = 'chevron-down' color = 'white' size = {25}/>
                    </TouchableOpacity>
                    <View style = {styles.timerButton}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name = 'timer' color = 'white' size = {25}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.headerButtonContainer}>
                <TextButton haveIcon = {false} text = 'FINISH' style = {{color: '#317db8'}}/>

                </View>
            </Appbar>
            <View style = {styles.body}>
                <View  style = {styles.bodyHeader}>
                    <View styles = {styles.textInputContainer}>
                        <TextInput style = {styles.invisibleTextInpt} placeholder = 'Workout Name' placeholderTextColor = 'white'
                        plac/>
                    </View>
                    <TouchableOpacity>
                    <MaterialCommunityIcons name = 'dots-vertical' color = '#317db8' size = {25}/>

                    </TouchableOpacity>
                </View>
                <View style = {styles.timeContainer}>
                    <Stopwatch 
                        msecs = {false}
                        start = {false}
                        reset = {false}
                        options = {options}
                        getTime = {()=>{}}
                    />

                    {/* <Timer/> */}

                </View>
                <View style = {styles.workoutNoteContainer}>
                    <TextInput style = {styles.workoutNoteTextInput} placeholder = "Workout note" placeholderTextColor = 'white'
                    />
                </View>
                <View  style = {styles.buttonsContainer}>
                    <TextButton style = {{color: '#317db8'}} haveIcon = {false} text = 'ADD EXERCISE'/>
                    <TextButton style = {{color: 'red'}}  haveIcon = {false} text = 'CANCEL WORKOUT'/>
                </View>
            </View>
            
        </Modal>
    );
}
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

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#232e42'
    },
    headerIconsContainer:{
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 15
    },
    timerButton:{
        marginHorizontal: 20 ,
        padding: 8,
        backgroundColor: '#506378',
        opacity: 1,
        borderRadius: 5
    },
    headerButtonContainer:{
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    body:{
        flex: 1,
        backgroundColor:'#232e42',

    },
    bodyHeader:{
        width: '100%',
        height: 65,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
        
    },
    textInputContainer:{
        width: '45%',
        maxWidth: '95%',
        height: 30
        
    },
    invisibleTextInpt:{
        width: '100%',
        maxWidth: 350,
        marginLeft: 10,
        height: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
    timeContainer:{
        width: '100%',
        height: 2,
        marginBottom: 15,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    workoutNoteContainer:{
        width: '95%',
        margin:10,
        backgroundColor: 'gray',
        borderRadius: 5,
        padding: 5
    },
    workoutNoteTextInput:{
        color: 'white',
        fontSize: 15
    },
    buttonsContainer:{
        width: '100%',
        margin:15,
        justifyContent: 'center' ,
        alignItems: 'center'
    },

})

export default EmptyWorkoutPage;