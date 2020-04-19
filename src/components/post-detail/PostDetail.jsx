import React from 'react';
import './post-detail-style.scss';

const PostDetail = ({ post, children }) => {
  return (
    <div className='post-details ui card'>
      <div className='content'>
        <div className='header'>{post.title}</div>
        <div className='description'>
          <p>{post.body}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PostDetail;
