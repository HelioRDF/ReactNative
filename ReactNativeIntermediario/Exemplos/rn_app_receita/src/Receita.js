import React, { Component } from 'react';
import { TouchableHighlight, Image, View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import ReceitaResumo from './ReceitaResumo';
import ReceitaIngredientes from './ReceitaIngredientes';
import ReceitaModo from './ReceitaModo';

const Abas = TabNavigator({
	ReceitaResumo:{
		screen:ReceitaResumo
	},
	ReceitaIngredientes:{
		screen:ReceitaIngredientes
	},
	ReceitaModo:{
		screen:ReceitaModo
	}
}, {
	tabBarPosition:'top',
	animationEnabled:true,
	tabBarOptions:{
		showIcon:false,
		style:{
			backgroundColor:'#EEEEEE'
		},
		labelStyle:{
			fontSize:14,
			height:47,
			lineHeight:47
		},
		activeTintColor:'#333333',
		inactiveTintColor:'#CCCCCC'
	}
});

export default class Receita extends Component {

	static navigationOptions = {
		title:'Receita',
		header:null
	};

	constructor(props) {
		super(props);
		this.state = {
			
		};

		this.goBack = this.goBack.bind(this);
	}

	goBack() {
		this.props.navigation.goBack();
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight underlayColor="#CCCCCC" onPress={this.goBack} style={styles.backButton}>
					<Image source={require('../assets/images/back.png')} style={styles.backImage} />
				</TouchableHighlight>
				<Image source={{uri:this.props.navigation.state.params.imagem}} style={styles.receitaImagem} />
				<Abas screenProps={this.props.navigation.state.params} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:20
	},
	backButton:{
		width:26,
		height:26,
		marginLeft:10,
		marginTop:5,
		zIndex:99
	},
	backImage:{
		width:26,
		height:26
	},
	receitaImagem:{
		height:200,
		marginTop:-51
	}
});






