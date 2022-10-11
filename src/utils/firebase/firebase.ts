import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export interface IUser {
  nickname: string;
  email: string;
  password: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyDWEPT2nnDT3lH0Qq9VLvc-3v7zJpnhKb0",
  authDomain: "star-wars-auth.firebaseapp.com",
  projectId: "star-wars-auth",
  storageBucket: "star-wars-auth.appspot.com",
  messagingSenderId: "5313350874",
  appId: "1:5313350874:web:06dc8166eb60dce786a9e3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);





