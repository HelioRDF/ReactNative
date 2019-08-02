import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';


import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
let styleOne = {
  headerStyle: {
    backgroundColor: 'blue',
    height: 70,
    marginBottom: 20
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 30
  }
}


//TabNavigator
const AppNavigator = createDrawerNavigator({
  Tela1: {
    screen: Tela1
  },
  Tela2: {
    screen: Tela2
  }

});

//TabNavigator
/**
const AppNavigator = createBottomTabNavigator({
  Tela1: {
    screen: Tela1
  },
  Tela2: {
    screen: Tela2
  }

}); */



export default createAppContainer(AppNavigator);


//StackNavigator
/**-----------------------------------------------------------
const AppNavigator = createStackNavigator({
  Tela1: {
    screen: Tela1,
    navigationOptions:styleOne,
  },
  Tela2: {
    screen: Tela2
  }
},

 ------------------------------------------------------------


  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#941c1c',
        height: 70,
        marginBottom:20
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 30
      }
    }
  } );*/
