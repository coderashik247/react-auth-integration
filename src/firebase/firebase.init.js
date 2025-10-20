// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3BjGSGONGKN1WZTd2N7vsHur6P3SPNZI",
  authDomain: "react-auth-integration-edae2.firebaseapp.com",
  projectId: "react-auth-integration-edae2",
  storageBucket: "react-auth-integration-edae2.firebasestorage.app",
  messagingSenderId: "429895625279",
  appId: "1:429895625279:web:b226652c3a180933ca668a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);