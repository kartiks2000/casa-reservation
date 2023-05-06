// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBzxRXTJ5YsCkodbMdELVu1FV4yXUsa5VU",
  authDomain: "casaamerico-reservation.firebaseapp.com",
  projectId: "casaamerico-reservation",
  storageBucket: "casaamerico-reservation.appspot.com",
  messagingSenderId: "456388569495",
  appId: "1:456388569495:web:3c7f3f425b875628817cd2",
  measurementId: "G-W3QHZ38ZMB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)