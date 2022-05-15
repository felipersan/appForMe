import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

export default function Frases() {
  const [frases, setFrases] = useState([]);
  const [frase, setFrase] = useState();
  const [position, setPosition] = useState();

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

  function escolheFrase() {
    pos = Math.floor(Math.random() * frases.length);
    phrase = frases[pos].q;
    setFrase(phrase);
    console.log(pos);
  }

  return (
    <View>
      <Button title="carregar frases" onPress={carregaFrases} />
      <Button title="mostrar frases" onPress={escolheFrase} />

      <Text>{frase}</Text>
      <Text>{position}</Text>
    </View>
  );
}
