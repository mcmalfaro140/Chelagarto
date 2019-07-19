
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';

import ContactComponent from '../components/ContactComponent';
import CountriesList from '../components/CountriesList';

export default function ContactScreen() {
    return (
        <ImageBackground source={require('../assets/images/bg_contacto.jpg')} style={styles.containerImage}>
            <ScrollView>
                <View>
                    <ContactComponent />
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        // width: '100%', 
        height: '100%',
        marginTop: '0%'



    }
})

