import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCzlXpl2IUskLMt5NiFvA7uU_ZVajzeT8",
  authDomain: "jwitter-4b951.firebaseapp.com",
  projectId: "jwitter-4b951",
  storageBucket: "jwitter-4b951.appspot.com",
  messagingSenderId: "650233516526",
  appId: "1:650233516526:web:97711c7f49ff1df5af7eff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
