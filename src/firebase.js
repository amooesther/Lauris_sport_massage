import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc,getDocs,query,where } from "firebase/firestore"; // Add Firestore functions

const firebaseConfig = {
    apiKey: "AIzaSyB2Uj6o-QrzZtTwn93n29jqMl0zGJ7tiuY",
    authDomain: "lauris-1ee1e.firebaseapp.com",
    projectId: "lauris-1ee1e",
    storageBucket: "lauris-1ee1e.firebasestorage.app",
    messagingSenderId: "201097427671",
    appId: "1:201097427671:web:4d77ac25c9b183497cce92"
  };

  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc, getDocs,query,where}; // Export Firestore functions here
