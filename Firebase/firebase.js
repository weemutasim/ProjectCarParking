// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7dCrlJ9yWkw44-jGfsSHarh1kkC1BnNA",
  authDomain: "carpark-test-89c69.firebaseapp.com",
  databaseURL: "https://carpark-test-89c69-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carpark-test-89c69",
  storageBucket: "carpark-test-89c69.appspot.com",
  messagingSenderId: "431059079220",
  appId: "1:431059079220:web:82a0b8a90ca7874db97a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);