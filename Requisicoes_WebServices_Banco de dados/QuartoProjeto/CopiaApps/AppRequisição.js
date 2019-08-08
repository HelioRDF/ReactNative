import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading:true
    };

    // Faz uma requisição.
    fetch('https://filmespy.herokuapp.com/api/v1/filmes')
      .then((r) => r.json())
      .then((json) => {
        let state = this.state;
        state.filmes = json.filmes;
        state.loading=false;
        this.setState(state);
      });
  }

  render() {
    if(this.state.loading){
      return(
        <View style={[styles.container, styles.loading]}>
          <Text style={styles.loadingTxt}> Carregando...</Text>
        </View>
      );

    }else{
      return (
        <View>
          <FlatList data={this.state.filmes}
            renderItem={({ item }) => <Filme data={item} />}
            keyExtractor={(item, index) => item.link}
          />
        </View>
  
      );

    }

  }

}

class Filme extends Component {
  render() {
    return (
      <View style={styles.filmeArea}>
        <Image source={{ uri: this.props.data.poster.replace('http:', 'https:') }} style={styles.filmeImagem} />
        <View style={styles.filmeInfo}>
          <Text style={styles.filmeNome}>{this.props.data.genero}</Text>
          <Text>{this.props.data.data}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  filmeArea: {
    flex: 1,
    flexDirection: 'row',
    margin:10
  },
  filmeImagem: {
    width: 80,
    height: 110
  },
  filmeInfo: {
    flex:1,
    flexDirection:'column',
    marginLeft:10
  },
  filmeNome: {
    fontSize:18,
    fontWeight:'bold'
  },
  loading:{
    justifyContent:'center',
    alignItems:'center'
  },
  loadingTxt:{
    fontSize:18    
  }

}
);