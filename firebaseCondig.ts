import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5lszeBoz4w_Fne8E35lEFWjZIPdvK_pM",
  authDomain: "verkian.firebaseapp.com",
  projectId: "verkian",
  storageBucket: "verkian.appspot.com",
  messagingSenderId: "842731976639",
  appId: "1:842731976639:web:0f01c7ceacc304c1e0930a",
  measurementId: "G-DRZBGBKECV",
};

export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
