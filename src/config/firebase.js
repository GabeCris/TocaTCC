import { initializeApp } from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaIRfksxXacqypqrCNUgcEQ87yuucpyHQ",
    authDomain: "toca-37b55.firebaseapp.com",
    projectId: "toca-37b55",
    storageBucket: "toca-37b55.appspot.com",
    messagingSenderId: "258990960992",
    appId: "1:258990960992:web:5d49d20aae264888d4ee05",
    measurementId: "G-C7XHL6HK1X"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);