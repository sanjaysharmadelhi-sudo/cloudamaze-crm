// CloudAmaze Mini CRM — Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzwzn9imFDH0EPjDGY6RP09Hq36wbrsfc",
  authDomain: "cloudamaze-crm.firebaseapp.com",
  projectId: "cloudamaze-crm",
  storageBucket: "cloudamaze-crm.firebasestorage.app",
  messagingSenderId: "330747933363",
  appId: "1:330747933363:web:e7982ae0dc16794957b6c6",
  measurementId: "G-FMFNTN6DVS"
};

// Initialize Firebase (compat SDK)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Secondary app instance
const secondaryApp = firebase.initializeApp(firebaseConfig, 'Secondary');
const secondaryAuth = secondaryApp.auth();