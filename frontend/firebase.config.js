// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyB-DDzta_-1lo3OMhVPaOf0v4hnWnTxJ8w",
//     authDomain: "otp-project-be21a.firebaseapp.com",
//     projectId: "otp-project-be21a",
//     storageBucket: "otp-project-be21a.appspot.com",
//     messagingSenderId: "369810372516",
//     appId: "1:369810372516:web:bb370c9bc1c3ab1ad9f331",
//     measurementId: "G-Z1SYS0DF5H"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCxlC6AJvvLBuul7X8C0Ev5IjAxODi9HfE",
  authDomain: "cooasistech.firebaseapp.com",
  projectId: "cooasistech",
  storageBucket: "cooasistech.appspot.com",
  messagingSenderId: "523674716469",
  appId: "1:523674716469:web:7f2ea5c2d0a3e74bb7e47c",
  measurementId: "G-H1CYY42D4M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
