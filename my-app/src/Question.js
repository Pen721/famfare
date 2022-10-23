import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles.js';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { async } from '@firebase/util';

export default function Question() {
    const [type, setType] = useState(CameraType.back);
    const [camera, setCamera] = useState(null)
    const [image, setImage] = useState(null)

    //hooks to hide camera view 
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)
    
    const [permission, requestPermission] = Camera.useCameraPermissions(); 

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

    const CameraPreview = ({photo}) => {
      console.log('The photo:', photo)
      return (
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            width: '100%',
            height: '100%'
          }}
        >
          <ImageBackground
            source={{uri: photo && photo.uri}}
            style={{
              flex: 1
            }}
          />
        </View>
      )
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
       <Text style={styles.text}>So, what's your vibe today?</Text>

      <View style = {styles.cameraContainer}>
        <Camera ref = {ref => setCamera(ref)}
        style = {styles.fixedRatio}
        type = {type}
        ratio={'1:1'} />
      </View>

      

      {/* <Button title="Take Picture"
      onPress={() => takePicture()}
      /> */}


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
          onPress = {toggleCameraType}
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

