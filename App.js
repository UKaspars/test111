import React from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert } from 'react-native';
import Test from './src/test';
import { StackNavigator } from 'react-navigation'; // Importing Screen navigator
export default class App extends React.Component {
  render() {
      Test()
    return (
        <View style={styles.container}>
        <Text> Welcome to Exotic Zoo /Text>
      <view/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
