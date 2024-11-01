// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfwdzQs0l6kv0No-6p7kTIDjw6PU46T0M",
  authDomain: "personal-portfolio-52a60.firebaseapp.com",
  projectId: "personal-portfolio-52a60",
  storageBucket: "personal-portfolio-52a60.appspot.com",
  messagingSenderId: "393445811464",
  appId: "1:393445811464:web:630b91370001692482f8bd",
  measurementId: "G-R1JKDYFS0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);