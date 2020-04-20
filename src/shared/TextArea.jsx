import React from 'react';
import RenderError from './RenderError';

const TextArea = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <textarea type='text' {...input}></textarea>
      <RenderError {...meta} />
    </div>
  );
};

export default TextArea;
