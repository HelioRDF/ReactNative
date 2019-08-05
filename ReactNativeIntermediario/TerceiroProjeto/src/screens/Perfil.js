import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class Perfil extends Component {


    static navigationOptions = {
        title: 'Perfil',
        headerBackImage: () => (
            <View style={{ width: 30, height: 30, backgroundColor: '#ff0000' }}></View>

        )
    };
    render() {
        return (
            <View>
                <Text>Perfil</Text>
                <Text>Nome: {this.props.navigation.getParam('nome', 'default')}</Text>
                <Text>Idade:{this.props.navigation.getParam('idade', 'default')}</Text>
                <Button title='back' onPress={() => this.props.navigation.goBack()} ></Button>
            </View>
               
        );
    }
}