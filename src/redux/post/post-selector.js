import { createSelector } from 'reselect';

const post = (state) => state.post;

export const selectPostsPerUser = createSelector(
  [post],
  ({ postsPerUser }) => postsPerUser
);
export const selectFetchingPostsPerUser = createSelector(
  [post],
  ({ fetchingPostsPerUser }) => fetchingPostsPerUser
);
export const selectPost = createSelector(
  [post],
  ({ selectedPost }) => selectedPost
);
export const selectFetchingPostById = createSelector(
  [post],
  ({ fetchingSelectedPost }) => fetchingSelectedPost
);
export const selectPostRequestStatus = createSelector(
  [post],
  ({ requestStatus }) => requestStatus
);
export const selectDeletePostRequestStatus = createSelector(
  [post],
  ({ deleteRequestStatus }) => deleteRequestStatus
);
