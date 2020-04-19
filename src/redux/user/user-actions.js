import userService from '../../services/userService';
import { USER_TYPES } from './user-types';

export const fetchUserStarted = () => ({
  type: USER_TYPES.FETCH_USER_STARTED,
});

export const fetchUserSuccess = (data) => ({
  type: USER_TYPES.FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFailure = (error = {}) => ({
  type: USER_TYPES.FETCH_USER_FAILURE,
  payload: { error },
});

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUserStarted());
    try {
      const data = await userService.getUsers();
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  };
};

export const selectUser = (user) => ({
  type: USER_TYPES.SELECT_USER,
  payload: user,
});
