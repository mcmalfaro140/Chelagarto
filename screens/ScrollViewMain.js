import React, { Component } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Calendar from './calendar';
//import Calendar from './Calendar.js';

//import { DatePicker } from 'react-native-datepicker-modal';


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

         <View style={{ width: 250, alignSelf: 'center' }}>
            <Dropdown
               label='Choose a City or Country'
               data={cities}
            />
            <View>
               <Calendar /><Calendar/>
            </View>
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