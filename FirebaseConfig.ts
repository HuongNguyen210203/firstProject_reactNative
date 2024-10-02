// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0_if_J3ng3_Yb7VWWtwpOr2aAXUcM-Ic",
    authDomain: "reanatauth.firebaseapp.com",
    projectId: "reanatauth",
    storageBucket: "reanatauth.appspot.com",
    messagingSenderId: "550340552858",
    appId: "1:550340552858:web:7d36557a0e188d57c0d723",
    measurementId: "G-RSFTCW7HNC"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
