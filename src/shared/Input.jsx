import React from 'react';
import RenderError from './RenderError';

const Input = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input type='text' {...input} />
      <RenderError {...meta} />
    </div>
  );
};

export default Input;
