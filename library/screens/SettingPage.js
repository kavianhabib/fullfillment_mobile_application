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
    ScrollView

  } from 'react-native';

  import {Appbar} from 'react-native-paper';

  import Colors from '../constants/Colors';
  import SettingCustomButton from '../components/SettingCustomButton';
  import RadioButtonPage from '../components/RadioButtonPage';
  import CustomToggleButton from '../components/CustomToggleButton';
  import CustomButton from '../components/CustomButton';
  import ProfileEditPage from '../screens/ProfileEditPage';
  import AvailableBarsPage from './AvailableBarsPage';
  import AvailablePlatePage from './AvailablePlatePage';
  import StartHistoryPage from './StartHistoryPage';


  function SettingPage(props){

    const [languages, setLanguages] = useState([{key: '1', value : 'English'},
    {key: '2', value: 'Persian'}, {key: '3', value: 'Spanish'}]);

    const [weightUnit, setWeightUnit] = useState([{key: '1', value : 'Metric(kg)'},
    {key: '2', value: 'US/Imeperial(lbs)'}]);

    const [distanceUnit, setDistanceUnit] = useState([{key: '1', value : 'Metric (m/km)'},
    {key: '2', value: 'US/Imeperial(ft/miles)'}]);

    const [sizeUnit, setSizeUnit] = useState([{key: '1', value : 'Metric(cm)'},
    {key: '2', value: 'US/Imeperial(in)'}]);

    const [firstWeekday, setFirstWeekday] = useState([{key: '1', value : 'Saturday'},
    {key: '2', value: 'Sunday'}, {key: '3', value: 'Monday'}]);
    
    const [profileEditVisiblity, setProfileEditVisiblity] = useState(false);

    const [language, setLanguage] = useState(1);
    const [checked, setChecked] = useState(languages[0].key);
    const [selected, setSelected] = useState([]);
    // setIsVisible(props.isVisible);
    const [isVisible, setIsVisible] = useState(false);

    const [availableBarPageVisiblity, setAvailableBarPageVisiblity] = useState(false);
    const [availablePlatePageVisiblity, setAvailablePlatePageVisiblity] = useState(false);
//  let selected = [];
    const [datepickerVisiblity, setDatepickerVisiblity] = useState(false);

    function languageSettingHandler(){
      setIsVisible(false);
    }
    function PopupPageHandler(selection){
        setIsVisible(true);
        setSelected(selection);  
    }
    function fullPagePopupHandler(){
      setProfileEditVisiblity(true);
    }
    function closeFullPagePopup(){
      setProfileEditVisiblity(false);
      
    };
    function availableBarsPageHandler(){
      setAvailableBarPageVisiblity(true);
    }
    function closeAvailableBarPage(){
      setAvailableBarPageVisiblity(false);
    }
    function availablePlatePageHandler(){
      setAvailablePlatePageVisiblity(true);
    }
    function closeAvailablePlagePage(){
      setAvailablePlatePageVisiblity(false);
    }

    function showStartHistoryPage(){
      setDatepickerVisiblity(true);
    }
    function closeStartHistoryPage(){
      setDatepickerVisiblity(false);
    }
  
      return(
          
            <Modal 
              transparent = {true}
              // onBackdropPress = {() => setModeVisible(false)}
              visible={props.isVisible||false}
              style={styles.profileSettingPage}
              animationType = 'slide'
              
              >
                <RadioButtonPage itemList ={selected} functionCall = {languageSettingHandler}
      isVisible = {isVisible} checked = {checked}/>

              <ProfileEditPage visiblity = {profileEditVisiblity} functionCall ={closeFullPagePopup}/>
              <AvailableBarsPage visiblity = {availableBarPageVisiblity} functionCall = {closeAvailableBarPage}/>

              <AvailablePlatePage visiblity = {availablePlatePageVisiblity} functionCall = {closeAvailablePlagePage}/>

              <StartHistoryPage visiblity = {datepickerVisiblity} functionCall = {closeStartHistoryPage}/>
              <Appbar.Header style = {styles.header}>
                <Appbar.BackAction  style={styles.backButton} onPress = {props.onPush}/>
              </Appbar.Header>

              <ScrollView>
              <View style = {styles.screenContainer}> 
                  <View style ={styles.screen}>
                  <View style = {styles.sectionContainer}>
                    <Text style = {styles.sectionText}>Profile</Text>
                    <SettingCustomButton name = 'Edit' selectedOne = '' functionCall = {fullPagePopupHandler}/>
                  </View>
                

                  <View style = {styles.sectionContainer}>
                    <Text style = {styles.sectionText}>Units &  Localization</Text>
                    <SettingCustomButton name = 'Language' selectedOne = 'Default' functionCall = {PopupPageHandler.bind(this,languages)}/>
                    <SettingCustomButton name = 'Weight' selectedOne = 'US/imperial' functionCall = {PopupPageHandler.bind(this,weightUnit)}/>
                    <SettingCustomButton name = 'Distance' selectedOne = 'US/imperial' functionCall = {PopupPageHandler.bind(this,distanceUnit)}/>
                    <SettingCustomButton name = 'Size' selectedOne = 'US/imperial' functionCall = {PopupPageHandler.bind(this,sizeUnit)}/>
                    <SettingCustomButton name = 'First weekday' selectedOne = 'US/imperial' functionCall = {PopupPageHandler.bind(this,firstWeekday)}/>
                  </View>

                  
                  <View style = {styles.sectionContainer}>
                    <Text style = {styles.sectionText}>General</Text>
                    <SettingCustomButton name = 'Start History From' selectedOne = 'US/imperial' functionCall = {showStartHistoryPage}/>
                    <SettingCustomButton name = 'Available bars' selectedOne = '' functionCall = {availableBarsPageHandler}/>
                    <SettingCustomButton name = 'Available plates' selectedOne = '' functionCall = {availablePlatePageHandler}/>
                    <SettingCustomButton name = 'Theme' selectedOne = 'Dark' functionCall = {PopupPageHandler.bind(this,firstWeekday)}/>
                  </View>
                  <View style = {styles.sectionContainer}>
                    <Text style = {styles.sectionText}>Rest Timer</Text>
                    <SettingCustomButton name = 'Timer increment value' selectedOne = '30s' functionCall = {PopupPageHandler.bind(this,weightUnit)}/>
                    <View style = {styles.toggleButtonContainer}>
                      <Text style = {styles.toggleButtonText}>Vibrate on finish</Text>
                      <CustomToggleButton/>
                    </View>
                    <SettingCustomButton name = 'Sound' selectedOne = 'Boxing bell' functionCall = {PopupPageHandler.bind(this,firstWeekday)}/>
                  </View>

                  <View style = {styles.sectionContainer}>
                    <Text style = {styles.sectionText}>Contact and Support</Text>
                    <SettingCustomButton name = 'Help Center' selectedOne = 'Our Help Center has answer for most frequently asked questions.' functionCall = {PopupPageHandler.bind(this,weightUnit)}/>
                    <SettingCustomButton name = 'Feature request' selectedOne = '' functionCall = {PopupPageHandler.bind(this,distanceUnit)}/>
                    <SettingCustomButton name = 'Bug Report' selectedOne = '' functionCall = {PopupPageHandler.bind(this,firstWeekday)}/>
                    <SettingCustomButton name = 'Account Issues' selectedOne = '' functionCall = {PopupPageHandler.bind(this,firstWeekday)}/>
                    <SettingCustomButton name = 'Twitter' selectedOne = '' functionCall = {PopupPageHandler.bind(this,firstWeekday)}/>
                    <SettingCustomButton name = 'Facebook' selectedOne = '' functionCall = {PopupPageHandler.bind(this,firstWeekday)}/>
                    <SettingCustomButton name = 'Instagram' selectedOne = '' functionCall = {PopupPageHandler.bind(this,firstWeekday)}/>

                  </View>
                  <View style = {styles.loginButtonContainer}>
                  <Button color='green' style={styles.loginButton} title ='Logout'/>
                  </View>
                  </View>
                </View>
              </ScrollView>
             
                
               
            </Modal>
      );
  }

  const styles = StyleSheet.create({
    screenContainer:{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      
    },
    header:{
      height: 25,
       alignItems: 'center',
        backgroundColor: '#232e42'
    },
    backButton:{top: -15},
    screen:{
      width: '100%',
      height:'100%',
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#232e42',
      opacity: 1,
      
    },
    sectionContainer:{
      width: '100%',
      margin: 0,
      paddingHorizontal: 15,
      borderColor: 'gray',
      borderBottomWidth: 1,
      paddingVertical: 5
    },
    profileSettingContainer:{
      width: '100%',
      margin: 5,
    },
    unitsLocalizationSettingContainer:{
      width: '100%',
      margin: 5,
    },
    sectionText:{
      color: 'white',
      fontSize: 17,
      fontWeight: 'bold'
    },
    toggleButtonText:{
      color: 'white', flex: 1,
    },
    toggleButtonContainer:{
      backgroundColor:'#232e42',
      width: '100%',
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    loginButton:{
      borderRadius: 10

  },
  loginButtonContainer:{
      width: '80%'
  }
  });
  export default SettingPage;