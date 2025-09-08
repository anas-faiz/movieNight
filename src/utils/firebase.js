// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJufCN2eT1dGkxPPZHnOgMlJ8XZiqGckE",
  authDomain: "movienight-32d9c.firebaseapp.com",
  projectId: "movienight-32d9c",
  storageBucket: "movienight-32d9c.firebasestorage.app",
  messagingSenderId: "660048616483",
  appId: "1:660048616483:web:581df57c44a1986894a596",
  measurementId: "G-51JQV20T70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);