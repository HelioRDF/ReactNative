import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default class ConversationScreenChat extends Component {

	static navigationOptions = ({navigation}) => ({
		title:navigation.state.params.nome,
		tabBarLabel:"Conversas",
		tabBarIcon:({tintColor, focused}) => {
			if(focused) {
				return (
					<Image source={require('../assets/images/chat_on.png')} style={{width:20, height:20}} />
				);
			} else {
				return (
					<Image source={require('../assets/images/chat_off.png')} style={{width:20, height:20}} />
				);
			}					
		}
	});

	render() {
		return (
			<View style={styles.container}>
				<Text>Tela de Chat</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		marginTop:20
	}
});