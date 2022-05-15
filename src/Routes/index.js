import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Frases from '../pages/Page1';
import User from '../pages/user';
import Setting from '../pages/config';

const BottomTab = createBottomTabNavigator();

export default function RoutesTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Setting" component={Setting} />
      <BottomTab.Screen name="Frases" component={Frases} />
      <BottomTab.Screen name="User" component={User} />
    </BottomTab.Navigator>
  );
}
