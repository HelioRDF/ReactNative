import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,Button } from 'react-native';
import firebase from 'firebase';


export default class ProjetoReact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nomeInput: '',
			idadeInput: ''
		};

		var firebaseConfig = {
			apiKey: "AIzaSyBgPIZdqJpIR59-XpK-n2ibrOp6VRafELw",
			authDomain: "testereact-f1f21.firebaseapp.com",
			databaseURL: "https://testereact-f1f21.firebaseio.com",
			projectId: "testereact-f1f21",
			storageBucket: "",
			messagingSenderId: "242612076354",
			appId: "1:242612076354:web:2e4029c19e09485d"
		  };
		  // Initialize Firebase
		  firebase.initializeApp(firebaseConfig);
		  this.inserirUsuario = this.inserirUsuario.bind(this);

		  //Alterar		  
		  firebase.database().ref('usuarios').child('2').child('Nome').set('Helio Franca');

		  //Excluir
		  firebase.database().ref('usuarios').child('2').child('Nome').remove();

		   //inserir		  
		   firebase.database().ref('usuarios').child('3').child('Nome').set('Helio Franca');

	}

	inserirUsuario(){
		if(this.state.nomeInput.length > 0){
			let usuarios = firebase.database().ref('usuarios');
			let chave = usuarios.push().key;

			usuarios.child(chave).set({
				nome:this.state.nomeInput,
				idade:this.state.idadeInput
			});
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Nome:</Text>
				<TextInput style={styles.input} onChangeText={(nomeInput) => this.setState({ nomeInput })} />
				<Text>Idade:</Text>
				<TextInput style={styles.input} onChangeText={(idadeInput) => this.setState({ idadeInput })} />
				<Button title="Inserir" onPress={this.inserirUsuario} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	},

	input: {
		height: 40,
		borderWidth: 1,
		borderColor: '#FF0000'
	}
});