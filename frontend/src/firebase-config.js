// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import Firebase services you want to use
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getAuth } from "firebase/auth"; // For Authentication
// Add other services as needed...

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDwFNiXmdl_GpONc4KyhNRYL29PGOL8Nk",
  authDomain: "trace-it-1655d.firebaseapp.com",
  projectId: "trace-it-1655d",
  storageBucket: "trace-it-1655d.appspot.com",
  messagingSenderId: "712930538260",
  appId: "1:712930538260:web:4fc9a5afd597fea2604801",
  measurementId: "G-2XL02H8PJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const database = getDatabase(app); // Initialize Realtime Database
const firestore = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Authentication
// Add other service initializations as needed...

// Export the initialized services if needed
export { app, database, firestore, auth };
