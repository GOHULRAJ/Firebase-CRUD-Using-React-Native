// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCl7VzhpKcGr2BmrTARD2bjX5fiZYbFPQ",
  authDomain: "react-student-crud-94fba.firebaseapp.com",
  projectId: "react-student-crud-94fba",
  storageBucket: "react-student-crud-94fba.appspot.com",
  messagingSenderId: "129617758399",
  appId: "1:129617758399:web:233f4c3466078a7fa2de0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize firestore
export const db= getFirestore(app);