// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6j0nIeNGgSCWljdN6uggSdfSP1AjgoVw",
  authDomain: "lab-notes-12621.firebaseapp.com",
  projectId: "lab-notes-12621",
  storageBucket: "lab-notes-12621.appspot.com",
  messagingSenderId: "959912748991",
  appId: "1:959912748991:web:f3e34ff5daff2f452f230a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);