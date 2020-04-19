import { createSelector } from 'reselect';

const comment = (state) => state.comment;

export const selectComments = createSelector(
  [comment],
  ({ comments }) => comments
);
export const selectFetchingCommentsByPostId = createSelector(
  [comment],
  ({ fetchingCommentsByPostId }) => fetchingCommentsByPostId
);
