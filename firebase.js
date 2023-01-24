// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //Update these values as per the firebase.js file you receive from Firebase
  apiKey: "AIzaSyD4k2O3wM477B8aAu5fLIcu53PRuc6EIAM",
  authDomain: "maxflash-663bc.firebaseapp.com",
  projectId: "maxflash-663bc",
  storageBucket: "maxflash-663bc.appspot.com",
  messagingSenderId: "322027795655",
  appId: "1:322027795655:web:2a215619bc7a87b618bae2",
  measurementId: "G-94BDJKP6S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const storage = getStorage();

export { auth, db, storage };
