import { USER_TYPES } from './user-types';

const INITIAL_STATE = {
  users: [],
  selectedUser: null,
  error: null,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_TYPES.FETCH_USER_STARTED:
      return { ...state, loading: true };
    case USER_TYPES.FETCH_USER_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case USER_TYPES.FETCH_USER_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    case USER_TYPES.SELECT_USER:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
