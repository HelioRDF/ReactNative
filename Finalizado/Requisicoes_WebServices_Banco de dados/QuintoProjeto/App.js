import React, { Component } from 'react';
import { View, StyleSheet, Button, Text,Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from './src/FirebaseConnection';


window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;
RNFB_ANDROID_PERMISSIONS = true;

export default class ProjetoReact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      caminho:null,
      foto: null,
      pct: 0
    };
    this.pegarFoto = this.pegarFoto.bind(this);
    this.remover = this.remover.bind(this);
  }

  pegarFoto() {
    let options = {
      title: 'Selecione uma Foto'
    }
    ImagePicker.showImagePicker(options, (r) => {
      if (r.uri) {
        let uri = r.uri.replace('file://', '');
        let imagem = firebase.storage().ref().child("Imagens").child(r.fileName);
        
        let mime = 'image/jpeg'

        RNFetchBlob.fs.readFile(uri, 'base64')
          .then((data) => {
            return RNFetchBlob.polyfill.Blob.build(data, { type: mime + ';BASE64' });

          }).then((blob) => {

            imagem.put(blob, { contentType: mime })
              .on('state_changed', (snapshot) => {
                let pct = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes)*100).toFixed(0) ;
                

                let state = this.state;
                state.pct = pct;
                state.caminho=r.fileName;
                this.setState(state);
              
              }, (error) => {
                alert(error.code);
              }, () => {
                imagem.getDownloadURL().then((url)=>{
                  let state = this.state;
                  
                  state.foto = {uri:url};
                  this.setState(state);
                });

                alert("Imagem enviada");
              })

          });

      }
    });
  }

  remover(){

    firebase.storage().ref().child("Imagens").child(this.state.caminho).delete().then(()=>{
        this.setState({
        foto:null
  })
  alert("Imagem removida");
    }).catch((error)=>{
      alert("Error");

    });





    alert("url:"+this.state.caminho);

  }

  render() {

    return (
      <View style={styles.container}>
        <Button title="Pegar Foto" onPress={this.pegarFoto} />
        <Text>{this.state.pct}%</Text>
        <View style={{ width: this.state.pct + '%', height: 40, backgroundColor: '#FF0000' }}  ></View>
          <Image source={this.state.foto} style={styles.foto}></Image>

          <Button title="Remover" onPress={this.remover} />
      </View>
         
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },

  foto: {
    width: 300,
    height: 300
  }
});