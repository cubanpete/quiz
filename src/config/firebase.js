//GENERAL FIREBASE INIT
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseConfig } from '../config/keys';
firebase.initializeApp(FirebaseConfig);

//FIRESTORE
const db = firebase.firestore();
db.settings({timestampsInSnapshots:true});
export const quizzesRef = db.collection('quizzes');

//FIREBASE AUTH
export const authRef = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
