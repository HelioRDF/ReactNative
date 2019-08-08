import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {
			valor:false
		};
	}

	render() {

		return (
			<View style={styles.body}>
				<Switch thumbTintColor="#0000FF" onTintColor="#FF0000" value={this.state.valor} onValueChange={(v)=>this.setState({valor:v})} />

				<Text>{(this.state.valor)?"Selecionado":"Não selecionado"}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		flex:1
	}
});















