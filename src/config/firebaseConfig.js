// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0_-14sOd-RVLqQle4XdfbmwCS_5iV6Ro",
    authDomain: "coder-proyectfinal.firebaseapp.com",
    projectId: "coder-proyectfinal",
    storageBucket: "coder-proyectfinal.appspot.com",
    messagingSenderId: "890996980113",
    appId: "1:890996980113:web:f0ec992212813daf214230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);