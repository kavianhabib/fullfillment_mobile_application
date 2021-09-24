import React, {useState} from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity, Button,
FlatList} from 'react-native';

import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RoundButton from '../components/RoundButton';
import AvailableBar from '../components/AvailableBar';
import CustomTextArea from '../components/CustomTextArea';
function AvailableBarsPage(props){
    const [popupVisiblity, setPopupVisiblity] = useState(false);
    const [objects, setObjectList] = useState([]);
    const [name, setName] = useState('');
    const [enteredKgValue, setKgValue] = useState('');
    const [enteredLbValue, setLbValue] = useState('');

    const[weight, setWeight] = useState(0)

    function nameInputHandler(inputText){
        setName(inputText);
    }
    function kgInputHandler(inputText){
        setKgValue(inputText.replace(/[^0-9]/g, ''));
        let v = convertKgToLb(enteredKgValue);
        setLbValue(Math.round(v).toString());
    }
    function lbInputHandler(inputText){
        setLbValue(inputText);
        setKgValue(convertLbToKg(enteredLbValue).toString);
    }
    function convertKgToLb(value){
        return Math.round(value * 2.20462);
    }
    function convertLbToKg(value){
        return value/2.20462;
    }
    function showAddPopup(){
        setPopupVisiblity(true);
        console.log('in the popup');
    }
    // function lbInputHandler(inputText){
    //     setWeightValue(inputText.replace(/[^0-9]/g, ''));
    // }
    function removePopup(){
        setPopupVisiblity(false);
        setName('');
        setLbValue('');
        setKgValue('');
    }
    let content = [];
    function save(){
        setPopupVisiblity(false);
        if(name === '' || enteredLbValue ===0 
        || enteredLbValue === 0 ){
            return;
        }
        let myName = name;
        setObjectList(currentList => [...currentList, {key: (Math.random()*1000).toString(),
        value: {myName: name, lb: enteredLbValue, kg: enteredKgValue, default: 'default'}
    }]);

        console.log(objects);
        setName('');
        setLbValue('');
        setKgValue('');
       
    }
    return(
        <Modal
        transparent = {false}
        animationType = 'slide'
        visible = {props.visiblity}
        >
            <View style = {styles.screen}>
                <Appbar style = {styles.headerContainer}>
                    <Appbar.BackAction onPress = {props.functionCall}/>
                </Appbar>
                <View style = {styles.sectionsContainer}>
                    <FlatList 
                     data = {objects}
                     renderItem = {({item}) =>
                        <AvailableBar key = {item.key} name = {item.value.myName} weight = {item.value.kg} default = 'something'  />
                    }
                    />

                </View>
            
                <View style = {styles.addButtonContainer}>
                    <RoundButton iconName = 'plus' iconColor = 'white' iconSize = {20} myFunction = {showAddPopup} />
                </View>
               
            </View>
            <Modal
            transparent = {true}
            animationType = 'fade'
            visible = {popupVisiblity ||false}
            >
                <View style = {styles.screenContainer}>
            <View style = {styles.popUpScreen}> 
                <View style = {styles.nameContainer}>
                    <CustomTextArea placeholder = 'Name' screenStyle={styles.textAreaStyle} textInputStyle = {styles.textAreaStyleInside}
                    textInputStyleFocused = {styles.textAreaStyleInsideFocused} topTextColor = '#24A0ED' textTransform = 'lowercase' topTextLeft = {18}
                    onChangeText = {nameInputHandler}
                    value = {name}
                    />
                </View>
                <View style = {styles.weightContainer} >
                    <CustomTextArea placeholder = 'kg' screenStyle={{...styles.textAreaStyle, ...styles.weightTextArea}} textInputStyle = {styles.textAreaStyleInside}
                    textInputStyleFocused = {styles.textAreaStyleInsideFocused} keyboardType='numeric' topTextColor = '#24A0ED' textTransform = 'lowercase' topTextLeft = {10}
                    onChangeText={kgInputHandler}
                    value = {enteredKgValue}/>

                    <CustomTextArea placeholder = 'lb' screenStyle={{...styles.textAreaStyle, ...styles.weightTextArea}} textInputStyle = {styles.textAreaStyleInside}
                    textInputStyleFocused = {styles.textAreaStyleInsideFocused} keyboardType='numeric' topTextColor = '#24A0ED' textTransform = 'lowercase' topTextLeft = {10}
                    onChangeText={lbInputHandler}
                    value = {enteredLbValue}/>
                </View>
            
            <View style = {styles.buttonContainer}>
            <Button title = 'CANCEL' style = {styles.button} onPress = {removePopup}/>

            <Button title = 'SAVE' style = {styles.button} onPress =  {save} />

            </View>
        </View>
        </View>
            </Modal>
        </Modal>
   
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#232e42',
        
    },
    headerContainer:{
        alignItems: 'center',
        backgroundColor: '#232e42'
    },

    addButtonContainer:{
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    },
    sectionsContainer:{
        flex: 1,
        alignItems: 'center',
        // width:'100%',
        // height: '100%'
    },
    screenContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
      },
      popUpScreen:{
      
        width: 'auto',
        maxWidth: '60%',
        minWidth: '60%',
        height: 'auto',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 18
      },
      textAreaStyle:{
          width: '100%',
          opacity: 1
      },
      nameContainer:{
          width: '100%'
      },
      weightContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
      },
      textAreaStyleInside:{
            width: '85%',
            height: 30,
            marginTop: 15,
            opacity:1,
            backgroundColor: 'gray',
            borderBottomColor: 'white',
            color: 'white',
            borderBottomWidth: 1,
            // textTransform: 'uppercase'
      },
      textAreaStyleInsideFocused:{
        width: '85%',
        height: 30,
        marginTop: 15,
        color: 'white',
        opacity:1,
        borderBottomColor: '#24A0ED',
        borderBottomWidth: 1,
        // textTransform: 'uppercase'
      },
      weightTextArea:{
          width: '45%'
      },
      buttonContainer:{
        width: '100%',

          flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'

      }

 

});

export default AvailableBarsPage;