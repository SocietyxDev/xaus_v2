import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA30M_2m2Mh-O0DMBEn7cQdryKHlg8Yt58",
  authDomain: "hibye-57c95.firebaseapp.com",
  projectId: "hibye-57c95",
  storageBucket: "hibye-57c95.appspot.com",
  messagingSenderId: "642790953392",
  appId: "1:642790953392:web:0776254d8739e1e0bd8675",
  measurementId: "G-NW8Q8Q1HRE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
