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
    apiKey: "AIzaSyCT3eAmou73SmMIY1Cp6nRFjXj_ldn1vFw",
    authDomain: "otp-new-c9170.firebaseapp.com",
    projectId: "otp-new-c9170",
    storageBucket: "otp-new-c9170.appspot.com",
    messagingSenderId: "309327532114",
    appId: "1:309327532114:web:f9553e880a3c9686e90f8b",
    measurementId: "G-0FVCW7PC5X"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };