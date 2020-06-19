import React from 'react';
import { cleanup, wait } from '@testing-library/react';
import faker from 'faker';
import axiosMock from 'axios';
import { store } from '../redux/store';
import CommentList from '../components/CommentList';
import render from '../util/renderWithRedux';

jest.mock('axios');

afterEach(cleanup);

const postId = 1;

test('should expect to render no comment div when no comment available', () => {
  const { getByTestId, queryByTestId } = render(
    <CommentList postId={postId} />,
    store
  );
  const commentList = getByTestId('comment-list');
  const noCommentElement = getByTestId('no-comment');
  const commentDetail = queryByTestId('comment-detail');

  expect(commentList).toContainElement(noCommentElement);
  expect(commentDetail).toBe(null);
});

test('should expect to render comment detail when there are comments', async () => {
  const comments = [
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
    data: comments,
  });

  const { getByTestId, queryByTestId } = render(
    <CommentList postId={postId} />
  );

  await wait(() => {
    const commentList = getByTestId('comment-list');
    const noCommentElement = queryByTestId('no-comment');
    const commentDetail = getByTestId('comment-detail');

    expect(commentList).toContainElement(commentDetail);
    expect(noCommentElement).toBe(null);
  });
});

jest.clearAllMocks();
