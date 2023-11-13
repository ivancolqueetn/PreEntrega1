import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVSztlkUYdfDRc95o899T_dbpXF9cLy88",
  authDomain: "reactapp-ff245.firebaseapp.com",
  projectId: "reactapp-ff245",
  storageBucket: "reactapp-ff245.appspot.com",
  messagingSenderId: "882720101252",
  appId: "1:882720101252:web:9b337dd55e6ce4b9f1c3d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        <ToastContainer />
    </BrowserRouter>
    
  </React.StrictMode>,
)
