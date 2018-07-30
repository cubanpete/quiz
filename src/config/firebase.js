import * as firebase from 'firebase';
import { FirebaseConfig } from '../config/keys';
firebase.initializeApp(FirebaseConfig);

const db = firebase.firestore();
db.settings({timestampsInSnapshots:true});
export const quizzesRef = db.collection('quizzes');
