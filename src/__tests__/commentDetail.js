import React from 'react';
import { render, cleanup } from '@testing-library/react';
import faker from 'faker';
import CommentDetail from '../components/CommentDetail';

afterEach(cleanup);

const johnDoeComment = {
  name: 'John Doe',
  image: faker.image.avatar(),
  body: 'Lorem Ipsum',
};

describe('CommentDetails should render John Doe Comment', () => {
  test('should expect to render component without error', () => {
    render(<CommentDetail comment={johnDoeComment} />);
  });
  test('should expect to display name of author', () => {
    const { getByTestId } = render(<CommentDetail comment={johnDoeComment} />);
    expect(getByTestId(/author/i)).toHaveTextContent(johnDoeComment.name);
  });
});
