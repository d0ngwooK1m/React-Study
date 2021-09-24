// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKbUzK88_jiEtO2lv1tGcSDdijm2upP9I",
  authDomain: "dongwookim-react-study.firebaseapp.com",
  projectId: "dongwookim-react-study",
  storageBucket: "dongwookim-react-study.appspot.com",
  messagingSenderId: "510991709673",
  appId: "1:510991709673:web:634556ebfd93c71cfb8778",
  measurementId: "G-P39F3TFZRV"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();