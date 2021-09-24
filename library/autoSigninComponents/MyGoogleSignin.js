import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

// import * as Google from 'expo-google-app-auth';

import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';


function MyGoogleSignin(){
    async function getGoogleUser(){
        // const config = {
        //     // expoClientId: '',
        //     iosClientId:'850747018083-u7nl9u2jpqlbtoc3kf3parri1mnbffoj.apps.googleusercontent.com',
        //     androidClientId: '850747018083-d1je33oabkkq7c1vgkjr01ob0f35ndpd.apps.googleusercontent.com',
        //     scopes: ['profile', 'email'],
        //     // iosStandaloneAppClientId: '',
        //     // androidStandaloneAppClientId: ''
        // };

        // const {type, accessToken, user} = await Google.logInAsync(config);
    
        // if(type === 'success'){
        //     console.log(user);
    
        //     //log out
        //     await Google.logOutAsync({accessToken, ...config})
        // }
    };
  

    

    // GoogleSignin.configure();

    return(
        <CustomButton control ={getGoogleUser} style = {styles.autoSigninButton} content={  <Icon
            name="google"
            size={15}
            color="gray"
            />}/>
        
    );
};

const styles = StyleSheet.create({
    autoSigninButton:{
        backgroundColor: 'white',
        margin: 10,
        width: 55,
        height: 55
    }
});
  


export default MyGoogleSignin;