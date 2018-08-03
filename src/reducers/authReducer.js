import {FETCH_USER} from '../actions/types';

const defaultState = {
  userName:"",
  userID:"",
  userPhoto:""
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      let user = null;
      if(action.payload){
        user = Object.assign({}, state, {
          userName:action.payload.displayName,
          userID:action.payload.uid,
          userPhoto: action.payload.photoURL
        });
      }
      return user;
    default:
      return state;

  }
}
