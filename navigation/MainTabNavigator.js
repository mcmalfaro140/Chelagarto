import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import { Ionicons } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
    createDrawerNavigator,
    createAppContainer,
    SafeAreaView,
    DrawerItems,
} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';



import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import GroupsScreen from '../screens/GroupsScreen';
import SignInScreen from '../screens/SignInScreen';
import FranchiseScreen from '../screens/FranchiseScreen';
import SettingsScreen from '../screens/SettingsScreen';




const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};
HomeStack.path = '';




//Contact
const ContactStack = createStackNavigator(
    {
        Contact: ContactScreen,
    },
    config
);

ContactStack.navigationOptions = {
    tabBarLabel: 'Contact',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};

ContactStack.path = '';



//Franchise
const FranchiseStack = createStackNavigator(
    {
        Franchise: FranchiseScreen,
    },
    config
);

FranchiseStack.navigationOptions = {
    tabBarLabel: 'Franchise',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    ),
};

FranchiseStack.path = '';


//Groups

const GroupsStack = createStackNavigator(
    {
        Groups: GroupsScreen,
    },
    config
);

GroupsStack.navigationOptions = {
    tabBarLabel: 'Groups',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};
GroupsStack.path = '';

//Settings
const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};
SettingsStack.path = '';



const tabNavigator = createBottomTabNavigator({
    HomeStack,
    FranchiseStack,
    ContactStack,
    SettingsStack,
    GroupsStack,
});

tabNavigator.path = '';

export default tabNavigator;
