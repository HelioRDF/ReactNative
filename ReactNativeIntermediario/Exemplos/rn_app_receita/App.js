import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Lista from './src/Lista';
import Receita from './src/Receita';

const navegador = StackNavigator({
	Lista:{
		screen:Lista
	},
	Receita:{
		screen:Receita
	}
});

export default navegador;