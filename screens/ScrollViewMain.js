import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, Button, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


class ScrollViewMain extends Component {
   render() {
      let cities = [{
         value: 'Buenos Aires',
      }, {
         value: 'Chile',
      }, {
         value: 'Brazil',
      }];

      return (

         <View>
            <Dropdown
               label='Choose a City or Country'
               data={cities}
            />
            <View style={{ width: 150, alignSelf: 'center' }}>
               <Button title='Search'>Search</Button>
            </View>

         </View>

      );
   }

}
export default ScrollViewMain




const styles = StyleSheet.create({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})