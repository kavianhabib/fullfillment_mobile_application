import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCL42ZC6QQIxX0saMGcK742rBho1FLSdsQ",
    authDomain: "floramax-5e8cd.firebaseapp.com",
    projectId: "floramax-5e8cd",
    storageBucket: "floramax-5e8cd.appspot.com",
    messagingSenderId: "130542344413",
    appId: "1:130542344413:web:f9e3aabd0edae624e42334",
    measurementId: "G-5674Q4Q9GW"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;