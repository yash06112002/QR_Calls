// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvmE3zBAYwwh6Eaq7Bu7XGn-KdzdTOKus",
    authDomain: "qr-calls-e98e0.firebaseapp.com",
    projectId: "qr-calls-e98e0",
    storageBucket: "qr-calls-e98e0.appspot.com",
    messagingSenderId: "373364651329",
    appId: "1:373364651329:web:1d41c464726c8c10b51dc0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
// auth.languageCode = 'it';

export { auth, firebase };