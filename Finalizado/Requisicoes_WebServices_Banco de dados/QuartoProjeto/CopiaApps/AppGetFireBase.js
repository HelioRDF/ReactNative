import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from 'firebase';


export default class Projeto extends Component {

	
	constructor(props) {
		super(props);
		this.state = {};
		console.disableYellowBox = false;
		// Your web app's Firebase configuration
		var firebaseConfig = {
			apiKey: "AIzaSyC8ZDSSG_YthxneZdodbQbL4WinOkLDxV4",
			authDomain: "reactnativeheliofranca.firebaseapp.com",
			databaseURL: "https://reactnativeheliofranca.firebaseio.com",
			projectId: "reactnativeheliofranca",
			storageBucket: "reactnativeheliofranca.appspot.com",
			messagingSenderId: "735342068144",
			appId: "1:735342068144:web:57e4b151f3816977"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);

		//Atualização automatica
		// 	 Para Atualizar uma vez = firebase.database().ref("aline/idade").once('value').then((snapshot)=>{
		// Para Atualizar automaticamente = firebase.database().ref("aline/idade").on('value',(snapshot)=>{
			firebase.database().ref("aline/idade").once('value').then((snapshot)=>{
			let state = this.state;
			state.nome = snapshot.val();
			this.setState(state);
		}
		
		
		);
	}

	
	render() {
		return (
			<View style={styles.container}>
				<Text>Nome:</Text>
				
				<Text>{this.state.nome}</Text>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	},
});






