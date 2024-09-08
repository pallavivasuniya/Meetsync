import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";  // Modular Firestore imports

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4_7qF0Cd4QoXCUAOt2hO9vf8PkTgbqcQ",
  authDomain: "meetsync-7c19e.firebaseapp.com",
  projectId: "meetsync-7c19e",
  storageBucket: "meetsync-7c19e.appspot.com",
  messagingSenderId: "902631953470",
  appId: "1:902631953470:web:2a6d4e99a71adcb1296d6f",
  measurementId: "G-C09KK3FMQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

// Reference to the 'meetings' and 'users' collections
export const meetingsRef = collection(firebaseDB, "meetings");
export const usersRef = collection(firebaseDB, "users");  // Added this line for users collection

export { app };
