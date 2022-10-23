import { useNavigation } from '@react-navigation/core'
import { StackActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, StyledContainer, InnerContainer, Pagelogo, PageTitle } from 'react-native'
import { auth } from './config.js'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  
  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) { //if user signed in
  //       const uid = user.uid;
  //       navigation.navigate("Question")
  //     }
  //   })
  // }, [])

  const handleSignUp = () => {
    console.log('sign up');
    console.log('email', email);
    console.log(password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("here");
        const user = userCredential.user;
        console.log('Registered with:', user.email);
        navigation.navigate("Question")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const handleLogin = () => {
    console.log('login');
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('Logged in with:', user.email);
        navigation.replace("Question")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      
      <Image source={require('./../assets/test.png')} style={styles.image}/>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Username"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress = {handleLogin}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {handleSignUp}
          style={[styles.loginButton, styles.registerButton]}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )

}

//reinsert onPress={handleLogin} and onPress={handleSignUp}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 2.5, 
    resizeMode: 'contain',
    marginBottom: -20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    width: '60%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: '#7690C9',
    width: '80%',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#7690C9',
    borderWidth: 1.5,
  },
  registerText: {
    color: '#7690C9',
    fontWeight: '700',
    fontSize: 14,
  },
})