// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiUFNs3rEQu7hr_OX6NCMx09wGN06rCvE",
    authDomain: "travel-56f07.firebaseapp.com",
    projectId: "travel-56f07",
    storageBucket: "travel-56f07.appspot.com",
    messagingSenderId: "519887541892",
    appId: "1:519887541892:web:e8137162ddf7b2c53e94d1",
    measurementId: "G-S3DQ5H6QM8"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();