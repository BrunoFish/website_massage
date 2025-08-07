// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs9J6fAdtFCJWDzgZJhIwQY1PUaN2hC0s",
  authDomain: "website-massage-5c76f.firebaseapp.com",
  projectId: "website-massage-5c76f",
  storageBucket: "website-massage-5c76f.firebasestorage.app",
  messagingSenderId: "78528691777",
  appId: "1:78528691777:web:54c13d03150ec6b7d3d0c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

