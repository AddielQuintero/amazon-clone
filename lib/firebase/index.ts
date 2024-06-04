// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzW3tXDfHI4e9HO7Hb9iJoYgbM7EAAyWA",
  authDomain: "clone-1efbe.firebaseapp.com",
  projectId: "clone-1efbe",
  storageBucket: "clone-1efbe.appspot.com",
  messagingSenderId: "992947473585",
  appId: "1:992947473585:web:5c8930dc574f6a50202690",
  measurementId: "G-8P1P1M2HP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);