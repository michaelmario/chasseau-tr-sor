import  { initializeApp }  from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {FieldValue} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyA9RPy2ZT7XmeSEVo6oUxbz7KFb7AjSd4E",
  authDomain: "leportsite.firebaseapp.com",
  databaseURL: "https://leportsite.firebaseio.com",
  projectId: "leportsite",
  storageBucket: "leportsite.appspot.com",
  messagingSenderId: "560946376820",
  appId: "1:560946376820:web:93f3da76fda8b1b4f0e121"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init services
const projectFirestore = getFirestore(app)
const projectAuth = getAuth(app)
const projectStorage = getStorage(app)

// timestamp
const timestamp = FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage,timestamp , createUserWithEmailAndPassword,signInWithEmailAndPassword}

