import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcI3ZSCD3qd8BFZ9iz92QUhbXL1ch9fj0",
  authDomain: "chatting-app-ebc4f.firebaseapp.com",
  projectId: "chatting-app-ebc4f",
  storageBucket: "chatting-app-ebc4f.appspot.com",
  messagingSenderId: "224198315992",
  appId: "1:224198315992:web:2edeb9f678be907de52cad",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAFLos9AgRrS_0a2NiQR6j_KOCMhwamoTM",

//   authDomain: "chatapp1-3b9ba.firebaseapp.com",

//   projectId: "chatapp1-3b9ba",

//   storageBucket: "gs://chatapp1-3b9ba.appspot.com",

//   messagingSenderId: "95370587677",

//   appId: "1:95370587677:web:6079545b9328069573a0f4",
// };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
