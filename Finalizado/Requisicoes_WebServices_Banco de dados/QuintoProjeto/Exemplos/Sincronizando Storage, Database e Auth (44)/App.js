import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, FlatList } from 'react-native';
import firebase from './src/FirebaseConnection';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import Usuario from './src/Usuario';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formAvatar:null,
      formNome:'',
      formEmail:'',
      formSenha:'',
      formPct:'',
      userUid:0,
      lista:[]
    };

    this.cadastrar = this.cadastrar.bind(this);
    this.carregarFoto = this.carregarFoto.bind(this);
    this.saveAvatar = this.saveAvatar.bind(this);
    this.saveUser = this.saveUser.bind(this);

    firebase.auth().signOut();

    firebase.database().ref('users').on('value', (snapshot)=>{

      let state = this.state;
      state.lista = [];

      snapshot.forEach((child)=>{
        state.lista.push({
          key:child.key,
          name:child.val().name,
          email:child.val().email
        });
      });

      this.setState(state);

    });

  }

  carregarFoto() {

    ImagePicker.showImagePicker({}, (r)=>{
      if(r.uri) {

        let state = this.state;
        state.formAvatar = {uri:r.uri};
        this.setState(state);

      }
    });

  }

  saveAvatar() {
      
    let uri = this.state.formAvatar.uri.replace('file://', '');
    let avatar = firebase.storage().ref().child('users').child(this.state.userUid+'.jpg');
    let mime = 'image/jpeg';

    RNFetchBlob.fs.readFile(uri, 'base64')
    .then((data)=>{
      return RNFetchBlob.polyfill.Blob.build(data, {type:mime+';BASE64'});
    })
    .then((blob)=>{

      avatar.put(blob, {contentType:mime})
      .on('state_changed', (snapshot)=>{

        let pct = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        let state = this.state;
        state.formPct = pct+'%';
        this.setState(state);

      },
      (error)=>{
        alert(error.code);
      },
      ()=>{

        this.saveUser();

      });

    });

  }

  saveUser() {

    if(this.state.userUid != 0) {
      firebase.database().ref('users').child(this.state.userUid).set({
        name:this.state.formNome,
        email:this.state.formEmail
      });

      let state = this.state;
      state.formAvatar = null;
      state.formNome = '';
      state.formEmail = '';
      state.formSenha = '';
      state.formPct = '';
      state.userUid = 0;
      this.setState(state);

      firebase.auth().signOut();

      alert("usuário inserido com sucesso!");

    }

  }

  cadastrar() {
    if(this.state.formAvatar != null &&
      this.state.formNome != '' &&
      this.state.formEmail != '' &&
      this.state.formSenha != '') {

      firebase.auth().onAuthStateChanged((user)=>{
        if(user) {
          let state = this.state;
          state.userUid = user.uid;
          this.setState(state);

          this.saveAvatar();
        }
      });

      firebase.auth().createUserWithEmailAndPassword(
        this.state.formEmail,
        this.state.formSenha
      ).catch((error)=>{
        alert(error.code);
      });

    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cadastroArea}>
          <Text>Cadastre Um Novo Usuário</Text>
          <View style={styles.form}>
            <View style={styles.formInfo}>
              <Image source={this.state.formAvatar} style={styles.formAvatar} />
              <Button title="Carregar" onPress={this.carregarFoto} />
              <Text>{this.state.formPct}</Text>
            </View>
            <View style={styles.formInfo}>
              <TextInput style={styles.input} placeholder="Digite o nome" value={this.state.formNome} onChangeText={(formNome)=>this.setState({formNome})} />
              <TextInput style={styles.input} placeholder="Digite o e-mail" value={this.state.formEmail} onChangeText={(formEmail)=>this.setState({formEmail})} />
              <TextInput style={styles.input} secureTextEntry={true} placeholder="Digite a senha" value={this.state.formSenha} onChangeText={(formSenha)=>this.setState({formSenha})} />
            </View>
          </View>
          <Button title="Cadastrar" onPress={this.cadastrar} />
        </View>

        <View style={styles.listaArea}>
          <FlatList
            data={this.state.lista}
            renderItem={({item})=> <Usuario data={item} />}
          />
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20
  },
  cadastroArea:{
    height:240,
    backgroundColor:'#EEEEEE',
    margin:10,
    padding:10
  },
  form:{
    flex:1,
    flexDirection:'row'
  },
  formAvatar:{
    width:100,
    height:100,
    backgroundColor:'#CCCCCC'
  },
  formInfo:{
    flex:1,
    flexDirection:'column'
  },
  input:{
    height:40,
    borderWidth:1,
    borderColor:'#000000',
    margin:5
  },
  listaArea:{
    flex:1,
    backgroundColor:'#EEEEEE',
    margin:10
  }
});


















