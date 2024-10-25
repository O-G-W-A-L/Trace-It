// src/firebase/config.js

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Add storage

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDwFNiXmdl_GpONc4KyhNRYL29PGOL8Nk",
  authDomain: "trace-it-1655d.firebaseapp.com",
  projectId: "trace-it-1655d",
  storageBucket: "trace-it-1655d.appspot.com",
  messagingSenderId: "712930538260",
  appId: "1:712930538260:web:4fc9a5afd597fea2604801",
  measurementId: "G-2XL02H8PJX"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize storage

// Export initialized services
export { app, analytics, database, db, auth, storage };
