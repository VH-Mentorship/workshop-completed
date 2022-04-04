import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKy5xsnmp2gFIplEsLcd-a8rKwQ3dSkdE",
  authDomain: "todolist-2af6d.firebaseapp.com",
  databaseURL: "https://todolist-2af6d-default-rtdb.firebaseio.com",
  projectId: "todolist-2af6d",
  storageBucket: "todolist-2af6d.appspot.com",
  messagingSenderId: "217635445139",
  appId: "1:217635445139:web:f77e4680dd25ef5f26b066",
  measurementId: "G-T4C71HDVVS",
};

console.log(process.env.API_KEY);

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
