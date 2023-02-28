// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASz5-Tk4SjH2Y1d6hEIBZATpLcC1NHh2c",
  authDomain: "clickapp-613ab.firebaseapp.com",
  projectId: "clickapp-613ab",
  storageBucket: "clickapp-613ab.appspot.com",
  messagingSenderId: "467440936881",
  appId: "1:467440936881:web:ac09c35aa4ba6249b77f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;