import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import CountriesList from '../components/CountriesList';
import Calendar from '../components/Calendar';



export default function HomeScreen() {
  return (
    <ImageBackground style={styles.backImg} source={require('../assets/images/home_2.jpg')} >
      <View style={styles.welcomeContainer}>
        <Image source={require('../assets/images/cheLogo.png')} style={styles.welcomeImage}/>
        <View style={styles.drop}>
          <Text style={styles.desText}>Select your Destination:</Text>
          <CountriesList />
               
        </View> 
        
        {/* < CountriesList />
        <Calendar /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backImg: {
    flex: 1,
    
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: '25%',
    marginBottom: 10,
  },
  welcomeImage: {
    width: 170,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    
  },
  drop:{
    marginTop: '65%',
    
  },
  desText:{
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
 
  
})