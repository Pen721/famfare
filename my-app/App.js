import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles.js'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Chat from './src/Chat.js'
import Login from './src/Login.js'
import Question from './src/Question.js'

const Tab = createBottomTabNavigator();

// export default function App() {
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Question') {
              iconName = focused
              ? 'ios-send'
              : 'ios-send-outline';
            } else if (route.name == 'Chat') {
              iconName = focused
              ? 'ios-text'
              : 'ios-text-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#7690c9',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Login" children={() => <Login />} />
        <Tab.Screen name="Question" children={() => <Question />} />
        <Tab.Screen name="Chat" children={() => <Chat />} />
        {/* <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Question" component={Question} /> */}
      </Tab.Navigator>
    </NavigationContainer>

    /* <View style={styles.container}>
      <Text style={styles.text}>Famfare</Text>
      <StatusBar style="auto"/>
    </View> */
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
