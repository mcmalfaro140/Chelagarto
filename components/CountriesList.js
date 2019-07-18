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
      // var data = [["Argentina", "Chile", "Brazil", "Paraguay", "Misael"]];
      let data = [{
         value: 'Argentina',
       }, {
         value: 'Chile',
       }, {
         value: 'Brazil',
       },{
         value: 'Paraguay',
       }, {
         value: 'Misael',
       },{
         value: 'Veronica',
       }, {
         value: 'Brazil',
       }];
      return (
         <View style={{flex: 1,}}>
            
            <Dropdown  
                  style={styles.container}
                  
                  // bgColor={'white'}
                  // tintColor={'#666666'}
                  // activityTintColor={'green'}
                   
                  // handler={(selection, row) => this.setState({ text: data[selection][row] })}
                  data={data}
               >
               </Dropdown>
         </View>
            

            
           
        
      );
   }



}
export default CountriesList

const styles = StyleSheet.create({
   container: {
      height: '130%',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, .75)',
      margin: 0,
      padding: 0,
      marginTop: -30,
      borderRadius: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginEnd: '-10%',
      
      
     
   }
})