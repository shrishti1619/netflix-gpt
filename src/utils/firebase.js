// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHuybFFPxNMDh2QHchH_J0v1H-RPEzN20",
  authDomain: "netflix-gpt-1619.firebaseapp.com",
  projectId: "netflix-gpt-1619",
  storageBucket: "netflix-gpt-1619.firebasestorage.app",
  messagingSenderId: "433181794677",
  appId: "1:433181794677:web:260f36783ce5bd26fab33c",
  measurementId: "G-FVEMEFPS3X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
