import React from 'react';

const RenderError = ({ error, touched }) => {
  if (!touched || !error) return null;
  return (
    <div className='ui error message'>
      <div className='header'>{error}</div>
    </div>
  );
};

export default RenderError;
