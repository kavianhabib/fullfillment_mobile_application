import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity,Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


import PRComponent from '../components/PRComponent';
import Colors from '../constants/Colors';
import CalenderPage from '../screens/CalenderPage';


function Service(props){
    const {navigation, route} = props;
    const [calenderVisiblity, setCalenderVisiblity] = React.useState(false);

    function openCalender(){
        setCalenderVisiblity(true);
    }
    
    function closeCalender(){
        setCalenderVisiblity(false);
    }

    const [emptyWorkoutPageVisiblity, setEmptyWorkoutPageVisiblity] = useState(false);

    function emptyWorkoutPageHandler(apply){
        setEmptyWorkoutPageVisiblity(apply)
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({
            // headerRight: () =>(
            //     // <TouchableOpacity style = {{marginRight: 10}} onPress={openCalender}>
            //     //     <MaterialCommunityIcons  name = 'calendar-check' color = 'white' size = {25}/>
            //     // </TouchableOpacity>
            // ),
            headerStyle: {backgroundColor: Colors.primary},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'}
        });
    }, [navigation]);
    return(
        <View style = {styles.screen}>
            <CalenderPage visiblity = {calenderVisiblity} functionCall = {closeCalender}/>

            <View>
            <Button title = 'SIGN UP FOR SERVICE'   style = {styles.button} onPress = {emptyWorkoutPageHandler.bind(this,true)}/>
            </View>
            <View style = {styles.dataInfo}>
                <Text style = {styles.month}>Current Service</Text>
            </View>
            <PRComponent/>
        </View>
       
    );
};

const styles = StyleSheet.create({
    calender:{
        backgroundColor: 'black'
    },
    calenderContainer:{
        backgroundColor: 'black'
    },
    screen:{
        flex: 1,
        backgroundColor: '#232e42'
    },
    dataInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        margin: 5
    },
    month:{
        color: 'white'
    },
    numberOfworkouts:{
        color: 'white'
    }
});

export default Service;