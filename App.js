import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import ScanScreen from './Screens/ScanScreen';

export default class App extends React.Component {
  render() { 
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  ScanScreen:ScanScreen
});

const AppContainer = createAppContainer(AppNavigator);
