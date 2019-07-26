import React from 'react';
import { Rating} from 'react-native-elements';
import {
    Text,
    Image,
    Button,
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';

class SearchComp extends React.Component {
    render() {
        return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{fontSize: 25,fontWeight: 'bold', fontFamily: 'Roboto', color: 'black',}}>Hostel Bonito</Text>
                        <Text style={styles.price}>From $21.23</Text>
                    </View>
                    
                    <View style={styles.div}>
                        <View>
                            <Image source={require('../assets/images/bonito.jpg')} style={styles.img}></Image>
                        </View>
                        <View style={styles.description}>
                            <Text>Located in Antonio Alle, 77, Bonito. </Text>
                            <View style={{flex: 1, margin: 0, padding: 0}} >
                                <Rating style={{alignSelf: 'flex-start'}} imageSize={20} readonly ratingCount={5} startingValue={5} /><Text>100% Recomend us</Text>
                            </View>
                            <View style={{flex: 1, paddingTop: 7}}>
                                <Text style={{color: 'red', fontSize: 12}}>There are 9 people looking at this right now.</Text>
                            </View>
                            <View style={{flex: 1, marginTop: '5%'}}>
                                <Button title='Book Now'></Button>
                            </View>
                            
                        </View>
                    </View>
                </SafeAreaView>
                );
    }
  
  }

  export default SearchComp;

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: 'white',
        margin: '2%',
        marginBottom: '1%',
        padding: 10,
        paddingBottom: '2%',
        borderWidth: 1,
        borderColor: '#F5F5F5',
        shadowColor: '#F8F8FF',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
       


    },
    header:{
        
        borderColor: 'black',
        borderBottomWidth: 1,
        flexDirection:'row'
       
    },
    div:{
        flexDirection: 'row',
        flex: 1,
    },
    img:{
        flex: 1,
        width: 100,
        height: 100,
        margin: '1%',
        marginTop: '5%'
        
        
    },
    description:{
        marginTop: '1%',
        flex: 1,
    },
    price:{
        color: 'green',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'right',
        flex: 1,
        
        
    }
});
