import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import styles from '../styles/styles.js';

export default function Login() {
    
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text> Login Page</Text>
      </SafeAreaView>
    </View>
  );
}