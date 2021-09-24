import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextArea from '../components/CustomTextArea';
import BackButton from '../components/BackButton';
import DoubleStackText from '../components/DoubleStackText';
import Steps from '../components/Steps';
import TextButton from '../components/TextButton';
import AppPage from './AppPage';

function SecurityPage({route, navigation}){
    const content = [];
    const step = '2';
    console.log(route);
   
    return(
        
        <View style = {styles.screen}>
             <View style = {styles.backButtonContainer}>
                 {/* Back button */}
                 {/* <BackButton control = {() =>{}}/>
                 <View style = {styles.backButtonDummyContainer}></View> */}
               
            </View>
           <View style = {styles. infoContainer}>
               {/* New account text and page number */}
              
                <DoubleStackText />
               <Steps numberOfSteps = {step}/>
            
           </View>
           <View style = {styles.inputContainer}>
           <CustomTextArea  placeholder = 'EMAIL'/>
           <CustomTextArea  placeholder = 'PHONE NUMBER (optional)'/>
           <CustomTextArea  placeholder = 'PASSWORD'/>
           <CustomTextArea  placeholder = 'CONFIRM PASSWORD'/>
                <View>
                    <Text style = {styles.passwordNotMatchText}>Paswword doesn't match</Text>
                </View>
           </View>
            <View style = {styles.confirmButtonContainer}>
                <TextButton style={styles.confirmButton} text = 'CONFIRM' action ={() => navigation.navigate('Main')}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        flexDirection: 'column',
        alignItems: 'center'
        
    },
    backButtonContainer:{
        marginTop: '15%',
        marginHorizontal: '5%',
        flexDirection: 'row'
    },
    backButtonDummyContainer:{
        flex: 1,
    },
    inputContainer:{
        flexDirection: 'column',
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    infoContainer:{
        width: '100%',
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    passwordNotMatchText:{
        color: 'white'
    },
    confirmButtonContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmButton:{
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SecurityPage;