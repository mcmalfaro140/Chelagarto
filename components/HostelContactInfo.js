import React, { Component } from "react";
import { Select, StyleSheet, Alert, Platform, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import DropdownMenu from "react-native-dropdown-menu";
import { Button, FlatList, ListItemList, List, } from "react-native-elements";


let hostels = [{ name: 'Hostel Buzios', add: "123 s florida", phone: "123 4567777", email: "hello@gmail.com" },
{ name: 'Hostel Lima', add: "123 s florida", phone: "123 4567777", email: "hello@gmail.com" },
{ name: 'bbbbb', add: "123 s florida", phone: "123 4567777", email: "hello@gmail.com" },
{ name: 'ccccc', add: "123 s florida", phone: "123 4567777", email: "hello@gmail.com" },
{ name: 'ddddd', add: "123 s florida", phone: "123 4567777", email: "hello@gmail.com" },
{ name: 'ddddd', add: "123 s florida", phone: "123 4567777", email: "hello@gmail.com" },
{ name: 'ddddd', add: "123 s florida", phone: "123 4567777", email: "hello@gmail.com" },
{ name: 'Hostel Blue', add: "123 s florida", phone: "123 4567777", email: "hello@gmail.com" }];



class HostelContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            // <ScrollView style={{ alignSelf: "center", padding: 20 }}>
            //     <Text>
            //         SELECT THE HOSTAL YOU WANT TO CONTACT
            //     </Text>

            //     <FlatList style={{ alignSelf: "center", padding: 20 }}
            //         data={hostels}
            //         renderItem={({ item }) => (


            //             <Text>{item.name}</Text>

            //         )}
            //     />
            //     <Text>

            //     </Text>

            // </ScrollView>
            <List>
                <FlatList

                />

            </List>
        );
    }
}

export default HostelContactInfo;