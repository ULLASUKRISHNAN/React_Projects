// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAN-rMV55-4l6bfvTq0JizvdOcjQgWOB7o',
  authDomain: 'tinder-clone-12344.firebaseapp.com',
  projectId: 'tinder-clone-12344',
  storageBucket: 'tinder-clone-12344.appspot.com',
  messagingSenderId: '50047389627',
  appId: '1:50047389627:web:1cda1e847c2e1773237e9e',
  measurementId: 'G-K216KST99M',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
