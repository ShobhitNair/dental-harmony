// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuph12B2gWH_OKYhpdzOWmQ9ho0fLl-eg",
  authDomain: "dentalharmony-d67dc.firebaseapp.com",
  projectId: "dentalharmony-d67dc",
  storageBucket: "dentalharmony-d67dc.appspot.com",
  messagingSenderId: "1068372788849",
  appId: "1:1068372788849:web:2672dcf76e93c1306cbdd0",
  measurementId: "G-6PX0EKQVP1"
};

export default firebaseConfig;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}