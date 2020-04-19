import { COMMENT_TYPES } from './comment-types';

const INITIAL_STATE = {
  comments: [],
  error: null,
  fetchingCommentsByPostId: false,
};

const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENT_TYPES.FETCH_COMMENT_STARTED:
      return { ...state, fetchingCommentsByPostId: true };
    case COMMENT_TYPES.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        fetchingCommentsByPostId: false,
      };
    case COMMENT_TYPES.FETCH_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        fetchingCommentsByPostId: false,
      };
    default:
      return state;
  }
};

export default commentReducer;
