import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3FFf9QbLWU6G3S0-SH9GzHCwORFAeL_I",
  authDomain: "dropbox-clone-eef62.firebaseapp.com",
  projectId: "dropbox-clone-eef62",
  storageBucket: "dropbox-clone-eef62.appspot.com",
  messagingSenderId: "118266600914",
  appId: "1:118266600914:web:a1b6df0ebcbf5aa2017c0b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
