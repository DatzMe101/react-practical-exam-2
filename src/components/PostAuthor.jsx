import React from 'react';
const PostAuthor = ({ user }) => {
  return (
    <div className='extra content'>
      <div className='right floated author'>
        <img className='ui avatar image' src={user.image} alt='Author Avatar' />
        {user.name}
      </div>
    </div>
  );
};

export default PostAuthor;
