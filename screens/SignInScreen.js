import React from 'react';
import { View, Image, Text, TextInput, Button, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


export default function SignInScreen() {
  return (
    
        <LinearGradient colors={['#55D284', '#F2CF07']} style={{flex: 1 }}>
            <KeyboardAvoidingView  style={styles.containerkey} behavior="padding" enabled>
            <View style={styles.container}>
                <Image
                source={require('../assets/images/logo_CheLagarto.png')}
                style={styles.logo}
                />
            </View>
            <Text style={{fontSize: 40, margin: 5, fontWeight: '600', color: 'black', alignSelf: 'center'}}>Sign In</Text>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name='user' size={28} style={{alignSelf: 'center'}}></FontAwesome>
                    <TextInput placeholder=' Username' style={styles.inputText}></TextInput>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name='ios-key' size={28} style={{alignSelf: 'center'}}></Ionicons>
                    <TextInput secureTextEntry={true} placeholder=' Password' style={styles.inputText}></TextInput>
                </View>
                <View style={{alignSelf: 'center', marginTop: 20, width: 150}}>
                    <Button title='Log In'>Log in</Button>
                </View>
                <Text style={{margin: 20, alignSelf: 'center'}}>Don't have an account?<Text style={{color: 'blue'}}> Sign Up</Text></Text>
            </View>
            </KeyboardAvoidingView>
        </LinearGradient>
   
  )}

  const styles = StyleSheet.create({
    containerkey: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container: {
        // backgroundColor: 'white', 
        width: 150, 
        alignSelf: "center", 
        marginTop: 5, 
        borderRadius: 5,
        
               
        
      },
      logo: {
        resizeMode: 'contain', 
        width: 150, 
        height: 130, 
        alignSelf:"center",
      },
      inputContainer: {
        alignSelf:"center", 
        marginTop: 20, 
        backgroundColor: 'white', 
        borderRadius: 5 , 
        height:300, 
        width: 300, 
        borderWidth: 0.3, 
        borderColor: '#130CB7',
        padding: 20,
        
        
      },
      inputText : {
        margin: 20, 
        borderBottomWidth: 0.7,
        borderColor: 'silver', 
        width: 200,
        height: 40,
        fontSize:22,
        
        
      }
      
  })