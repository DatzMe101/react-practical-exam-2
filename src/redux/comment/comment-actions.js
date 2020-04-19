import commentService from '../../services/commentService';
import { COMMENT_TYPES } from './comment-types';

export const fetchCommentStarted = () => ({
  type: COMMENT_TYPES.FETCH_COMMENT_STARTED,
});

export const fetchCommentSuccess = (data) => ({
  type: COMMENT_TYPES.FETCH_COMMENT_SUCCESS,
  payload: data,
});

export const fetchCommentFailure = (error = {}) => ({
  type: COMMENT_TYPES.FETCH_COMMENT_FAILURE,
  payload: { error },
});

export const fetchCommentsByPostId = (postId) => {
  return async (dispatch) => {
    dispatch(fetchCommentStarted());
    try {
      const data = await commentService.getCommentsByPostId(postId);
      dispatch(fetchCommentSuccess(data));
    } catch (error) {
      dispatch(fetchCommentFailure(error));
    }
  };
};
