import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import Frases from './src/pages/Page1';
import RoutesTabNavigator from './src/Routes';

import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <RoutesTabNavigator />
    </NavigationContainer>
  );
}
