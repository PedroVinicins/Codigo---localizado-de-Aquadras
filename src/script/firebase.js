// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANHAtzR8_0vVGoPtQMkcFchm5QJG8y4pA",
  authDomain: "quadrafinder.firebaseapp.com",
  projectId: "quadrafinder",
  storageBucket: "quadrafinder.firebasestorage.app",
  messagingSenderId: "941321549667",
  appId: "1:941321549667:web:1d36781bb2178bef490556",
  measurementId: "G-WEKYCWTZSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);