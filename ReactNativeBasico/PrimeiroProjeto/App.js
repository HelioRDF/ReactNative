import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image, Alert } from 'react-native';
import { ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS } from 'expo-intent-launcher';

//Meu Props
class TextoAleatorio extends Component {
  constructor(props) {
    super(props);
    this.state = { comida: 'XXX' };
    var comidas = ['Arroz', 'Feijão', 'Batata', 'Frango'];

    setInterval(
      () => {
        this.setState(previousState => {
          var n = Math.floor(Math.random() * comidas.length);
          return { comida: comidas[n] };
        });
      }, 2000
    );



  }
  render() {
    return (
      <View>
        <Text>Texto Aleatorio:</Text>
        <Text>{this.state.comida}</Text>
      </View>
    );
  }
}

//Minha Props 01
class Imagem extends Component {
  render() {
    let imagem = {
      uri: 'https://www.bianobrega.com.br/wp-content/uploads/2019/01/' + this.props.nome
    };
    return (
      <Image source={imagem} style={{ width: parseInt(this.props.largura), height: parseInt(this.props.altura) }} />
    );
  }
}

//Minha Props 02
class MeuTexto extends Component {

  render() {
    return (
      <Text style={{ fontSize: 22, color: 'blue', marginTop: 40 }}>Olá </Text>
    );
  }
}

export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = { texto02:'',texto: 'Oi' , inputTexto:''};
    this.mudarTexto = this.mudarTexto.bind(this);
    this.apertouBotao = this.apertouBotao.bind(this);
  }

  mudarTexto(txt) {
    let stateAux = this.state;
    stateAux.texto='Olá, '+txt;
    this.setState(stateAux);
  }
  somar(n1, n2) {
    return n1 + n2;
  }

  apertouBotao(){
    let s=this.state;
    s.texto02 = s.inputTexto;
    this.setState(s);
  }

  render() {
    let nome = "Helio Franca";

    return (
      <View style={{ flex: 1 }}>

        <MeuTexto />
        <Text style={styles.textoAzul}>{nome}</Text>
        <TextInput style={styles.input} placeholder="Nome do usuário" onChangeText={this.mudarTexto} />
        <Text style={styles.textoAzul}>{this.state.texto}</Text> 

        <TextInput style={styles.input} placeholder="Nome do usuário"  onChangeText={(inputTexto)=>this.setState({inputTexto})} />
        <Button onPress={this.apertouBotao} title="Aperte aqui"></Button>
        <Text style={styles.textoAzul}>{this.state.texto02}</Text>

        <TextoAleatorio />
        <Imagem nome='capa-test.jpg' largura='150' altura='150' />
        <Button title="Aperte" onPress={
          () => {
            Alert.alert("Clicou!!! " + this.somar(1, 3));
          }
        }>
        </Button>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-end", alignItems: 'center' }}>
          <View style={{ backgroundColor: 'black', height: 50, width: 50 }}></View>
          <View style={{ backgroundColor: 'red', height: 50, width: 50 }}></View>
          <View style={{ backgroundColor: 'blue', height: 50, width: 50 }}></View>
        </View>
      </View>


    );
  }

}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30
  },

  textoAzul: {
    fontSize: 22,
    color: 'blue',
    textAlign: 'center'
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    padding: 10
  }

});
