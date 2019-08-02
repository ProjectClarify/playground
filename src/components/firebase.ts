/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import firebase from '@firebase/app';
import '@firebase/auth';

import { store } from '../store.js';

import { setUser } from '../actions/user.js';
import { navigate } from '../actions/app.js';

import user from '../reducers/user.js';

store.addReducers({
  user
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB4SSgNQLHsU6ZOssO9bxWh3yOE1EGctPQ",
  authDomain: "clarify-32fcf.firebaseapp.com",
  databaseURL: "https://clarify-32fcf.firebaseio.com",
  projectId: "clarify",
  storageBucket: "clarify.appspot.com",
  messagingSenderId: "340173104977",
  appId: "1:340173104977:web:31e17e60e5d0c648"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  console.log(user);
  store.dispatch(setUser(user));
});

export { firebase };
