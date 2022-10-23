// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { doc, setDoc } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfrTbj3-67E1OasTPDgH_LjV1xsvFmzSE",
    authDomain: "famfare2-d16cd.firebaseapp.com",
    projectId: "famfare2-d16cd",
    storageBucket: "famfare2-d16cd.appspot.com",
    messagingSenderId: "706768556538",
    appId: "1:706768556538:web:a7815353328ad67c0e1443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const db = getDatabase(app);


// import { initializeApp} from 'firebase/app';
// import { getDatabase } from "firebase/database";
// import { doc, setDoc } from "firebase/firestore"; 

// const firebaseConfig = {
//     apiKey: "AIzaSyBfrTbj3-67E1OasTPDgH_LjV1xsvFmzSE",
//     authDomain: "famfare2-d16cd.firebaseapp.com",
//     projectId: "famfare2-d16cd",
//     storageBucket: "famfare2-d16cd.appspot.com",
//     messagingSenderId: "706768556538",
//     appId: "1:706768556538:web:a7815353328ad67c0e1443",
//     URL: 'famfare2-d16cd.firebaseio.com',
// };

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
// // export const db = app.database();
