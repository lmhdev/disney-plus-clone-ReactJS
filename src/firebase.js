import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAslNYJR2y-MH7o8RXfzWnXE1rFbQBuAAw",
  authDomain: "disney-clone-22771.firebaseapp.com",
  projectId: "disney-clone-22771",
  storageBucket: "disney-clone-22771.appspot.com",
  messagingSenderId: "909042749852",
  appId: "1:909042749852:web:1de487d2ea320f29487859",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };

export default getFirestore();
