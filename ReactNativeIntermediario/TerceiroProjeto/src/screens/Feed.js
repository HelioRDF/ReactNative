import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Feed extends Component {

    static navigationOptions = {
        title: 'Feed',
        //header:null
       // headerLeft:  <View style={{ width: 30, height: 30, backgroundColor: '#000' }}></View>,
        headerRight:  <View style={{ width: 30, height: 30, backgroundColor: '#000' }}></View>,
        headerStyle:{
            backgroundColor:'#0000FF',
            height:80
        },
        headerTintColor:'#FFF'

    };

    render() {
        return (
            <View style={styles.container}>
                <Text>FEED</Text>
                <Button title='next'
                    onPress={() => this.props.navigation.navigate('Perfil', { nome: 'Helio', idade: 30 })} ></Button>
            </View>);
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
