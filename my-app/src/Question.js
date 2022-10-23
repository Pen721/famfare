import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles.js';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { async } from '@firebase/util';
import { getAuth } from "firebase/auth";
import { db } from "../src/config"
import { ref, set } from "firebase/database";
import { useNavigation } from '@react-navigation/core'


export default function Question() {
    const [type, setType] = useState(CameraType.back);
    const [camera, setCamera] = useState(null)
    const [image, setImage] = useState(null)
    const [permission, requestPermission] = Camera.useCameraPermissions(); 

    const navigation = useNavigation()

    var moment = require('moment'); // require
    moment().format(); 

    function writeQuestionData (chatId, time_index, username, imageUrl) {
      set(ref(db, 'DailyPhotos/' + chatId), {
        time_index: {
          username: {
            image : imageUrl
          }
        } 
      });
    }

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
      }
    
      if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
          <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }

    const takePicture = async () => {
      if (!camera) return
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
      setPreviewVisible(true)
      setCapturedImage(data)
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }

    function uploadImage() {
      
      //get the current active user 
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        console.log(user.email);
        console.log(image);
        var start = moment([2022, 9, 23]);
        var now = moment();
        writeQuestionData("000000001", now.diff(start, 'days'), user.email, image);

        navigation.navigate("Chat")
      }   
      //otherwise no user is signed in 
    }


    //family chat id -- multiple (username, image, date)
    //only need day information
  return (
    <View style={{flex:1}}>
       <Text style={styles.text}>So, what's your vibe today?</Text>

      <View style = {styles.cameraContainer}>
        <Camera ref = {ref => setCamera(ref)}
        style = {styles.fixedRatio}
        type = {type}
        ratio={'1:1'} />
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress = {toggleCameraType}
          style={styles.flipButton}
        >
          <Text style={styles.flipText}>Flip</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            onPress={takePicture}
            style={{
            width: 70,
            height: 70,
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: '#7690C9',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            elevation: 20,
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            }}
            >
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {uploadImage}
          style={styles.uploadButton}
        >
          <Text style={styles.uploadText}>Upload</Text>
        </TouchableOpacity>

      </View>
      
      <View style={styles.previewContainer}>
        {image && <Image source={{uri:image}} style={styles.preview} />} 
      </View>
      

  </View>
  
  )
    }

