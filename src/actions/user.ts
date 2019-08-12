/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const SET_USER = 'SET_USER';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_USER_FIRESTORE_DOC = 'SET_USER_FIRESTORE_DOC';

export const reportSurveyItem = (usersDatabaseDocument: Object, surveyItem: Object) => {
    // to be called as store.dispatch(reportSurveyItem(userDocObject, surveyItem)), i.e.
    // after obtaining userDocObject from store via a store connection.
    // - Needs an established data structure
    // - Needs button-driven experiment 
    // - Need models for surveyItem, feedbackPrediction, and habitCompletion
};

export const reportFeedbackPrediction = (usersDatabaseDocument: Object, feedbackPrediction: Object) => {

};

export const reportHabitCompletion = (usersDatabaseDocument: Object, habitCompletion: Object) => {

};

export const setUser = (user: Object) => {
  return {
    type: SET_USER,
    user
  };
};

export const setUserData = (userData: Object) => {
  return {
    type: SET_USER_DATA,
    userData
  };
};

export const setUserFirestoreDocument = (userFirestoreDocument: Object) => {
  return {
    type: SET_USER_FIRESTORE_DOC,
    userFirestoreDocument
  };
};


