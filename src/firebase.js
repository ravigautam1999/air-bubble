// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD8w0uaOcRyEzG4idvAtGBV9rJLb5g788",
  authDomain: "air-bubble.firebaseapp.com",
  databaseURL: "https://air-bubble-default-rtdb.firebaseio.com",
  projectId: "air-bubble",
  storageBucket: "air-bubble.appspot.com",
  messagingSenderId: "619589241809",
  appId: "1:619589241809:web:233eb638d8c123e9aa6ef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)

export{storage, analytics}