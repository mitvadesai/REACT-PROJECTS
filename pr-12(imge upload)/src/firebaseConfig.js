// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwqRoRGxQeDPwCW-26OnFejOjRrmes1iY",
  authDomain: "img-upaload.firebaseapp.com",
  projectId: "img-upaload",
  storageBucket: "img-upaload.firebasestorage.app",
  messagingSenderId: "1076416011663",
  appId: "1:1076416011663:web:dbb10b01c892b74b32fffa",
  measurementId: "G-GN68B52N7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);