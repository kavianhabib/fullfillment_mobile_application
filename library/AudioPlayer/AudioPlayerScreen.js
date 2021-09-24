import React from 'react';
import {View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function AudioPlayerScreen(props){
    return(
        <View style = {styles.screen}>
            <View style = {styles.photoContainer}>
                <Image style = {styles.image}
                source = {{uri: 'https://i.pinimg.com/originals/a9/e1/35/a9e135a660f6cca1bc6bf9dff7d06ad3.jpg'}}/>
            </View>
            <View style = {styles.nameAndDescriptionContainer}>
                <View style = {styles.nameContainer}>
                    <Text style = {styles.nameText}>#1 Hallauah Hallauah</Text>
                </View>
                <View style = {styles.descriptionContainer}> 
                    <Text style= {styles.descriptionText} >This will be the description for the sermon. It can also be a summary.</Text>
                </View>
            </View>
            <View style = {styles.progressBarContainer}>
                <View style = {styles.progressBar}>
                    <View style = {{flex: 0.3, backgroundColor: 'red'}}/>
                    <View style = {{flex: 0.7, backgroundColor: 'white'}}/>
                </View>
            </View>
            <View style = {styles.controlContainer}>
                <View style = {styles.rewindContainer}>
                      
                            <TouchableOpacity>
                                <MaterialCommunityIcons name = 'rewind-10' color = 'white' size = {40}/>
                            </TouchableOpacity>
                       
                </View>
                <View style = {styles.playContainer}>
                        
                            <TouchableOpacity>
                                <MaterialCommunityIcons name = 'play-box' color = 'white' size = {70}/>
                            </TouchableOpacity>
                        
                        </View>
                <View style = {styles.forwardContainer}>
                
                            <TouchableOpacity>
                                <MaterialCommunityIcons name = 'fast-forward-10' color = 'white' size = {40}/>
                            </TouchableOpacity>
                        
                </View> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    photoContainer:{

    },
    image:{
        height: 330,
        width: 330,
        marginTop: 15,
        borderRadius: 17
    },
    nameAndDescriptionContainer:{
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameContainer:{

    },
    nameText:{
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    }, 
    descriptionContainer:{
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionText:{
        color: 'gray'
    },
    progressBarContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBar:{
        height: 3,
        width: '90%',
        marginTop: 10,
        flexDirection: 'row'
    },
    controlContainer:{
        width: '100%',
        height: 150,
        marginVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rewindContainer:{
        width: 60,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playContainer: {
        width: 100,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    forwardContainer:{
        width: 60,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
  
});

export default AudioPlayerScreen;