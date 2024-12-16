// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rasputin-78f96.firebaseapp.com",
  projectId: "rasputin-78f96",
  storageBucket: "rasputin-78f96.firebasestorage.app",
  messagingSenderId: "622819218190",
  appId: "1:622819218190:web:f1152c8fdf29bcd1647d5f",
  measurementId: "G-79PG02SKER"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

auth.onIdTokenChanged(async (user) => {
  if (user) {
    const token = await user.getIdToken(true);
    localStorage.setItem("token", token);
  }
});
