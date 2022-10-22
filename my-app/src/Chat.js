import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles.js';

export default function Chat() {
    
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>Chat Page</Text>
      </SafeAreaView>
    </View>
  );
}