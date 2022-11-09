// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    // apiKey: "AIzaSyAidZ2xh0PSckqjvYExYjgzA5GAQ2VB_7k",
    // authDomain: "foodie-e6ec7.firebaseapp.com",
    // projectId: "foodie-e6ec7",
    // storageBucket: "foodie-e6ec7.appspot.com",
    // messagingSenderId: "194647631621",
    // appId: "1:194647631621:web:3d97499d097e00a7c4b96c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;