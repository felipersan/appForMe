import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Frases from '../pages/Page1';
import PrincipalPage from '../pages/PrincipalPage';

const Stack = createStackNavigator();

export default function StackPages() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={PrincipalPage} />
      <Stack.Screen name="Frases" component={Frases} />
    </Stack.Navigator>
  );
}
