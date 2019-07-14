import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    ImageBackground,
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import { MonoText } from '../components/StyledText';
import ContactComponent from '../components/ContactComponent';

export default function ContactScreen() {
    return (
        // <View style={styles.container}>
        //     <Image source={require('../assets/images/bg_contacto.jpg')} style={{resizeMode: 'contain'}}></Image>
        // </View>
        <ImageBackground source={require('../assets/images/bg_contacto.jpg')} style={styles.containerImage}>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerImage:{
        flex: 1,
        // width: '100%', 
        height: '100%',
        marginTop : '60%'
        
        
        
    }
})

