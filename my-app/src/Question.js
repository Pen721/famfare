import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import styles from '../styles/styles.js';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { async } from '@firebase/util';

export default function Question() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions(); 
    const [camera, setCamera] = useState(null)
    const [image, setImage] = useState(null)
    
    // useEffect(() => {
    //   (async () => {
    //     const cameraStatus = await Camera.requestCameraPermissionsAsync();
    //     requestPermission(cameraStatus === 'granted');
    //   })();
    // }, []);

    
    const takePicture = async () => {
      if (!camera) return
      const data = await camera.takePictureAsync(null)
      setImage(data.uri);
    }

    if (!permission) {
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
    
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }
    
    // const __retakePicture = () => {
    //   setCapturedImage(null)
    //   setPreviewVisible(false)
    //   __startCamera()
    // }

  return (
    <View style={{flex:1}}>

      <View style = {styles.cameraContainer}>
        <Camera ref = {ref => setCamera(ref)}
        style = {styles.fixedRatio}
        type = {type}
        ratio={'1:1'} />
      </View>

      <Button 
      title = "Flip Camera"
      onPress = {toggleCameraType}></Button>

      <Button title="Take Picture"
      onPress={() => takePicture()}
      />

      {image && <Image source={{uri:image}} style={{flex:1}} />}

  </View>
  
  )
    }


const styles = StyleSheet.create({
  cameraContainer: {
    flex:1,
  },
  fixedRatio: {
    flex:1,
    aspectRatio:1,
  }
})
