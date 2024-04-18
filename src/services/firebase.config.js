// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chill-chaos.firebaseapp.com",
  projectId: "chill-chaos",
  storageBucket: "chill-chaos.appspot.com",
  messagingSenderId: "219691738524",
  appId: "1:219691738524:web:d8d3fc38f20cf3757b5459",
  measurementId: "G-JZ3BNTLNV1",
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
