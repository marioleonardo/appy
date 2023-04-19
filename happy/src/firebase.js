
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP7aXwAB1r8Dvelbxb_A7j0x4k5AD9dEo",
  authDomain: "chat-app-6cc58.firebaseapp.com",
  projectId: "chat-app-6cc58",
  storageBucket: "chat-app-6cc58.appspot.com",
  messagingSenderId: "495138982793",
  appId: "1:495138982793:web:17e0667dc155b90f64af58",
  measurementId: "G-HDYRLBFP7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
