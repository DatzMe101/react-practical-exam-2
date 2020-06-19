import React from 'react';

const CommentDetail = ({ comment }) => {
  const { name, image, body } = comment;
  return (
    <div data-testid='comment-detail' className='comment'>
      <span className='avatar'>
        <img src={image} alt='User Avatar' />
      </span>
      <div className='content'>
        <span data-testid='author' className='author'>
          {name}
        </span>
        <div className='text'>{body}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
