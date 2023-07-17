// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS6lt__TGtQ3EUVzB-RCRJM41TfeROb4Q",
  authDomain: "assignment-5-3e124.firebaseapp.com",
  projectId: "assignment-5-3e124",
  storageBucket: "assignment-5-3e124.appspot.com",
  messagingSenderId: "544837344246",
  appId: "1:544837344246:web:20b59688c9d04dd55dc5d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
