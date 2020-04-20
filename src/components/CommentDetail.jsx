import React from 'react';

const CommentDetail = ({ comment }) => {
  const { name, image, body } = comment;
  return (
    <div className='comment'>
      <span className='avatar'>
        <img src={image} alt='User Avatar' />
      </span>
      <div className='content'>
        <span className='author'>{name}</span>
        <div className='text'>{body}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
