import { POST_TYPES } from './post-types';
import { REQUEST_STATUS } from '../../constants/status';

const INITIAL_STATE = {
  postsPerUser: [],
  selectedPost: null,
  error: null,
  fetchingPostsPerUser: false,
  fetchingSelectedPost: false,
  isDeleting: false,
  requestStatus: REQUEST_STATUS.NO_ACTION,
  deleteRequestStatus: REQUEST_STATUS.NO_ACTION,
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
    case POST_TYPES.SET_POST_STARTED:
      return { ...state, requestStatus: REQUEST_STATUS.PROCESSING };
    case POST_TYPES.SET_POST_SUCCESS:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.SUCCEED,
        postsPerUser: [...state.postsPerUser, action.payload],
      };
    case POST_TYPES.SET_POST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        requestStatus: REQUEST_STATUS.FAILED,
      };
    case POST_TYPES.SET_POST_RESET:
      return { ...state, requestStatus: REQUEST_STATUS.NO_ACTION };
    case POST_TYPES.DELETE_POST_STARTED:
      return { ...state, deleteRequestStatus: REQUEST_STATUS.PROCESSING };
    case POST_TYPES.DELETE_POST_SUCCESS:
      return {
        ...state,
        deleteRequestStatus: REQUEST_STATUS.SUCCEED,
        postsPerUser: state.postsPerUser.filter(
          (post) => post.id !== action.payload
        ),
      };
    case POST_TYPES.DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        deleteRequestStatus: REQUEST_STATUS.FAILED,
      };
    case POST_TYPES.DELETE_POST_RESET:
      return { ...state, deleteRequestStatus: REQUEST_STATUS.NO_ACTION };
    default:
      return state;
  }
};

export default postReducer;
