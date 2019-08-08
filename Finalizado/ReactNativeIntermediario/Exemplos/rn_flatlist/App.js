import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {
			flatData:[
				{key:"1", nome:'Bonieky', idade:90, type:'foto'},
				{key:"2", nome:'Paulo', idade:20, type:'video'},
				{key:"3", nome:'Pedro', idade:53, type:'text'},
				{key:"4", nome:'Ricardo', idade:70, type:'foto'}
			]
		};
	}

	flatRender(item) {
		return (
			<View style={styles.flatItem}>
				<Text style={styles.flatNome}>{item.type} - {item.nome}</Text>
				<Text style={styles.flatIdade}>{item.idade} anos</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.body}>
				<FlatList data={this.state.flatData} renderItem={({item}) => this.flatRender(item)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		flex:1
	},
	flatItem:{
		padding:10,
		borderWidth:1,
		borderColor:'#000000'
	},
	flatNome:{
		fontSize:26
	},
	flatIdade:{
		fontSize:14
	}
});















