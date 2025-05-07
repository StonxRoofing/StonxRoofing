import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBhe531H_hNvDaLfoJbORdG1DZn8OfsjJc",
    authDomain: "stonexroofing-5f17b.firebaseapp.com",
    projectId: "stonexroofing-5f17b",
    storageBucket: "stonexroofing-5f17b.firebasestorage.app",
    messagingSenderId: "643083394096",
    appId: "1:643083394096:web:13736c502545cc7a78e1f5",
    measurementId: "G-HFH3REL3D1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };