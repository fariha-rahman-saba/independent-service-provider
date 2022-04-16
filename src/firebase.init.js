// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQwTbSLIYcYb07Z2Dx2SFUHGutEUMT2Wc",
    authDomain: "independent-service-prov-8d2df.firebaseapp.com",
    projectId: "independent-service-prov-8d2df",
    storageBucket: "independent-service-prov-8d2df.appspot.com",
    messagingSenderId: "69449117226",
    appId: "1:69449117226:web:7ab61a937a8b1780d35d53",
    measurementId: "G-78KXB5LMM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
