import {FETCH_QUIZZES, UPDATE_QUIZ} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUIZZES:
      return action.payload;
      break;
    case UPDATE_QUIZ:
      return action.payload;
      break;
    default:
      return state;
  }
}
