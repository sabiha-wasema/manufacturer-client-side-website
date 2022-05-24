// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTy4YQUFxwqfEvyTE-uN3oPLpssKp0urY",
    authDomain: "brush-ware-mag.firebaseapp.com",
    projectId: "brush-ware-mag",
    storageBucket: "brush-ware-mag.appspot.com",
    messagingSenderId: "632875088987",
    appId: "1:632875088987:web:1debb9401f220e116cd37e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;