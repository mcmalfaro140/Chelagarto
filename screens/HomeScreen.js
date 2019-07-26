import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Button,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  
} from 'react-navigation';
import CountriesList from '../components/CountriesList';
import Calendar from '../components/Calendar';
import SearchScreen from '../screens/SearchScreen'
import {Backbtn} from '../navigation/BackNav'


class HomeScreen extends React.Component{
  render(){
  return(
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
          <Button title="search" onPress={() => this.props.navigation.navigate('Search')}/>
        </View>
      </View>
    </ImageBackground>
    
  );
}

}



const Home_Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Backbtn navigationProps={navigation} />,
    }),
  },
},{
  initialRouteName: 'Home'
});

const Home = createAppContainer(Home_Navigator);

export default Home;
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