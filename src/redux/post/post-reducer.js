import { POST_TYPES } from './post-types';

const INITIAL_STATE = {
  postsPerUser: [],
  selectedPost: null,
  error: null,
  fetchingPostsPerUser: false,
  fetchingSelectedPost: false,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_TYPES.FETCH_POST_PER_USER_STARTED:
      return { ...state, fetchingPostsPerUser: true };
    case POST_TYPES.FETCH_POST_PER_USER_SUCCESS:
      return {
        ...state,
        postsPerUser: action.payload,
        fetchingPostsPerUser: false,
      };
    case POST_TYPES.FETCH_POST_PER_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        fetchingPostsPerUser: false,
      };
    case POST_TYPES.FETCH_POST_BY_ID_STARTED:
      return { ...state, fetchingSelectedPost: true };
    case POST_TYPES.FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        selectedPost: action.payload,
        fetchingSelectedPost: false,
      };
    case POST_TYPES.FETCH_POST_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        fetchingSelectedPost: false,
      };
    default:
      return state;
  }
};

export default postReducer;
