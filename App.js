import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReadScreen from './screens/ReadScreen'
import WriteScreen from './screens/WriteScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer />
  );
  }
}

const TabNavigator= createBottomTabNavigator({
Write:{screen:WriteScreen},
Read:{screen:ReadScreen}
})


const AppContainer=createAppContainer(TabNavigator)

