// Firebase App (the core Firebase SDK) is always required and must be listed first
const firebase = require('firebase/app');

// Add the Firebase products that you want to use
require('firebase/auth');

const firebaseConfig = require('./keys.json');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
