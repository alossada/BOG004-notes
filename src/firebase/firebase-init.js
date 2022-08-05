// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA6j0nIeNGgSCWljdN6uggSdfSP1AjgoVw",
//   authDomain: "lab-notes-12621.firebaseapp.com",
//   projectId: "lab-notes-12621",
//   storageBucket: "lab-notes-12621.appspot.com",
//   messagingSenderId: "959912748991",
//   appId: "1:959912748991:web:f3e34ff5daff2f452f230a",
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClOfWK9S0adF6FgOaUkpUb2zttsrISXmc",
  authDomain: "lab-notes2.firebaseapp.com",
  projectId: "lab-notes2",
  storageBucket: "lab-notes2.appspot.com",
  messagingSenderId: "780956313930",
  appId: "1:780956313930:web:f5e75d9cb0c10b230179b3",
  measurementId: "G-0QS0J2LX6K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
