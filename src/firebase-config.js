import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBjkMKKY_e5KvUPJcFp2uyBVBp49iYrqNk",
  authDomain: "earthquake-auth.firebaseapp.com",
  projectId: "earthquake-auth",
  storageBucket: "earthquake-auth.appspot.com",
  messagingSenderId: "1054579611531",
  appId: "1:1054579611531:web:58e4fc2321423c7c76c18e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
