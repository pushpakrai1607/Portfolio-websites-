// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKp7rbUE2bqiZX1RLNcMClW_wQUkyF5jk",
  authDomain: "portfolio-83597.firebaseapp.com",
  projectId: "portfolio-83597",
  storageBucket: "portfolio-83597.appspot.com",
  messagingSenderId: "698560585311",
  appId: "1:698560585311:web:924104f59bb84ac46405ea",
  measurementId: "G-48RBJ7GR6C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore()