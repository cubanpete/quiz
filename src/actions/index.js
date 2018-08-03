import {quizzesRef, authRef, provider} from '../config/firebase';
import {  FETCH_QUIZZES,
          UPDATE_QUIZ,
          NEW_QUIZ_ADDED,
          FETCH_USER
        } from './types';



// QUIZZES
export const addQuiz = (newQuiz, userID) => async dispatch => {
  quizzesRef.add({
    name:newQuiz,
    rating:0,
    date:new Date(),
    userID:userID
  }).then(ref => {
    dispatch({
      type: NEW_QUIZ_ADDED,
      payload: ref.id
    });
  })
}


export const deleteQuiz = quizID => async dispatch => {
  quizzesRef.doc(quizID).delete();
}


export const updateQuiz = (quizID, newName) => async dispatch => {
  quizzesRef.doc(quizID).set({name: newName})
    .then(function(){
      dispatch({
        type: UPDATE_QUIZ,
        payload: 'You just updated the quiz name:' + newName
      });
    })
}


export const fetchQuizzes = newQuiz => async dispatch => {
  quizzesRef
    .onSnapshot(function(snapshot) {
      dispatch({
        type: FETCH_QUIZZES,
        payload: snapshot.docs
      });
    });
}



//USERS
export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if(user){
      dispatch({
        type:FETCH_USER,
        payload:user
      })
    }else{
      dispatch({
        type:FETCH_USER,
        payload:null
      });
    }
  })
}


export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error =>{
      console.log(error);
    })
}

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      console.log('You are now signed out');
    })
    .catch(error => {
      console.log(error)
    })
}
