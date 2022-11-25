// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc1pFLlyAe2E95xEjgPydqKfr02kVodMo",
    authDomain: "car-selling-f1fd9.firebaseapp.com",
    projectId: "car-selling-f1fd9",
    storageBucket: "car-selling-f1fd9.appspot.com",
    messagingSenderId: "460857977569",
    appId: "1:460857977569:web:6a98e53ec693bea86c25a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;