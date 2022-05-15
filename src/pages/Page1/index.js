import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

export default function Frases() {
  const [frases, setFrases] = useState([]);
  const [frase, setFrase] = useState();

  var dados = [];
  var pos = 0;

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
    <View style={styles.container}>
      <Button title="carregar frases" onPress={carregaFrases} />
      <Button title="mostrar frases" onPress={escolheFrase} />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={frases}
        renderItem={({item}) => <RenderFrases data={item} />}
      />
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
  quote: {
    marginTop: 30,
  },
});

function RenderFrases(props) {
  return (
    <View>
      <Text style={styles.quote}>{props.data.q}</Text>
    </View>
  );
}
