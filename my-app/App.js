import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles.js'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Chat from './src/Chat.js'
import Login from './src/Login.js'
import Question from './src/Question.js'

// export default function App() {
const App = () => {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text style={styles.text}>Famfare hi</Text>
      <StatusBar style="auto"/>
    </View>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
