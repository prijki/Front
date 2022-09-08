import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDSQhQAMuw55QizsovuxXYZCF59lDQldVE",
    authDomain: "projetopjg.firebaseapp.com",
    projectId: "projetopjg",
    storageBucket: "projetopjg.appspot.com",
    messagingSenderId: "735931727346",
    appId: "1:735931727346:web:61a66e38d1b3915964ff6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore();


export { app, db,}