// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, initializeFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBkN5096VaT51DYZc8vlBJdh57QrLeRaQE",
  authDomain: "robinhoodarmy-94ad2.firebaseapp.com",
  projectId: "robinhoodarmy-94ad2",
  storageBucket: "robinhoodarmy-94ad2.appspot.com",
  messagingSenderId: "620390255120",
  appId: "1:620390255120:web:f1aa2eb1588aabbfc0d895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
