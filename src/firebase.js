import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFLos9AgRrS_0a2NiQR6j_KOCMhwamoTM",

  authDomain: "chatapp1-3b9ba.firebaseapp.com",

  projectId: "chatapp1-3b9ba",

  storageBucket: "chatapp1-3b9ba.appspot.com",

  messagingSenderId: "95370587677",

  appId: "1:95370587677:web:6079545b9328069573a0f4",

  measurementId: "G-1XJRLNK51V",
  databaseURL: "https://chat-app-b9dec-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
