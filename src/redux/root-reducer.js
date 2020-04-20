import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user/user-reducer';
import postReducer from './post/post-reducer';
import commentReducer from './comment/comment-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  comment: commentReducer,
  form: formReducer,
});

export default rootReducer;
