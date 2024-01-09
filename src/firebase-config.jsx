// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW1BoJ9MB0YPnCWUni31NuXqppVdOZE8s",
  authDomain: "impact-blog-70d55.firebaseapp.com",
  projectId: "impact-blog-70d55",
  storageBucket: "impact-blog-70d55.appspot.com",
  messagingSenderId: "655747463576",
  appId: "1:655747463576:web:1db8723bdc335cf66393ed",
  measurementId: "G-K9P8WBL16T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
