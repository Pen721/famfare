import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import styles from '../styles/styles.js';

export default function Question() {
    
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text> Question Page</Text>
      </SafeAreaView>
    </View>
  );
}