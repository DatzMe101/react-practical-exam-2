import React from 'react';

const CommentDetail = ({ comment }) => {
  const { name, image, body } = comment;
  return (
    <div className='comment'>
      <a className='avatar'>
        <img src={image} alt='User Avatar' />
      </a>
      <div className='content'>
        <a className='author'>{name}</a>
        <div className='text'>{body}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
