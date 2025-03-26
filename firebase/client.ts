import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDChguTOI1XITVor9zB4MnsKOPJoEWubHs",
  authDomain: "preswise-65a46.firebaseapp.com",
  projectId: "preswise-65a46",
  storageBucket: "preswise-65a46.firebasestorage.app",
  messagingSenderId: "718721054988",
  appId: "1:718721054988:web:b969614e476e6132787129",
  measurementId: "G-CT5VPQNS1D"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);