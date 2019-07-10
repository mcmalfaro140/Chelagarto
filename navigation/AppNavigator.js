import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  SafeAreaView,
  DrawerItems,
} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import GroupsScreen from '../screens/GroupsScreen';
import FranchiseScreen from '../screens/FranchiseScreen';
import SettingsScreen from '../screens/SettingsScreen';


class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 15 }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Ionicons
            name="md-menu"
            color='white'
            size={28}

          />

        </TouchableOpacity>

      </View>
    );
  }
}

class LogInStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', marginRight: 15 }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <FontAwesome
            name="user-circle-o"
            color="white"
            size={28}

          />

        </TouchableOpacity>

      </View>
    );
  }
}



const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <LogInStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'black',
        textAlig: 'center'

      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: GroupsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Groups',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <LogInStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'black',

      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: ContactScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <LogInStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',

    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen4 will be indexed here
  Third: {
    screen: FranchiseScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Franchise',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <LogInStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',

    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen5 will be indexed here
  Third: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <LogInStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',

    }),
  },
});

const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Screen6 will be indexed here
  Third: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <LogInStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',

    }),
  },
});

//Layout for the menu
const menuLayout = (props) => (

  <SafeAreaView style={{ flex: 1 }}>
    <LinearGradient colors={['#FDD819', '#E80505']} style={{ flex: 1 }}>
      <View style={{ height: 95, margin: 5, paddingLeft: 35, paddingTop: 75, paddingBottom: 20 }}>
        <Image source={require('../assets/images/logo_clh.png')} style={{ resizeMode: 'contain', padding: 5 }}></Image>
        <Text style={{ color: 'white', fontSize: 25 }}>Let's Travel More</Text>
      </View>

      <ScrollView style={{ paddingTop: 100 }}>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Image source={require('../assets/images/icon_facebook.png')} style={{ margin: 10 }}></Image>
        <Image source={require('../assets/images/icon_instagram.png')} style={{ margin: 10 }}></Image>
        <Image source={require('../assets/images/icon_pinterest.png')} style={{ margin: 10 }}></Image>
      </View>
    </LinearGradient>
  </SafeAreaView>

)

//creates the drawer and adds the icon elements
const DrawerNavigator = createDrawerNavigator({
  //Drawer Options and indexing
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => (
        <Ionicons name="ios-home" size={20} />
      )

    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Groups',
      drawerIcon: () => (
        <FontAwesome name="group" size={20} />
      )
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contact',
      drawerIcon: () => (
        <FontAwesome name="phone" size={20} />
      )
    },
  },
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Franchise',
      drawerIcon: () => (
        <Ionicons name="md-business" size={20} />
      )
    },
  },
  Screen5: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: () => (
        <Ionicons name="md-settings" size={20} />
      )
    },
  },
  Screen6: {
    //Title
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Language',
      drawerIcon: () => (
        <FontAwesome name="language" size={20} />
      )
    },
  },



}, {
    //It will create the layout of me drawer menu
    contentComponent: menuLayout
  });

// export default createAppContainer(DrawerNavigator);
const AppContainer = createAppContainer(DrawerNavigator);

export default class AppNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}