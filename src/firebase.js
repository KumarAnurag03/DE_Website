import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyCQDkWPP3NfqDNAgYT9bZEPACdu4UM5aNM",
    authDomain: "dream-employment-app.firebaseapp.com",
    projectId: "dream-employment-app",
    storageBucket: "dream-employment-app.appspot.com",
    messagingSenderId: "44780810570",
    appId: "1:44780810570:web:01686a9d7404b82e8811b3",
    measurementId: "G-0V1H3FLPHY"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};