import { initializeApp} from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBfrTbj3-67E1OasTPDgH_LjV1xsvFmzSE",
    authDomain: "famfare2-d16cd.firebaseapp.com",
    projectId: "famfare2-d16cd",
    storageBucket: "famfare2-d16cd.appspot.com",
    messagingSenderId: "706768556538",
    appId: "1:706768556538:web:a7815353328ad67c0e1443"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const db = app.database();
