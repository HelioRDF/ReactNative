import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList } from 'react-native';
import ListItem from './src/ListItem';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list:[
				{key:'1', img:'https://www.b7web.com.br/avatar1.png', nome:'Bonieky Lacerda', msg:'Quando sai novas aulas?'},
				{key:'2', img:'https://www.b7web.com.br/avatar2.png', nome:'José Medeiros', msg:'Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem?'},
				{key:'3', img:'https://www.b7web.com.br/avatar3.png', nome:'Mãe', msg:'Filho, etc e tal..'},
				{key:'4', img:'https://www.b7web.com.br/avatar2.png', nome:'Augusto Santos', msg:'Oi'},
				{key:'5', img:'https://www.b7web.com.br/avatar3.png', nome:'Aline Gonçalves', msg:'Xau'},
				{key:'6', img:'https://www.b7web.com.br/avatar1.png', nome:'Paulo Duarte', msg:'Ok'},
			]
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.list}
					renderItem={({item})=> <ListItem data={item} />}
				/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:(Platform.OS=='ios') ? 20 : 0
	}
});




