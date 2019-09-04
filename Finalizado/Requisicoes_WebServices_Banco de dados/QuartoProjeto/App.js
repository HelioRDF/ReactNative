import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import firebase from './src/FirebaseConnection';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';


window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;


export default class ProjetoReact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			foto: null,
			pct:0
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
				let imagem = firebase.storage().ref().child('imagem.jpg');
				let mime = 'image/jpeg'

				RNFetchBlob.fs.readFile(uri, 'base64').then(() => {
					return RNFetchBlob.polyfill.Blob.build(data, { type: mime + ';BASE64' });
				}).then((blob) => {

					imagem.put(blob, { contentType: mime }).on('state_changed', (snapshot) => {
						let pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						pct= Math.floor(pct);
						let state = this.state;
						state.pct=pct;
						this.setState(state);
					},(error)=>{
							alert('Erro: '+error.code);
						},()=>{
							let url = imagem.getDownloadURL();
							alert("Imagem Carregada com sucesso");
						
					})
				});
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Button title="Pegar Foto" onPress={this.pegarFoto} />
				<Text>{this.state.pct}%</Text>
				<View style={{width:this.state.pct +'%',height:40, backgroundColor:'#FF0000'}} />
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