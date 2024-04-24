// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-dfbb9.firebaseapp.com",
  projectId: "next-blog-dfbb9",
  storageBucket: "next-blog-dfbb9.appspot.com",
  messagingSenderId: "896731275618",
  appId: "1:896731275618:web:3b625d97973cb9dbcf8c3b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
