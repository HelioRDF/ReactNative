import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';


class Tela1 extends Component {
    static navigationOptions = {
        drawerLabel: 'Tela1',
        drawerIcon: () => (
            <Image source={require('./assets/images/house.png')} style={styles.icon} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Esta é a tela 01</Text>
            </View>
        );
    }
}

class Tela2 extends Component {
    static navigationOptions = {
        drawerLabel: 'Tela2',
        drawerIcon: () => (
            <Image source={require('./assets/images/settings.png')} style={styles.icon} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Esta é a tela 02</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    icon: {
        width: 26,
        height: 26
    }
});

const Navegador = createDrawerNavigator({
    Tela1: {
        screen: Tela1
    },
    Tela2: {
        screen: Tela2
    }
});

export default createAppContainer(Navegador);