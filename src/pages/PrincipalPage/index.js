import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function PrincipalPage() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Principal page</Text>
      <Button
        title="ir para as frases"
        onPress={() => {
          navigation.navigate('Frases');
        }}
      />
    </View>
  );
}
