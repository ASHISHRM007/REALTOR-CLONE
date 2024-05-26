// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9vDM9ZJL983IZ6V1rTT6nQmrd8gfIXMM",
  authDomain: "realtor-6f70d.firebaseapp.com",
  projectId: "realtor-6f70d",
  storageBucket: "realtor-6f70d.appspot.com",
  messagingSenderId: "26137086270",
  appId: "1:26137086270:web:e204e43d03ab21f846846f",
  measurementId: "G-QD0YWPM522"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);