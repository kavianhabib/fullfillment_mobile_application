import React from 'react';
import {View, Button,TextInput,StyleSheet, Text} from 'react-native';

import CustomTextArea from '../components/CustomTextArea';
import BackButton from '../components/BackButton';
import ProfileImage from '../components/ProfileImage';
import UsernameCheck from '../components/UsernameCheck';
import Steps from '../components/Steps';
import TextButton from '../components/TextButton';
import DoubleStackText from '../components/DoubleStackText';


function SignupPage({navigation}){
    const step = '1';
    return(
        <View style = {styles.screen}>
            <View style = {styles.backButtonContainer}>
                 {/* Back button */}
                 {/* <BackButton control = {() =>{}}/> */}
                 <View style = {styles.backButtonDummyContainer}></View>
               
            </View>
           <View style = {styles. infoContainer}>
               {/* New account text and page number */}
              
                <DoubleStackText />
               <Steps numberOfSteps = {step}/>
            
           </View>
           <View style = {styles.profileImageContainer}>
               {/* logo and logo instruction */}
               <ProfileImage/>
               
               <View>
               <Text style = {styles.imageText}>Upload a profile picture</Text>
                   <Text style = {styles.imageText}>(optional)</Text>
               </View>
               
           </View>
           <View style ={styles.inputContainer} >
               {/* input area */}
               <CustomTextArea placeholder="NAME"/>
               <CustomTextArea placeholder="LAST NAME"/>
               <CustomTextArea placeholder="USERNAME"/>

           </View>
           
               <UsernameCheck response = 'User name is available'/>
          
            <Text>photo here</Text>
            {/* <CustomTextArea placeholder = 'First Name'/>
            <CustomTextArea placeholder = 'Last Name'/>
            <CustomTextArea placeholder = 'User'/> */}
            

            <TextButton  text = 'Proceed' action = {() => navigation.navigate('Security')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        // flex: 1,
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
   
    infoContainer:{
        width: '100%',
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    
  
    stepsText:{
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    imageText:{
        color: 'white',
        fontSize: 14,
        opacity: 0.6,
        marginLeft: 15,
    },
    profileImageContainer:{
        width: '100%',
        marginHorizontal: '5%',
        marginTop: 20,
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
    },
    inputContainer:{
        flexDirection: 'column',
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default SignupPage;
