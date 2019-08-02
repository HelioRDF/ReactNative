import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class Tela1 extends Component {


      static navigationOptions = {
        title: 'Tela 1',
    };

   /**  static navigationOptions = {
        title: 'Tela 1',

        headerStyle:{
            backgroundColor:'#851c1c'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          padding:50,
            fontWeight:'bold',
            fontSize:30,
          

        }
    };*/
    render() {
        return (
            <View>
                <Text>Tela 01</Text>
                <Button title='next' 
                onPress={() => this.props.navigation.navigate('Tela2', { nome: 'Helio', idade: 30 })} ></Button>
            
            <Button title='Menu' onPress={()=> this.props.navigation.toggleDrawer()}></Button>
            </View>
        );
    }
}