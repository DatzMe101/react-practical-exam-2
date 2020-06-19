import faker from 'faker';
import commentReducer from '../redux/comment/comment-reducer';
import { COMMENT_TYPES } from '../redux/comment/comment-types';

const INITIAL_STATE = {
  comments: [],
  error: null,
  fetchingCommentsByPostId: false,
};

const comments = [
  {
    name: 'John Doe',
    body: 'Lorem Ipsum',
    image: faker.image.avatar(),
  },
];

test('should expect to return initial state when type not valid', () => {
  expect(commentReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
});

test('should expect to return current state with fetchingCommentsByPostId set to true when started fetching data', () => {
  const action = {
    type: COMMENT_TYPES.FETCH_COMMENT_STARTED,
  };
  const expected = {
    ...INITIAL_STATE,
    fetchingCommentsByPostId: true,
  };
  expect(commentReducer(INITIAL_STATE, action)).toEqual(expected);
});

test('should expect to return current state with data and fetchingCommentsByPostId set to false when successfully fetched', () => {
  const action = {
    type: COMMENT_TYPES.FETCH_COMMENT_SUCCESS,
    payload: comments,
  };
  const expected = {
    ...INITIAL_STATE,
    comments: comments,
    fetchingCommentsByPostId: false,
  };
  expect(commentReducer(INITIAL_STATE, action)).toEqual(expected);
});

test('should expect to return current state with error and fetchingCommentsByPostId set to false when failed on fetching data', () => {
  const error = {
    message: 'Test error message',
  };
  const action = {
    type: COMMENT_TYPES.FETCH_COMMENT_FAILURE,
    payload: { error },
  };
  const expected = {
    ...INITIAL_STATE,
    error,
    fetchingCommentsByPostId: false,
  };
  expect(commentReducer(INITIAL_STATE, action)).toEqual(expected);
});
