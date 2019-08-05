import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { createBottomTabNavigator,createStackNavigator,createAppContainer,   } from 'react-navigation';


class Tela1 extends Component {
    static navigationOptions = {
        tabBarLabel: 'Tela1',
        tabBarIcon: () => (
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
        tabBarLabel: 'Tela2',
        tabBarIcon: () => (
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
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    icon:{
        width:26,
        height:26
    }
});

const Navegador = createBottomTabNavigator({
    Tela1:{
        screen:Tela1
    },
    Tela2:{
        screen:Tela2
    }
},

{
    tabBarPosition:'top',
    animationEnabled:true,
    initialRouteName:'Tela2',
    order:['Tela2','Tela1'],
    tabBarOptions:{
        showIcon:true,
        showLabel:true,
        activeTintColor:'#FF0000',
        inactiveTintColor:'#00FF00',
        upperCaseLabel:false,
        tabStyle:{
            backgroundColor:'blue'
        }
     

    }

});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;