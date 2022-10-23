// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATtOVHpg9kM327jKrKPb9hMZp21N9rOKI",
  authDomain: "fir-auth-4c8a7.firebaseapp.com",
  projectId: "fir-auth-4c8a7",
  storageBucket: "fir-auth-4c8a7.appspot.com",
  messagingSenderId: "882135999227",
  appId: "1:882135999227:web:dcba71d88a017f4489c65e"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBfrTbj3-67E1OasTPDgH_LjV1xsvFmzSE",
//     authDomain: "famfare2-d16cd.firebaseapp.com",
//     projectId: "famfare2-d16cd",
//     storageBucket: "famfare2-d16cd.appspot.com",
//     messagingSenderId: "706768556538",
//     appId: "1:706768556538:web:a7815353328ad67c0e1443"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const db = getDatabase(app);