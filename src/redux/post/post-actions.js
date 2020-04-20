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

export const setPostStarted = () => ({
  type: POST_TYPES.SET_POST_STARTED,
});

export const setPostSuccess = (data) => ({
  type: POST_TYPES.SET_POST_SUCCESS,
  payload: data,
});

export const setPostFailure = (error = {}) => ({
  type: POST_TYPES.SET_POST_FAILURE,
  payload: { error },
});
export const setPostReset = () => ({
  type: POST_TYPES.SET_POST_RESET,
});
export const setPost = (post) => {
  return async (dispatch) => {
    dispatch(setPostStarted());
    try {
      const { data } = await postService.setPost(post);
      dispatch(setPostSuccess(data));
    } catch (error) {
      dispatch(setPostFailure(error));
    }
  };
};
export const deletePostStarted = () => ({
  type: POST_TYPES.DELETE_POST_STARTED,
});
export const deletePostSuccess = (data) => ({
  type: POST_TYPES.DELETE_POST_SUCCESS,
  payload: data,
});
export const deletePostFailure = (error = {}) => ({
  type: POST_TYPES.DELETE_POST_FAILURE,
  payload: { error },
});
export const deletePostReset = () => ({
  type: POST_TYPES.DELETE_POST_RESET,
});
export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch(deletePostStarted());
    try {
      await postService.deletePost(postId);
      dispatch(deletePostSuccess(postId));
    } catch (error) {
      dispatch(deletePostFailure(error));
    }
  };
};
