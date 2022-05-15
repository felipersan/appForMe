import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';

export default function Frases() {
  const [frases, setFrases] = useState([]);
  const [frase, setFrase] = useState();
  const [background, setBacground] = useState({
    uri: 'https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  });

  var dados = [];

  async function carregaFrases() {
    const api_url = 'https://zenquotes.io/api/quotes ';

    async function getapi(url) {
      const response = await fetch(url);
      dados = await response.json();
      setFrases(dados);
      console.log(dados);
      alert('puxou');
    }

    getapi(api_url);
  }

  return (
    <View style={styles.container} back>
      <ImageBackground source={background}>
        <Button title="carregar frases" onPress={carregaFrases} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={frases}
          renderItem={({item}) => <RenderFrases data={item} />}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  frase: {
    color: '#fff',
  },
  quotecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 650,
    marginRight: 15,
  },
  quote: {
    fontSize: 35,
    marginLeft: 8,
    marginRight: 8,
  },
});

function RenderFrases(props) {
  return (
    <View style={styles.quotecontainer}>
      <Text style={styles.quote}>{props.data.q}</Text>
    </View>
  );
}
