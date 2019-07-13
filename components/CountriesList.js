import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import DropdownMenu from 'react-native-dropdown-menu';


class CountriesList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         text: ''
      };
   }

   render() {
      var data = [["Argentina", "Chile", "Brazil", "Paraguay"]];
      return (
         <View >
            <View style={{ height: 14 }} />
            <Text>
               Choose a destination
            </Text>
            <DropdownMenu

               bgColor={'white'}
               tintColor={'#666666'}
               activityTintColor={'green'}

               handler={(selection, row) => this.setState({ text: data[selection][row] })}
               data={data}
            >

               <View style={{ flex: 1 }}>
                  <Text>
                     You selected: {this.state.text}
                  </Text>
               </View>

            </DropdownMenu>
         </View>
      );
   }



}
export default CountriesList




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