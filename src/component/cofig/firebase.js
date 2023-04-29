import { initializeApp } from "firebase/app";
import {db} from 'firebase/firestore';
 import {getAuth , GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAkN0MZfO1u4D7w28REvxYNLqQTYhKL8Js",
  authDomain: "chatapp-abffc.firebaseapp.com",
  projectId: "chatapp-abffc",
  storageBucket: "chatapp-abffc.appspot.com",
  messagingSenderId: "559643537851",
  appId: "1:559643537851:web:bc02917869a62da659149e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ;
export const provider = new GoogleAuthProvider() ;