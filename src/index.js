import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBxCudjt0tOPhRiHhlWDUBWTgvbpqpWSs",
  authDomain: "entregafinal-react-aa831.firebaseapp.com",
  projectId: "entregafinal-react-aa831",
  storageBucket: "entregafinal-react-aa831.appspot.com",
  messagingSenderId: "46045223452",
  appId: "1:46045223452:web:33703176f9f704d6bb1dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
