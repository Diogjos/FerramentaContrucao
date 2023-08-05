import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function Custos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Custear o valor da Obra </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Diga a quantidade de M²"
      />
      <Text></Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Diga a Modalidade"       
      />
      <Text></Text>
    <Button title='          Calcular          '/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    padding: 8,
    margin: 15,
    width: 250,
    borderRadius: 10,
    borderBottomColor:'royalblue'
  },
  text1: {
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 20,
    color: 'royalblue',
    fontWeight: 'bold',
  }
  
})