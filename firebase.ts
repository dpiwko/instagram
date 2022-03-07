// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYOeMR8-lnXkDGpdoli9KrBSz1NAt9hhE',
  authDomain: 'instagram-a3e47.firebaseapp.com',
  projectId: 'instagram-a3e47',
  storageBucket: 'instagram-a3e47.appspot.com',
  messagingSenderId: '1073398338001',
  appId: '1:1073398338001:web:733609dd1c1f9a4456d0f0',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
