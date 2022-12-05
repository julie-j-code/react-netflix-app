// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyC1cR7B-cB-uhk9QfMua6BSEDzIIKTde24",
  authDomain: "react-netflix-2eb3c.firebaseapp.com",
  projectId: "react-netflix-2eb3c",
  storageBucket: "react-netflix-2eb3c.appspot.com",
  messagingSenderId: "847525021915",
  appId: "847525021915:web:95346d0ea11f0ac82ba4fe"
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyC1cR7B-cB-uhk9QfMua6BSEDzIIKTde24
// REACT_APP_FIREBASE_AUTH_DOMAIN=react-netflix-2eb3c.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=react-netflix-2eb3c
// REACT_APP_FIREBASE_STORAGE_BUCKET=react-netflix-2eb3c.appspot.com
// REACT_APP_MESSAGIN_SENDER=847525021915
// REACT_APP_APP_ID=1:847525021915:web:95346d0ea11f0ac82ba4fe



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)