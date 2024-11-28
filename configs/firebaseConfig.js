// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "travel-planner-34db6.firebaseapp.com",
  projectId: "travel-planner-34db6",
  storageBucket: "travel-planner-34db6.firebasestorage.app",
  messagingSenderId: "957346417966",
  appId: "1:957346417966:web:daced8d9281ce37caebebf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
