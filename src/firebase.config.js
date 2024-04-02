import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  //databaseURL:

const firebaseConfig = {
  apiKey: "AIzaSyB1RA2HjWCIeyzDtm3Eb6TIw6IjFqfR9jI",
  authDomain: "bentilzone-restaurant-f3ed0.firebaseapp.com",
  projectId: "bentilzone-restaurant-f3ed0",
  storageBucket: "bentilzone-restaurant-f3ed0.appspot.com",
  messagingSenderId: "538978326523",
  appId: "1:538978326523:web:0f097f1d42d27b02001d5e",
  measurementId: "G-QGL3TND46C",
  databaseURL:"bentilzone-restaurant-f3ed0.firebaseio.com"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
