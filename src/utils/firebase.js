// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRUdcYSlY7JRlxS5WUfLIM_NPRAP6eomg",
  authDomain: "netflixai-5d537.firebaseapp.com",
  projectId: "netflixai-5d537",
  storageBucket: "netflixai-5d537.appspot.com",
  messagingSenderId: "446020306283",
  appId: "1:446020306283:web:4a7e4d5b090873c42ff82e",
  measurementId: "G-4LF07Y8WN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
