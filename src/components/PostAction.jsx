import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_NAME } from '../constants/routes';

const PostAction = ({ postId, hideViewButton }) => {
  return (
    <div className='extra content'>
      {!hideViewButton && (
        <Link
          className='ui blue basic button'
          to={`${PATH_NAME.POST}${postId}`}
        >
          View
        </Link>
      )}
      <button className='ui red basic button'>Delete</button>
    </div>
  );
};

export default PostAction;
