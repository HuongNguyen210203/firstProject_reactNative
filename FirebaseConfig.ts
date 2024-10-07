// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"; // Ensure you import setPersistence
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORAGE = AsyncStorage;
export const FIREBASE_PERSISTENCE = browserLocalPersistence;
export const FIREBASE_DB = getFirestore(FIREBASE_APP)


// Initialize Firebase Auth
//const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// Set persistence
setPersistence(FIREBASE_AUTH, browserLocalPersistence)
    .then(() => {
        console.log("Persistence set to browserLocalPersistence.");
        // Now you can proceed to use FIREBASE_AUTH for authentication
    })
    .catch((error) => {
        console.error("Error setting persistence: ", error);
    });

// Export the initialized Firebase app and auth instance
export { FIREBASE_APP, FIREBASE_AUTH };
