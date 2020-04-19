import React from 'react';
import './no-post-available-style.scss';

const NoPostAvailable = () => {
  return (
    <div className='no-post-available'>
      <div className='no-post-icon'>
        <i className='clipboard list icon'></i>
        <div>No Post Available</div>
      </div>
    </div>
  );
};

export default NoPostAvailable;
