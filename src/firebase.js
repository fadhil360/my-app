
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA3niHE0kklY7gUFyNtAXNtYaDRENiKHmY",
    authDomain: "webdemo-3cd29.firebaseapp.com",
    projectId: "webdemo-3cd29",
    storageBucket: "webdemo-3cd29.firebasestorage.app",
    messagingSenderId: "773019625150",
    appId: "1:773019625150:web:1b57c4775a85e5fc9120ef",
    measurementId: "G-6LKLY0T5GH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
