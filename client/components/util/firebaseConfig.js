const { initializeApp } = require("firebase/app");
const { getAnalytics, isSupported } = require("firebase/analytics");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};
console.log("Firebase Config:", firebaseConfig);

const app = initializeApp(firebaseConfig);

// Only initialize analytics if supported and in a browser environment
if (typeof window !== "undefined") {
    isSupported().then(supported => {
        if (supported) {
            getAnalytics(app);
        }
    });
}
