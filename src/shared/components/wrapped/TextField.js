import React from 'react';

const RenderedTextField = ({
  label,
  placeholder,
  type,
  input,
  meta,
  maxLength,
  classInput = ''
}) => (
  <div className={`rendered-field ${classInput} ${meta.touched &&  meta.error && 'error'}`}>
    <label>{label}</label>
    <input {...input} maxLength={maxLength} type={type} placeholder={placeholder} />
  </div>
);

export default RenderedTextField;
