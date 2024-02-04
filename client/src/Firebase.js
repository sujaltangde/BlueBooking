// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjTOcpOoU006c-wcl1B63slCL51gNjMJk",
  authDomain: "bluebooking-6b4ec.firebaseapp.com",
  projectId: "bluebooking-6b4ec",
  storageBucket: "bluebooking-6b4ec.appspot.com",
  messagingSenderId: "363344195883",
  appId: "1:363344195883:web:90ea2096045b4a6cf6556e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const signInSignUpWithGoogle = async () => {
  try {
    
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    console.log("Helllo",{name: user.displayName, email: user.email})

    return {name: user.displayName, email: user.email} ;

    
  } catch (error) {
    // Handle errors, such as user cancellation or authentication failure
    console.error("Google Sign In Error:", error.message);
    return null;
  }
};





