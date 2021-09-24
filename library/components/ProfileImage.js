import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function ProfileImage(props){
    
    const [hasProfileImage, setProfileImage] = useState("");
    const content =<Icon
    name="chain"
    size={30}
    color="white"
    />;

    if(hasProfileImage === true ){
        content = <Image/>
    }


    return(
        
        <TouchableOpacity>
            <View style = {styles.frame}>
                {content}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    frame:{
        width: 80,
        height: 80,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProfileImage;