import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyAMrUbyXTqcMFOmsx2dm7vSPoapQY66WAo",
    authDomain: "dream-employment.firebaseapp.com",
    projectId: "dream-employment",
    storageBucket: "dream-employment.appspot.com",
    messagingSenderId: "272583459339",
    appId: "1:272583459339:web:2dc127f170333dbde93d0e",
    measurementId: "G-KR5HZ522J9"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};