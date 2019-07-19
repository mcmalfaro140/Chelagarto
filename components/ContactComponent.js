import React, { Component } from "react";
import { Select, StyleSheet, Alert, Platform, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import DropdownMenu from "react-native-dropdown-menu";
import HostelContactInfo from "./HostelContactInfo"
import { FlatList } from "react-native-gesture-handler";

let cheHostels = [{ name: "BRASIL SAO PAULO", PHONE: "  (11) 40635633" },
{ name: "BRASIL SAO PAULO", PHONE: "  (11) 40635633" },
{ name: "Argentina", PHONE: "  (11) 40635633" },
{ name: "Uruguay", PHONE: "  (11) 40635633" },
{ name: "Buenos Aires", PHONE: "  (11) 40635633" }];



class ContactComponent extends Component {

    render() {

        return (

            <View>
                <View style={{ backgroundColor: 'powderblue' }}>
                    <Text style={{ alignSelf: "center", padding: 20 }}>
                        CONTACT US CHE LAGARTO HOSTELS
                    </Text>
                    <FlatList
                        style={{ alignSelf: "center", padding: 10 }}

                        data={cheHostels}
                     
                        renderItem={({ item }) => (


                            <Text>{item.name}{item.PHONE}</Text>




                        )}
                    />
                </View>


                <View>


                    <HostelContactInfo />

                </View>


                <View>
                    <Text>
                        Hostel:
                    </Text>
                </View>




            </View>

        );
    }
}

export default ContactComponent;