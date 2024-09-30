// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "firebase/auth";

// Your Firebase Config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyAq0j5JJ99hvAU_gnVqamrYbKUrMl9pZNc",
    authDomain: "vitalis-dc374.firebaseapp.com",
    projectId: "vitalis-dc374",
    storageBucket: "vitalis-dc374.appspot.com",
    messagingSenderId: "70504060791",
    appId: "1:70504060791:web:897b21c2b52c34912ff372",
    measurementId: "G-X9HF7Q3VLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

/**
 * Sign up with email and password
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise} - Returns user credentials
 */
const signUpWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        console.error("Error signing up with email and password:", error);
        throw error;
    }
};

/**
 * Log in with email and password
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise} - Returns user credentials
 */
const loginWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        console.error("Error logging in with email and password:", error);
        throw error;
    }
};

/**
 * Sign up or log in using Google OAuth
 * @returns {Promise} - Returns Google user credentials
 */
const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    } catch (error) {
        console.error("Error logging in with Google:", error);
        throw error;
    }
};

/**
 * Sign up using Google OAuth
 * @returns {Promise} - Returns Google user credentials
 */
const signUpWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    } catch (error) {
        console.error("Error signing up with Google:", error);
        throw error;
    }
};

export { 
    signUpWithEmailPassword, 
    signUpWithGoogle, 
    loginWithEmailPassword, 
    loginWithGoogle 
};
