import {FETCH_QUIZZES, UPDATE_QUIZ} from '../actions/types';

const defaultState = {
  showUpdateLabel: false,
  quizzes: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_QUIZZES:
      return Object.assign({}, state, {
        quizzes:action.payload
      })
    case UPDATE_QUIZ:
      return Object.assign({}, state, {
        showUpdateLabel: true
      })
    default:
      return state;
  }
}
