import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, FlatList } from 'react-native';
import firebase from 'firebase';


export default class ProjetoReact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			senha: '',
			uid: '',
			lista:[],
			addItemTxt:''

		};
		// Your web app's Firebase configuration
		var firebaseConfig = {
			apiKey: "AIzaSyBvde_z-0LVqCJ3iFwrZlVaor2uaSoQEZM",
			authDomain: "hardy-operator-147521.firebaseapp.com",
			databaseURL: "https://hardy-operator-147521.firebaseio.com",
			projectId: "hardy-operator-147521",
			storageBucket: "hardy-operator-147521.appspot.com",
			messagingSenderId: "22207110163",
			appId: "1:22207110163:web:a304dafbaa551112"
		};
		this.add = this.add.bind(this);
		this.logar = this.logar.bind(this);
		this.sair = this.sair.bind(this);

		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		firebase.auth().signOut();

		firebase.auth().onAuthStateChanged((user) => {

			if (user) {

				let state = this.state;
				state.uid = user.uid;
				this.setState(state);

				firebase.database().ref('usuarios').child(user.uid).once('value').then((snapshot) => {
					let nome = snapshot.val().nome;
					alert("Seja Bem Vindo(a), " + nome);
				});

				firebase.database().ref('todo').child(user.uid).on('value', (snapshot) => {
					let state = this.state;
					state.lista = [];
					snapshot.forEach((childItem) => {
						state.lista.push({
							titulo: childItem.val().titulo,
							key: childItem.key,

						});


					});

					this.setState(state);
				});


				alert("Login true")
			} else {
				alert("login false")
			}
		});

	}

	logar() {
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).catch((error) => {
			switch (error.code) {
				case 'auth/invalid-email':
					alert("Informações inválidas");
					break;

				case '2':
					alert("msg");
					break;

				case '3':
					alert("msg");
					break;

				default:
					alert("Error:" + error.code);
					break;
			}
		});

			}
	sair() {
		firebase.auth().signOut();
		alert("Saiu...");

	}
	add() {
		if (this.state.uid != '' && this.state.addItemTxt != '') {

			let todo = firebase.database().ref('todo').child(this.state.uid);
			let chave = todo.push().key;

			todo.child(chave).set({
				titulo: this.state.addItemTxt

			});


		}
	}


	render() {
		return (
			<View style={styles.container}>
				<Text>E-mail</Text>
				<TextInput onChangeText={(email) => this.setState({ email })} style={styles.input} />

				<Text>Senha</Text>
				<TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({ senha })} style={styles.input} />

				<Button title='Logar' onPress={this.logar} />
				<Button title='sair' onPress={this.sair} />

				<View style={styles.addArea}>
					<Text>Adicionar</Text>
					<TextInput value={this.state.addItemTxt} onChangeText={(addItemTxt) => this.setState({addItemTxt})} style={styles.input} />
					<Button title="Adicionar" onPress={this.add}></Button>

				</View>

				<FlatList
					data={this.state.lista} renderItem={({ item }) => <Text>{item.titulo}</Text>} />
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
		borderColor: '#000',
		margin: 10
	},

	addArea: {
		borderWidth: 1,
		borderColor: '#000',
		padding: 5,

	},
	lista: {
		backgroundColor: '#ff0000'
	}
});