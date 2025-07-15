import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwFb82nXzxGoQ100Wx5hY9pVnbyZz_eSA",
  authDomain: "mobile-51dfe.firebaseapp.com",
  projectId: "mobile-51dfe",
  storageBucket: "mobile-51dfe.firebasestorage.app",
  messagingSenderId: "1018650594459",
  appId: "1:1018650594459:web:f2878fbe983ede93594a3e",
  measurementId: "G-PH4BHBLRZC"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
