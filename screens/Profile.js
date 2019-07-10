import React from 'react';
import { View, Image, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function LinksScreen() {
  return (
   
        <LinearGradient colors={['#52E5E7', '#130CB7']} style={{flex: 0.5}}>
            <View style={{ backgroundColor: 'white', width: 120, alignSelf: "center", marginTop: 40, borderRadius: 5 }}>
                <Image
                source={require('../assets/images/logo_CheLagarto.png')}
                style={{resizeMode: 'contain', width: 100, height: 80, alignSelf:"center"}}
                />
            </View>
            <View style={{alignSelf:"center", marginTop: 45, backgroundColor: 'white', borderRadius: 5 , height:400, width: 300, borderWidth: 0.3, borderColor: '#130CB7'}}>
                <Text style={{fontSize: 35, margin: 10 }}>Log in</Text>
                <Text style={{margin: 10}}>Enter your username:</Text>
                <TextInput placeholder=' Username' style={{margin: 10, borderWidth: 0.7, borderColor: 'black', borderRadius: 5}}></TextInput>
                <Text style={{margin: 10}}>Enter your Password:</Text>
                <TextInput placeholder=' Password' style={{margin: 10, borderWidth: 0.7, borderColor: 'black', borderRadius: 5}}></TextInput>
                <View style={{alignSelf: 'center', marginTop: 20, width: 150}}>
                    <Button title='Log In'>Log in</Button>
                </View>
            </View>
        </LinearGradient>
  )}