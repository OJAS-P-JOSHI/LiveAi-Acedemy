// firebase.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyAiTo_ow5tzRYgbFHxFYmyGfWUWXjb-KYU",
  authDomain: "ai-for-all-28582.firebaseapp.com",
  projectId: "ai-for-all-28582",
  storageBucket: "ai-for-all-28582.appspot.co",
  messagingSenderId: "900109088148",
  appId: "1:900109088148:web:9135d7e23f896a4f340b81",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
