import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Frases from '../pages/Page1';
import User from '../pages/user';
import Setting from '../pages/config';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BottomTab = createBottomTabNavigator();

export default function RoutesTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="cogs" color="#121212" size={20} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Frases"
        component={Frases}
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="leaf" color="#121212" size={20} />;
          },
        }}
      />
      <BottomTab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="user" color="#121212" size={20} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
