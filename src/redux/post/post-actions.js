import postService from '../../services/postService';
import { POST_TYPES } from './post-types';

export const fetchPostPerUserStarted = () => ({
  type: POST_TYPES.FETCH_POST_PER_USER_STARTED,
});

export const fetchPostPerUserSuccess = (data) => ({
  type: POST_TYPES.FETCH_POST_PER_USER_SUCCESS,
  payload: data,
});

export const fetchPostPerUserFailure = (error = {}) => ({
  type: POST_TYPES.FETCH_POST_PER_USER_FAILURE,
  payload: { error },
});

export const fetchPostsPerUser = (userId) => {
  return async (dispatch) => {
    dispatch(fetchPostPerUserStarted());
    try {
      const { data } = await postService.getPostsPerUser(userId);
      dispatch(fetchPostPerUserSuccess(data));
    } catch (error) {
      dispatch(fetchPostPerUserFailure(error));
    }
  };
};

export const fetchPostByIdStarted = () => ({
  type: POST_TYPES.FETCH_POST_BY_ID_STARTED,
});

export const fetchPostByIdSuccess = (data) => ({
  type: POST_TYPES.FETCH_POST_BY_ID_SUCCESS,
  payload: data,
});

export const fetchPostByIdFailure = (error = {}) => ({
  type: POST_TYPES.FETCH_POST_BY_ID_FAILURE,
  payload: { error },
});

export const fetchPostById = (postId) => {
  return async (dispatch) => {
    dispatch(fetchPostByIdStarted());
    try {
      const { data } = await postService.getPostById(postId);
      dispatch(fetchPostByIdSuccess(data));
    } catch (error) {
      dispatch(fetchPostByIdFailure(error));
    }
  };
};
