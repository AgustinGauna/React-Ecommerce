import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4Y2fUCHyMEZG1Rs1YFFg5mHoEFcPZzK0",
  authDomain: "comision-agustin-gauna.firebaseapp.com",
  projectId: "comision-agustin-gauna",
  storageBucket: "comision-agustin-gauna.appspot.com",
  messagingSenderId: "265071343952",
  appId: "1:265071343952:web:638d1d98976823f6531455"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

