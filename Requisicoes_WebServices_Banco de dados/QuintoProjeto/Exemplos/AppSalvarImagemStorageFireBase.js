import React, { Component } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
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
      foto: null
    };
    this.pegarFoto = this.pegarFoto.bind(this);
  }

  pegarFoto() {
    let options = {
      title: 'Selecione uma Foto'
    }
    ImagePicker.showImagePicker(options, (r) => {
      if (r.uri) {
        let uri = r.uri.replace('file://', '');
        let imagem = firebase.storage().ref().child(r.fileName);
        let mime = 'image/jpeg'

        RNFetchBlob.fs.readFile(uri, 'base64')
          .then((data) => {
            return RNFetchBlob.polyfill.Blob.build(data, { type: mime + ';BASE64' });
          }).then((blob) => {

            imagem.put(blob, { contentType: mime })
              .then(() => {
                blob.close();
                //	alert("Terminou o processo");

                //URL da Imagem
                let url = imagem.getDownloadURL();

              }).catch((error) => {
                alert(error.code);
              });
          });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Pegar Foto" onPress={this.pegarFoto} />
        <Image source={this.state.foto} style={styles.foto} />

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