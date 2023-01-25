// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBayXcEEkNznK8uu_DItz6vn7ZXBHSGZ8g",
  authDomain: "next-ninja.firebaseapp.com",
  projectId: "next-ninja",
  storageBucket: "next-ninja.appspot.com",
  messagingSenderId: "714943513343",
  appId: "1:714943513343:web:333db850491e3e543ec2ca",
  measurementId: "G-2E7K168QSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);