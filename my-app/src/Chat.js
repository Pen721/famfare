import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import styles from '../styles/styles.js';

export default function Chat() {
    
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text> This is a Chat Page</Text>
      </SafeAreaView>
    </View>
  );
}