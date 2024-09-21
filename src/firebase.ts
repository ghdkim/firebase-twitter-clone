import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlEAzDRBlV20NbqITxMNvDGhz3M9UmVS8",
  authDomain: "nwitter-clone-fed87.firebaseapp.com",
  projectId: "nwitter-clone-fed87",
  storageBucket: "nwitter-clone-fed87.appspot.com",
  messagingSenderId: "647337629269",
  appId: "1:647337629269:web:7c183c5c9974f06e65e6dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
