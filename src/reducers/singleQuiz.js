import {FETCH_QUIZZES} from '../actions/types';

const defaultState = {
  quizName: '',

}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_QUIZZES:
      // return Object.assign({}, state, {
      //   quizzes:action.payload
      // })
    default:
      return state;
  }
}
