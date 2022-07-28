// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJDXz84aPQz_CdvvtWH4CZWV7lXfNaotw",
  authDomain: "stylist-store.firebaseapp.com",
  projectId: "stylist-store",
  storageBucket: "stylist-store.appspot.com",
  messagingSenderId: "37310642637",
  appId: "1:37310642637:web:5c0ab01dc4824d3a7b2c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;