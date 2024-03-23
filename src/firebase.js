
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCEpGJSNQtUGZ4v0vCYq56u4msjYygBxiQ",
  authDomain: "react-portfolio-sohail.firebaseapp.com",
  projectId: "react-portfolio-sohail",
  storageBucket: "react-portfolio-sohail.appspot.com",
  messagingSenderId: "411169061619",
  appId: "1:411169061619:web:8e94145f5ec2d695fd5586"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();