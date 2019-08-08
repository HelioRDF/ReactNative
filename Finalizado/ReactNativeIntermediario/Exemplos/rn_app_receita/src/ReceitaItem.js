import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image, StyleSheet } from 'react-native';

export default class ReceitaItem extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress} underlayColor="#CCCCCC">
				<View style={styles.area}>
					<Image resizeMode="contain" source={{uri:this.props.data.imagem}} style={styles.imagem} />
					<View style={styles.areaInfo}>
						<Text style={styles.nome}>{this.props.data.nome}</Text>
						<Text style={styles.info}>{this.props.data.rendimento} porções - {this.props.data.preparo} minutos</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

}

const styles = StyleSheet.create({
	area:{
		flex:1,
		flexDirection:'row',
		height:80,
		borderBottomWidth:1,
		borderColor:'#CCCCCC'
	},
	imagem:{
		width:100,
		height:70,
		marginTop:5,
		marginLeft:10
	},
	areaInfo:{
		flex:1,
		flexDirection:'column',
		justifyContent:'center',
		marginLeft:10,
		marginRight:10
	},
	nome:{
		fontSize:14,
		fontWeight:'bold'
	},
	info:{
		color:'#999999'
	}
});












