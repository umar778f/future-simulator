// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7kVj2dON7KryKG3JNkBuL1SMdCdvvfmU",
  authDomain: "future-simulator-bc72a.firebaseapp.com",
  projectId: "future-simulator-bc72a",
  storageBucket: "future-simulator-bc72a.firebasestorage.app",
  messagingSenderId: "126516193507",
  appId: "1:126516193507:web:80270f06c5ace3c55cfdd6",
  measurementId: "G-SV45J47TGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);