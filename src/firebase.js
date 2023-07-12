import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFZhtWBVfg06GWG25VDpJ3wz8VsA1TgXE",
    authDomain: "line-clone-341a0.firebaseapp.com",
    projectId: "line-clone-341a0",
    storageBucket: "line-clone-341a0.appspot.com",
    messagingSenderId: "384065143476",
    appId: "1:384065143476:web:251fdbdded72911de20de1"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, db };

