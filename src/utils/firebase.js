// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDypZ5k5JaLN2Uee7MfJIAOGk5alxe9gno",
  authDomain: "movienight-23d42.firebaseapp.com",
  projectId: "movienight-23d42",
  storageBucket: "movienight-23d42.firebasestorage.app",
  messagingSenderId: "420490649961",
  appId: "1:420490649961:web:6ab1cc73cc041627745df8",
  measurementId: "G-D4HMYV6ZFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);