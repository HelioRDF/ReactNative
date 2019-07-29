import React, { Component } from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';

export default class PrimeiroProjeto extends Component {

  somar(n1, n2) {
    return n1 + n2;
  }

  render() {
    let nome = "Helio Franca";
    return (

      <View>
        <Text style={styles.texto}>Olá Mundo {nome}</Text>

       <Button title="Aperte" onPress={
         ()=>{
           alert("Clicou!!!");
         }
       }>

       </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  texto: { fontSize: 30 }
});
