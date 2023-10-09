// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjZBDWWxRtkaut06-JEH8isBvwJWG8W1w",
  authDomain: "vite-contact-13808.firebaseapp.com",
  projectId: "vite-contact-13808",
  storageBucket: "vite-contact-13808.appspot.com",
  messagingSenderId: "921414167427",
  appId: "1:921414167427:web:569181c94fe39f819524b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);