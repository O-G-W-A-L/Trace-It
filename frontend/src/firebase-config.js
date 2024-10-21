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
  apiKey: "AIzaSyC-1CYR3nfYrZpVnPAiOWncQsDyaBCcyLo",
  authDomain: "traceit-748af.firebaseapp.com",
  databaseURL: "https://traceit-748af-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "traceit-748af",
  storageBucket: "traceit-748af.appspot.com",
  messagingSenderId: "627276895467",
  appId: "1:627276895467:web:71994dd967209bb2221aae",
  measurementId: "G-S73RV4M9PG"
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
