import { StackActions } from '@react-navigation/native';
import  React, {useState}  from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    
  } from 'react-native';

  import { Checkbox } from 'react-native-paper';
  import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
  import SettingPage from '../screens/SettingPage';
  import Colors from '../constants/Colors';
  import TextButton from '../components/TextButton';

function Donation(props){
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'white',

    },
  };
  const {navigation, route} = props;
  const [checked, setChecked] = React.useState(false);

  function settingPageHandler(){
    setIsVisible(true);
  }
  function closeSettingPage(){
    setIsVisible(false);
  }
  
  React.useLayoutEffect(() =>{
    navigation.setOptions({
      headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
    });
  }, [navigation]);

    return(
        <View style = {styles.screen}>
          <View style = {styles.textInputContainer}>
            <TextInput {...props} style ={{...styles.input, ...props.style}} keyboardType = 'numeric'
            placeholder = '$' placeholderTextColor = 'gray'/>


          </View>
          <View style = {styles.checkBoxContainer}>
          <Checkbox 
              theme = {theme}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style = {{color: 'white'}}>Recurrent Donation</Text>
          </View>
          <View style = {styles.buttonContainer}>
            <TextButton text='Donate' style = {{color: 'orange'}}/>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#232e42'
  },
  textInputContainer:{
    width: 200,
    height: 200,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
  },
   input:{
    height: 100,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 55,
    color: 'white'
},
checkBoxContainer:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
buttonContainer:{
  width: '100%',
  marginTop: '45%',
  justifyContent: 'center',
  alignItems: 'center'
}
  });

export default Donation;