import { createSelector } from 'reselect';

const user = (state) => state.user;

export const selectUsers = createSelector([user], ({ users }) => users);
export const selectLoading = createSelector([user], ({ loading }) => loading);
export const selectSelectedUser = createSelector(
  [user],
  ({ selectedUser }) => selectedUser
);
