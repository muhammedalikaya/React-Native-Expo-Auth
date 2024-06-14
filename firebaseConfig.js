// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxYd6-160mxo_GeJ-sQql2Bf4_qlvFbrE",
  authDomain: "test-app-a345f.firebaseapp.com",
  projectId: "test-app-a345f",
  storageBucket: "test-app-a345f.appspot.com",
  messagingSenderId: "589762114137",
  appId: "1:589762114137:web:9f3f66a35e1251039f3748",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth'u AsyncStorage ile başlatın
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;
