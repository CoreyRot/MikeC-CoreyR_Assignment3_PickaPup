import { createBottomTabNavigator } from 'react-navigation-tabs';
import Dog from './Screens/Dog';
import Contact from './Screens/Contact';
import Profile from './Screens/Profile';
import Match from './Screens/Match';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { StackNavigator } from 'react-navigation';


class ProfileScreen extends React.Component {
  render() {
    return (
      
      <Profile></Profile>
    );
  }
}



class DogScreen extends React.Component {
  render() {
    return (
      <Dog></Dog>
    );
  }
}

class MatchScreen extends React.Component {
  render() {
    return (
      <Match></Match>
    );
  }
}

class ContactScreen extends React.Component {
  render() {
    return (
     <Contact></Contact>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Profile: ProfileScreen,
  Dogs: DogScreen,
  Match: MatchScreen,
  Contact: ContactScreen,
});

export default createAppContainer(TabNavigator);