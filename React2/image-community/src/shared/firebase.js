import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDDnSlehn7fTzY80kQPyTwk80WUnlv92hQ",
    authDomain: "dongwoo-image-community.firebaseapp.com",
    projectId: "dongwoo-image-community",
    storageBucket: "dongwoo-image-community.appspot.com",
    messagingSenderId: "778376281328",
    appId: "1:778376281328:web:20489df2b0617bea9e1635",
    measurementId: "G-N1SL0ESPM5"
}

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export { auth, apiKey };