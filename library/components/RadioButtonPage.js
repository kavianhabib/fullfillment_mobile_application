import { StackActions } from '@react-navigation/native';
import  React, {useState}  from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Modal,
    Button,
    DynamicColorIOS,
    Dimensions,
    FlatList
  } from 'react-native';

  import {RadioButton} from 'react-native-paper';
  function RadioButtonPage(props){
    const {itemList, functionCall, isVisible, checked} = props;

    // if(itemList){
    //   setVisiblity(true);
    // }

    console.log('in the button');
    const [value, setValue] = React.useState('');
    return(
      <Modal
      transparent = {true}
      
      visible = {isVisible || false}
      animationType = 'fade'
      >
        <View style = {styles.screenContainer}>
        <View style = {styles.screen}> 
            {/* <FlatList 
            data = {itemList}
            renderItem = {
              data =>
              <RadioButton id = {data.item.key} onPress = {functionCall.bind(data.item.key)} 
              value = {data.item.value}
              label = "label"
              status = {checked === (data.item.key) ? 'checked' : 'unchecked'}/>}
            /> */}
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
              {itemList.map((item) =>
                    <RadioButton.Item key = {item.key} label={item.value} value={item.value} />
                
              )}
            </RadioButton.Group>
            <View style = {styles.buttonContainer}>
            <Button title = 'OK' style = {styles.button} onPress = {functionCall}/>

            </View>
        </View>
        </View>
    
      </Modal>
     
      );
  }

  const styles = StyleSheet.create({
    screenContainer:{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0
    },
    screen:{
      
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
    buttonContainer:{
      width: 40,
      marginVertical: 8,
    },
  
  });

  export default RadioButtonPage;
