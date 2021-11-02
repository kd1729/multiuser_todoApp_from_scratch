// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMtCyyqNxZDq7AXm4zeuQbylQzVoW8TyU",
  authDomain: "todo-app-e6957.firebaseapp.com",
  projectId: "todo-app-e6957",
  storageBucket: "todo-app-e6957.appspot.com",
  messagingSenderId: "293748707290",
  appId: "1:293748707290:web:abb832fb7f3cfaf794bae3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);