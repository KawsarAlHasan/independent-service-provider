// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEJrtQSjo_8IY7wzCcn-AldRlViEOJ2-4",
  authDomain: "independent-sports-photographe.firebaseapp.com",
  projectId: "independent-sports-photographe",
  storageBucket: "independent-sports-photographe.appspot.com",
  messagingSenderId: "917767833432",
  appId: "1:917767833432:web:703fcbb9c815abb565c72d",
  measurementId: "G-JLFCQE08VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;