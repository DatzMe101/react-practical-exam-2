import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosMock from 'axios';
import faker from 'faker';
import { fetchCommentsByPostId } from '../redux/comment/comment-actions';
import { COMMENT_TYPES } from '../redux/comment/comment-types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock('axios');

describe('comment async action creator', () => {
  test('should expect payload to get some data on success fetch', async () => {
    faker.image.avatar = () => {
      return 'https://s3.amazonaws.com/uifaces/faces/twitter/dimaposnyy/128.jpg';
    };
    const expectedData = [
      {
        id: 1,
        postId: 1,
        name: 'John Doe',
        image: faker.image.avatar(),
        body: 'Lorem Ipsum',
        email: 'john.doe@gmail.com',
      },
    ];
    axiosMock.get.mockResolvedValueOnce({
      data: expectedData,
    });
    const expectedActions = [
      { type: COMMENT_TYPES.FETCH_COMMENT_STARTED },
      {
        type: COMMENT_TYPES.FETCH_COMMENT_SUCCESS,
        payload: expectedData,
      },
    ];
    const store = mockStore({ comment: [] });

    await store.dispatch(fetchCommentsByPostId());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('should expect payload to return failed action on failed fetch', async () => {
    const error = {
      message: 'Test error message',
    };
    axiosMock.get.mockRejectedValueOnce({
      ...error,
    });
    const expectedActions = [
      { type: COMMENT_TYPES.FETCH_COMMENT_STARTED },
      {
        type: COMMENT_TYPES.FETCH_COMMENT_FAILURE,
        payload: { error },
      },
    ];
    const store = mockStore({ comment: [] });

    await store.dispatch(fetchCommentsByPostId());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

jest.clearAllMocks();
