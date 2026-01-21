// firebase.js (FOR HTML + JS WEBSITE)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZX2N-hoZNL8V-xnzBuSOBmqYKITGwmhg",
  authDomain: "slim-alpha-tee.firebaseapp.com",
  projectId: "slim-alpha-tee",
  storageBucket: "slim-alpha-tee.firebasestorage.app",
  messagingSenderId: "368415138960",
  appId: "1:368415138960:web:70490781c2f3e9fd556415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);
