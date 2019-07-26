import React from 'react';
import {
    Text,
    Image,
    Button,
    SafeAreaView,
    StyleSheet,
    View,
    ImageBackground
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

class SearchComp2 extends React.Component {
    render() {
        return (
                <SafeAreaView>
                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/images/bonito2.jpg')} style={{height: 200}}>
                            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', flex: 1, marginTop: 115, padding: 5}}> 
                                <View style={styles.header}>
                                    <Text style={styles.name}>Suites Bonito</Text>
                                    <Text style={styles.price}>From $26</Text>
                                </View>
                                <View style={{flex: 1, margin: 0, padding: 0, flexDirection: 'row'}}>
                                    <View style={{flex: 1, margin: 0, padding: 0}}>
                                        <View style={{flex: 1, margin: 0, padding: 0, flexDirection: 'row'}} >
                                            {/* <Rating type="custom" style={{alignSelf: 'flex-start', backgroundColor: 'black'}} ratingBackgroundColor="black"  imageSize={20} readonly ratingCount={5} startingValue={5} /><Text style={{color:'white'}}> 100% Recomend us</Text>
                                        */}
                                            <Image source={require('../assets/images/star.png')} style={{width: 15, height: 15, padding: 1}}></Image>
                                            <Image source={require('../assets/images/star.png')} style={{width: 15, height: 15, padding: 1}}></Image>
                                            <Image source={require('../assets/images/star.png')} style={{width: 15, height: 15, padding: 1}}></Image>
                                            <Image source={require('../assets/images/star.png')} style={{width: 15, height: 15, padding: 1}}></Image>
                                            <Image source={require('../assets/images/star-unfilled.png')} style={{width: 15, height: 15, padding: 1}}></Image>
                                            <Text style={{color: 'white', fontSize: 12}}> 365 Reviews</Text>
                                        </View>
                                        <Text style={{color: 'white', fontSize: 12, flex: 1}}>There are 9 people looking at this right now.</Text>
                                    </View>
                                    <View style={{ alignSelf: 'flex-start', backgroundColor: '#ffc30b', width: 30, height: 30, borderRadius: 15,  marginTop: 3, marginRight: 8 }}> 
                                        <Ionicons style={{alignSelf: 'center', paddingTop: 5}} name='ios-arrow-forward' size= {20}></Ionicons>
                                    </View>
                                </View>
                                
                            </View>
                        </ImageBackground>
                    </View>
                    
                </SafeAreaView>
                );
    }
  
  }

  export default SearchComp2;

    
const styles = StyleSheet.create({
        container:{
            flex: 1,
            height: 202,
            margin: '2%',
            marginBottom: '1%',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 5,
            borderWidth: 1,
            borderColor: 'black',
            
        },
        header:{
            flexDirection:'row',
            margin: '0%',
            
            
        },
        name:{
            fontWeight: 'bold', 
            fontFamily: 'Roboto',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'left',
            flex: 1,
            textShadowColor:'black',
            textShadowOffset:{width: 2, height: 2},
            textShadowRadius:5,
        },
        price:{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'right',
            flex: 1,
            textShadowColor:'black',
            textShadowOffset:{width: 2, height: 2},
            textShadowRadius:8,
        },
   
});
