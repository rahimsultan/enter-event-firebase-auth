// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjBt1KVWKkGOuiCs_9PYN65DYBaGPhP1U",
  authDomain: "event-management-88e4d.firebaseapp.com",
  projectId: "event-management-88e4d",
  storageBucket: "event-management-88e4d.appspot.com",
  messagingSenderId: "785000958482",
  appId: "1:785000958482:web:d6ea066ec77dc46e2a26cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;