// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSvLdP8Jr29gGBel9gLmwrpIMJ1CLCfV8",
  authDomain: "firbase-exotest.firebaseapp.com",
  projectId: "firbase-exotest",
  storageBucket: "firbase-exotest.appspot.com",
  messagingSenderId: "274110466344",
  appId: "1:274110466344:web:93b2a163df8941962ca81d",
  measurementId: "G-G0DJHL13RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentification = getAuth(app)