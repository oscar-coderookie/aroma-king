// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0kr29vuOTTVNJxul9lCyKeo0mYhQVVtE",
  authDomain: "aroma-king-web.firebaseapp.com",
  projectId: "aroma-king-web",
  storageBucket: "aroma-king-web.appspot.com",
  messagingSenderId: "759115892345",
  appId: "1:759115892345:web:cf7e889bce6de8b816b6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}