import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD60bEOhMX9ATSufNGc_YIQpbdRpZYswZU",
  authDomain: "martelozzo-imoveis-13519.firebaseapp.com",
  projectId: "martelozzo-imoveis-13519",
  storageBucket: "martelozzo-imoveis-13519.appspot.com",
  messagingSenderId: "821141639170",
  appId: "1:821141639170:web:c85e10b8632a644667571b",
  measurementId: "G-Q65J17W89F",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, getDocs, addDoc };
