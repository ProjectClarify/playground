/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { SET_USER, SET_USER_DATA, SET_USER_FIRESTORE_DOC } from '../actions/user.js';

const user = (state = {currentUser: null, userData: null, userFirestoreDocument: null}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.user
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.userData
      };
    case SET_USER_FIRESTORE_DOC:
      return {
        ...state,
        userFirestoreDocument: action.userFirestoreDocument
      };
    default:
      return state;
  }
};

export default user;
