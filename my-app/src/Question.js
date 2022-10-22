import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles.js';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function Question() {
    const [type, setType] = useState(CameraType.back);
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
    

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }

    const takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
    }
  return (
    <View style={styles.container}>
    <SafeAreaView>
    <Text style={styles.text}>YOUR VIBE TODAY</Text>

    <Camera style={styles.camera} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={takePicture}
            style={{
            width: 70,
            height: 70,
            bottom: 0,
            margin: 0,
            borderRadius: 50,
            backgroundColor: '#fff'
            }}
            />

        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.smalltext}>FLIP CAMERA</Text>
        </TouchableOpacity>

      </View>
    </Camera>
    </SafeAreaView>
  </View>
  );
}
