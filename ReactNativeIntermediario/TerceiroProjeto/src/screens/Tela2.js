import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Tela2 extends Component {

    static navigationOptions = {
        title: 'Tela 2'
    };
    render() {
        return (
            <View>
                <Text>Nome: {this.props.navigation.getParam('nome','default')}</Text>
                <Text>Idade:{this.props.navigation.getParam('idade','default')}</Text>
                <Button title='next' onPress={() => this.props.navigation.goBack()} ></Button>

            </View>
        );
    }
}