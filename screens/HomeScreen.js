import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Button
} from 'react-native';
import CountriesList from '../components/CountriesList';
import Calendar from '../components/Calendar';



export default function HomeScreen() {
  return (
    <ImageBackground style={styles.backImg} source={require('../assets/images/home_2.jpg')} >
      <View style={styles.welcomeContainer}>
        <Image source={require('../assets/images/cheLogo.png')} style={styles.welcomeImage}/>
       
        <View style={styles.cont}>
          <Text style={styles.desText}>Select your Destination:</Text>
        </View>
        <View style={styles.drop}>
          <View style={styles.cont}>
            <CountriesList />
          </View>
        </View> 
        <View style={styles.cont}>
          <Text style={styles.Text}>Select your Date:</Text>
        </View>
        <View >
          <Calendar/>
        </View>
        <View style={styles.button}>
          <Button title="search"/>
        </View>
        
        
        
        
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
    marginBottom: 0,
  },
  welcomeImage: {
    width: 170,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    
  },
  drop:{
    marginTop: '45%',
    width: '75%',
    margin: '5%'
       
       
  },
  desText:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: '48%'
  },
  cont: {
    flex: 1,
    marginVertical: '7%'
    
  },
  Text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: '-5%'
  },
  button: {
    width: '100%',
    marginTop: '5%',
    paddingLeft: '10%',
    paddingRight: '10%',
    
  }
  
 
  
})