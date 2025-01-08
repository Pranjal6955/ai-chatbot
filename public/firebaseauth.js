// firebaseauth.js
// Import the necessary functions from Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { signUpUser, loginUser, logOutUser } from 'firebaseauth.js';  // Corrected path

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOg0EGRUiwHuYygyCOzB58oozNa7-UOZ4",
    authDomain: "ai-chatbot-9b3c3.firebaseapp.com",
    projectId: "ai-chatbot-9b3c3",
    storageBucket: "ai-chatbot-9b3c3.firebasestorage.app",
    messagingSenderId: "600465635526",
    appId: "1:600465635526:web:4e0d842656f25b07af3fc7",
    measurementId: "G-M8DFPHR72D"
};

// Initialize Firebase and get services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Event listener for Sign Up
document.querySelector('.signup-btn').addEventListener('click', () => {
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    signUpUser(email, password)
        .then(user => {
            // Redirection is handled in firebase.js
            console.log('User signed up:', user);
        })
        .catch(error => {
            console.error('Error signing up:', error.message);
        });
});

// Event listener for Login
document.querySelector('.login-btn').addEventListener('click', () => {
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    loginUser(email, password)
        .then(user => {
            // Redirection is handled in firebase.js
            console.log('User logged in:', user);
        })
        .catch(error => {
            console.error('Error logging in:', error.message);
        });
});

// Event listener for Logout
document.querySelector('.logout-btn').addEventListener('click', () => {
    logOutUser()
        .then(() => {
            console.log('User logged out');
        })
        .catch(error => {
            console.error('Error logging out:', error.message);
        });
});

// Function to handle user signup
export const signUpUser = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log("User signed up: ", user);

            // Redirect to index.html after successful sign-up
            window.location.href = 'index.html'; // Redirect to the main page
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error during sign up: ", errorCode, errorMessage);
            throw new Error(errorMessage);
        });
};

// Function to handle user login
export const loginUser = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("User logged in: ", user);

            // Redirect to home.html after successful login
            window.location.href = 'src/home.html'; // Redirect to the home page in the src folder
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error during login: ", errorCode, errorMessage);
            throw new Error(errorMessage);
        });
};
