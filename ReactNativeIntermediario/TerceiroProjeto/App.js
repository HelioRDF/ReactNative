import React, { Component } from 'react';
import { createAppContainer,createStackNavigator, Text } from 'react-navigation';

import Feed from './src/screens/Feed';
import Perfil from './src/screens/Perfil';

const AppNavigator = createStackNavigator({
  Feed:{
    screen:Feed
  },
  Perfil:{
    screen:Perfil
  }},{
      initialRouteName:'Feed',
      headerMode:'float', //screen|float|none
      headerBackTitleVisible:true,
      headerLayoutPreset:'center',
      defaultNavigationOptions:{
        headerBackImage:()=>(
          <Text>Voltar</Text>
        )
      }
  });

  export default createAppContainer(AppNavigator);