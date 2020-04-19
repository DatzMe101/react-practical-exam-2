import React from 'react';

const Loader = ({ isLoading, loaderText, children }) => {
  if (!isLoading) return children;
  return (
    <div className='ui active inverted dimmer'>
      <div className='ui text loader'>{loaderText}</div>
    </div>
  );
};

export default Loader;
