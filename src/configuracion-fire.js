// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//import {env} from "process";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBij8QcyV3PWU4BifKSd8YiZrWeTBYsNaE",
  authDomain: "proyecto-final-blog.firebaseapp.com",
  projectId: "proyecto-final-blog",
  storageBucket: "proyecto-final-blog.appspot.com",
  messagingSenderId: "776359044211",
  appId: "1:776359044211:web:d388395d6dc07089d47606",
  measurementId: "G-YQJMEN0L5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const aunth = getAuth(app);
export const proveedor = new GoogleAuthProvider();
export const BD = getFirestore(app)