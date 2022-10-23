import { StyleSheet } from 'react-native';

// export default styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default styles = StyleSheet.create({
    cameraContainer: {
      width: '30%',
      height: '60%',
    },
    fixedRatio: {
      flex:1,
      aspectRatio:1,
    },
    container: {
        flex: 1,
        backgroundColor: '#',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    previewContainer: {
      alignItems: 'flex-end',
    },

    preview: {
      width: '20%',
      height: '40%',
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },

      text: {
        color: '#7690C9',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 15,
        padding: 10,
      },

      logo: {
        width: 10,
      },

      input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },

    flipButton: {
      backgroundColor: 'white',
      width: '15%',
      padding: 12,
      marginTop: 15,
      borderRadius: 30,
      alignItems: 'center',
      borderColor: '#7690C9',
      borderWidth: 1.5,
    },
    flipText: {
      color: '#7690C9',
      fontWeight: '700',
      fontSize: 14,
    },

    uploadButton: {
      backgroundColor: 'white',
      width: '20%',
      padding: 12,
      marginTop: 15,
      borderRadius: 30,
      alignItems: 'center',
      borderColor: '#7690C9',
      borderWidth: 1.5,
    },
    uploadText: {
      color: '#7690C9',
      fontWeight: '700',
      fontSize: 14,
    },

});