import {combineReducers} from 'redux';
import data from './dataReducer';
import auth from './authReducer';
import singleQuiz from './singleQuiz';

export default combineReducers({
  data,
  auth,
  singleQuiz
});
