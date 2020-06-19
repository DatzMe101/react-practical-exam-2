import React from 'react';
import axiosMock from 'axios';
import faker from 'faker';
import userEvent from '@testing-library/user-event';
import { cleanup, wait } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import render from '../util/renderWithReduxRouter';
import App from '../components/App';
import { store } from '../redux/store';
import { PATH_NAME } from '../constants/routes';

jest.mock('axios');

afterEach(cleanup);

test('should render member list component on home page', () => {
  const { getByTestId } = render(<App />, { store });
  const app = getByTestId('app');
  const memberList = getByTestId('member-list');
  expect(app).toContainElement(memberList);
});

test('should render post page when route is post', async () => {
  const history = createMemoryHistory();
  history.push(`${PATH_NAME.POST}1`);
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
  const { getByTestId } = render(<App />, { store, history });
  const app = getByTestId('app');
  await wait(() => {
    const postPage = getByTestId('post-container');
    expect(app).toContainElement(postPage);
  });
});

test('should render create post component when route is create new', async () => {
  const history = createMemoryHistory();
  history.push(`${PATH_NAME.POST}new`);
  const initialState = {
    user: {
      selectedUser: {
        id: 1,
      },
    },
  };
  const { getByTestId } = render(<App />, { initialState, history });
  const app = getByTestId('app');
  const createPost = getByTestId('create-post');
  expect(app).toContainElement(createPost);
});

test('should render member list component when route is create new and no selected user', async () => {
  const history = createMemoryHistory();
  history.push(`${PATH_NAME.POST}new`);
  const { getByTestId, queryByTestId } = render(<App />, { store, history });
  const app = getByTestId('app');
  await wait(() => {
    const memberList = getByTestId('member-list');
    const createPost = queryByTestId('create-post');
    expect(app).toContainElement(memberList);
    expect(createPost).toBe(null);
  });
});

test('should expect to route to home when home is clicked', async () => {
  const history = createMemoryHistory();
  history.push(`${PATH_NAME.POST}new`);
  const initialState = {
    user: {
      selectedUser: {
        id: 1,
      },
    },
  };
  const { getByTestId, queryByTestId } = render(<App />, {
    initialState,
    history,
  });
  const app = getByTestId('app');
  const homeLink = getByTestId('home-link');
  userEvent.click(homeLink);
  const memberList = getByTestId('member-list');
  const createPost = queryByTestId('create-post');
  expect(app).toContainElement(memberList);
  expect(createPost).toBe(null);
});

jest.clearAllMocks();
