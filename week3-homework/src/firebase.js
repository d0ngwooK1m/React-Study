// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeJpuT9Ke0yLP10zx-Lm_oRwohzmYrRyY",
  authDomain: "react-pepe-quiz.firebaseapp.com",
  projectId: "react-pepe-quiz",
  storageBucket: "react-pepe-quiz.appspot.com",
  messagingSenderId: "1064134759294",
  appId: "1:1064134759294:web:a2269fb132e74d58fdd92f",
  measurementId: "G-XMN00N9Q3S"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export {db};