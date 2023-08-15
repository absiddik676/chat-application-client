// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCisxCJpKg5tx6mh9eOREIl5cElMimpaJ4",
  authDomain: "chat-application-a70db.firebaseapp.com",
  projectId: "chat-application-a70db",
  storageBucket: "chat-application-a70db.appspot.com",
  messagingSenderId: "837850321254",
  appId: "1:837850321254:web:96af34108efe7105b478a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;