import React, { Component } from 'react';
import { View, StyleSheet,Button,Image } from 'react-native';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';

export default class ProjetoReact extends Component {

	constructor(props) {
		super(props);
		this.state={
			foto:null
		};
		this.pegarFoto = this.pegarFoto.bind(this);
	}

	pegarFoto(){
		let options={
			title:'Selecione uma Foto'
		}
		ImagePicker.showImagePicker(options, (r)=>{
			if(r.uri){
				let foto = {uri:r.uri};
				let state = this.state;
				state.foto=foto;
				this.setState(state);
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Button title="Pegar Foto" onPress={this.pegarFoto} />
				<Image source={this.state.foto} style={styles.foto}/>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	},
foto:{
	width:300,
	height:300
}
});