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
  apiKey: "AIzaSyDPxdk-O0zn00RC6i6cvmbYhYPjeLf_lwQ",
  authDomain: "fir-api-42dbb.firebaseapp.com",
  projectId: "fir-api-42dbb",
  storageBucket: "fir-api-42dbb.firebasestorage.app",
  messagingSenderId: "23484015968",
  appId: "1:23484015968:web:9fea1f27ba5955c4f16a05",
  measurementId: "G-C4YXW5ESZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);