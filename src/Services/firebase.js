import firebase from 'firebase';

const DB_CONFIG = {
    apiKey: "AIzaSyCw6MLe7A8BUV1ACOAziI10WJUSmCGBYGw",
    authDomain: "todolist-554a2.firebaseapp.com",
    databaseURL: "https://todolist-554a2.firebaseio.com",
    projectId: "todolist-554a2",
    storageBucket: "todolist-554a2.appspot.com",
    messagingSenderId: "180465678477",
    appId: "1:180465678477:web:e92824391785c26d33cac4",
    measurementId: "G-N7ZM82CB76"
};

firebase.initializeApp(DB_CONFIG);

export default firebase;