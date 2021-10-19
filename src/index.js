import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'

// using KH's config temporarily; need to find out where he gets databaseURL from!
const config = {
  apiKey: 'AIzaSyBpBnMi4P5d20UGg6FoIEM1pkT-94VK7Fo',
  authDomain: 'caffeinated-netflix.firebaseapp.com',
  databaseURL: 'https://caffeinated-netflix.firebaseio.com',
  projectId: 'caffeinated-netflix',
  storageBucket: 'caffeinated-netflix.appspot.com',
  messagingSenderId: '324836489806',
  appId: '1:324836489806:web:97c67b7299bf11cf92211f',
}

// do we to save this to a variable or can we just run?
const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)
