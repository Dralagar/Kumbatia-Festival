// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGUTLQLyEtXfJKvJ5msBdKvlV9XUhFGQs",
  authDomain: "kumbatiablog.firebaseapp.com",
  projectId: "kumbatiablog",
  storageBucket: "kumbatiablog.appspot.com",
  messagingSenderId: "270606800197",
  appId: "1:270606800197:web:d801c31b80bb3f3db59a2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
