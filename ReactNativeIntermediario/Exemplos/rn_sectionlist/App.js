import React, { Component } from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {
			listData:[
				{title:'B', data:[
					{key:'1', nome:'Bonieky', idade:90}
				]},
				{title:'C', data:[
					{key:'2', nome:'Cláudio', idade:23},
					{key:'3', nome:'Cleberson', idade:34},
					{key:'4', nome:'Curioso', idade:26}
				]},
				{title:'D', data:[
					{key:'5', nome:'Dantas', idade:78},
					{key:'6', nome:'Diverson', idade:45},
					{key:'7', nome:'Daniel', idade:38}
				]}
			]
		};
	}

	listSectionRender(section) {
		return (
			<Text style={styles.section}>Letra {section.title}</Text>
		);
	}

	listRender(item) {
		return (
			<Text style={styles.item}>{item.nome} - {item.idade} anos</Text>
		);
	}

	render() {
		return (
			<View style={styles.body}>
				<SectionList sections={this.state.listData} renderItem={({item})=>this.listRender(item)} renderSectionHeader={({section})=>this.listSectionRender(section)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		flex:1
	},
	item:{
		fontSize:18,
		height:40,
		padding:10
	},
	section:{
		fontSize:14,
		backgroundColor:'#CCCCCC',
		padding:10
	}
});















