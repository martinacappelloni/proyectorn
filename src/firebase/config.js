import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCt2ncnjEewuNcenBw7emamCxrdoM-2m3Q",
    authDomain: "proyectofirebasemc.firebaseapp.com",
    projectId: "proyectofirebasemc",
    storageBucket: "proyectofirebasemc.appspot.com",
    messagingSenderId: "171219110999",
    appId: "1:171219110999:web:27831aee009bc86bf82712"
}

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()
