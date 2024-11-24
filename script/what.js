// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5CBskeDYo_DpeskcP7B4K0qKwuGvtnn0",
  authDomain: "foodpsykes.firebaseapp.com",
  projectId: "foodpsykes",
  storageBucket: "foodpsykes.appspot.com",
  messagingSenderId: "429664914347",
  appId: "1:429664914347:web:6d1e41cf493d55561de0ee",
  measurementId: "G-86M6HF41TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);