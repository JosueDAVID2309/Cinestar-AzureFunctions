import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANHLPQ7lH9OFnMw6U5zOw4NAUq4g53ZyI",
  authDomain: "josue-cinestar.firebaseapp.com",
  projectId: "josue-cinestar",
  storageBucket: "josue-cinestar.firebasestorage.app",
  messagingSenderId: "379252651927",
  appId: "1:379252651927:web:5d4bc3c15a50071118b6d2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };