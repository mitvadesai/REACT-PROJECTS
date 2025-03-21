// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5xX2aYJKEHs6YyRfws0HKeN-ylCGOBLk",
  authDomain: "react-projects-ccf02.firebaseapp.com",
  projectId: "react-projects-ccf02",
  storageBucket: "react-projects-ccf02.firebasestorage.app",
  messagingSenderId: "1005199635583",
  appId: "1:1005199635583:web:fb0b4b029bb9b19556bb4a",
  measurementId: "G-C3G894PJHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)