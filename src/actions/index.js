import {quizzesRef} from '../config/firebase';
import {FETCH_QUIZZES, UPDATE_QUIZ} from './types';

export const addQuiz = newQuiz => async dispatch => {
  quizzesRef.add({
    name:newQuiz,
    rating:0,
    date:new Date()
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
