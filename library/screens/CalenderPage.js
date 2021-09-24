import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import {Appbar} from 'react-native-paper';

import Colors from '../constants/Colors';

function CalenderPage(props){
    const date = null;
const month = null;
const year = null;
function getCurrentDate(){
    const obj = new Date();
    date = obj.getDate();
    month = obj.getMonth();
    year = obj.getFullYear();

    return year+'-'+month+'-'+date;
}
    return(
    <Modal
    transparent = {false}
    visible = {props.visiblity || false}
    animationType = 'fade'>
    <Appbar style = {styles.header}>
        <Appbar.BackAction onPress = {props.functionCall}/>
    </Appbar>
<View >
<CalendarList 
// Initially visible month. Default = Date()
current={getCurrentDate}
// Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//   minDate={year-1+'-'+month+'-' + year}
// Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//   maxDate={year+1+'-'+month+'-' + year}
// Handler which gets executed on day press. Default = undefined
onDayPress={(day) => {console.log('selected day', day)}}
// Handler which gets executed on day long press. Default = undefined
onDayLongPress={(day) => {console.log('selected day', day)}}
// Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
monthFormat={'yyyy MM'}
// Handler which gets executed when visible month changes in calendar. Default = undefined
onMonthChange={(month) => {console.log('month changed', month)}}
// Hide month navigation arrows. Default = false
hideArrows={true}
// Replace default arrows with custom ones (direction can be 'left' or 'right')
renderArrow={(direction) => (<Arrow/>)}
// Do not show days of other months in month page. Default = false
hideExtraDays={true}
// If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
// day from another month that is visible in calendar page. Default = false
disableMonthChange={true}
// If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
firstDay={1}
// Hide day names. Default = false
hideDayNames={false}
// Show week numbers to the left. Default = false
showWeekNumbers={true}
// Handler which gets executed when press arrow icon left. It receive a callback can go back month
onPressArrowLeft={subtractMonth => subtractMonth()}
// Handler which gets executed when press arrow icon right. It receive a callback can go next month
onPressArrowRight={addMonth => addMonth()}
// Disable left arrow. Default = false
disableArrowLeft={true}
// Disable right arrow. Default = false
disableArrowRight={true}
// Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
disableAllTouchEventsForDisabledDays={false}
// Replace default month and year title with custom one. the function receive a date as parameter.
renderHeader={(date) => {/*Return JSX*/}}
// Enable the option to swipe between months. Default = false
enableSwipeMonths={true}

pastScrollRange={50}
futureScrollRange = {50}
scrollEnabled = {true}
showScrollIndicator = {true}
/>
</View>

    </Modal>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#232e42'
    }
});

export default CalenderPage;


