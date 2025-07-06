import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2atTmnzU8AQyydEIJPIOvWtkuDav3UJs",
  authDomain: "prepwise-86b36.firebaseapp.com",
  projectId: "prepwise-86b36",
  storageBucket: "prepwise-86b36.firebasestorage.app",
  messagingSenderId: "356643897021",
  appId: "1:356643897021:web:3d478a9d9892449a5281d4",
  measurementId: "G-NBSECQ0R45",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
