import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

export default class PrimeiroProjeto extends Component {

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.texto}>SO: { String(Platform.OS).toLocaleUpperCase()}  </Text>
        <Text style={styles.texto02}>VERSÃO: {Platform.Version}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginTop: 40,

  },
  texto: {
    color: (Platform.OS === 'ios') ? 'red' : 'blue'
  },
  texto02: Platform.select( {
      ios: {
        color: 'blue'
      },
      android: {
        color: 'red'
      }
    }
  )
});















