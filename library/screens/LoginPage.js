import React, {useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginTextArea from '../components/LoginTextArea';
import MyGoogleSignin from '../autoSigninComponents/MyGoogleSignin';
import CustomButton from '../components/CustomButton';
import db from '../../components/FirebaseConfig';

function LoginPage({navigation}){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function checkUser(){
        console.log('user name is ', userName);

        const data = db.collection('users').doc(userName);
        data.get().then(function(doc) {
            if(doc.exists){
                if(doc.data().password === password){
                    navigation.navigate('UserPage', {
                        userName: userName,
                        password: password
                    });
                }
            }
            else{
                
            }
        })
    }
    function userNameHandler(value){
        setUserName(value);
    }
    function passwordHandler(value){
        setPassword(value);
    }
    return(
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
            
             <View style = {styles.screen}>
                 {/* <ImageBackground source={backgroundImage} style ={styles.backgroundImage}> */}
                 <View style = {styles.login}>
                <Text style ={styles.loginText}>Log in</Text>
                <LoginTextArea placeHolderText='Username or email' 
                value = {userName} onChangeText = {value => userNameHandler(value)}/>
                <LoginTextArea placeHolderText='Password' 
                value = {password} onChangeText = {value => passwordHandler(value)}/>
                <View style ={styles.loginButtonContainer}>
                <Button color='green' style={styles.loginButton} title ='Login' onPress = {checkUser}/>
                </View>
                
            </View>
            <View style={styles.middle}>
               {/* <MyGoogleSignin/> */}
                <CustomButton style = {styles.autoSigninButton} content={  <Icon
                name="facebook"
                size={15}
                color="gray"
                />} />
                {/* <CustomButton control ={}style = {styles.autoSigninButton} content={  <Icon
                name="google"
                size={15}
                color="gray"
                />}/> */}
                <MyGoogleSignin/>
            </View>
            {/* <View style ={styles.footing}>
                <CustomButton content={<Text style={styles.buttonText}>LOGIN</Text>}/>
                <CustomButton control = {() => navigation.navigate('Signup')} content={<Text style={styles.buttonText}>REGISTER</Text>}/>
                <CustomButton content={<Text style={styles.buttonText}>FORGOT</Text>}/>
            </View> */}
                 {/* </ImageBackground> */}
           
        </View>
        </TouchableWithoutFeedback>
       
       
    );
};

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        
    },
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    login:{
        flex: 1,
        // width: '100%',
        // height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText:{
        fontSize: 27,
        fontWeight: 'bold'
    },
    buttonText:{
        color: 'white',
        fontSize: 13
    },
    middle:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        margin: 20
    },
    footing:{
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    autoSigninButton:{
        backgroundColor: 'white',
        margin: 10,
        width: 55,
        height: 55
    },
    loginButton:{
        borderRadius: 10

    },
    loginButtonContainer:{
        width: '80%'
    }

});

export default LoginPage;