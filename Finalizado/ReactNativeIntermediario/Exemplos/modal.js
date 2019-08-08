import React, { Component } from 'react';
import { Text, StyleSheet, View, Modal, Button } from 'react-native';


export default class SegundoProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.abrilModal = this.abrilModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  abrilModal() {
    let s = this.state;
    s.modalVisible = true;
    this.setState(s);
  }

  
  fecharModal() {
    let s = this.state;
    s.modalVisible = false;
    this.setState(s);
  }


  render() {
    return (
      <View style={styles.body}>
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={styles.modal}>
            
            <Button title="Fechar Modal" onPress={this.fecharModal}></Button>
            <Text>Testando 1,2,3</Text>
          </View>
        </Modal>

        <Button title="Abril Modal" onPress={this.abrilModal}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  modal:{
    flex:1,
    backgroundColor:'#00ff00',
    paddingTop:40,
    alignItems:'flex-start'

  }
});
