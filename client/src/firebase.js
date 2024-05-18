// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-ad98d.firebaseapp.com",
  projectId: "mern-real-estate-ad98d",
  storageBucket: "mern-real-estate-ad98d.appspot.com",
  messagingSenderId: "152466672475",
  appId: "1:152466672475:web:bb60785d4ea3e0c8fd287e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);