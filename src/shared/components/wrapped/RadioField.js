import React from 'react';

const RenderedRadio = ({
  label,
  placeholder,
  type,
  input,
  meta,
  classInput = ''
}) => (
  <div className={`rendered-radio-field ${classInput ?? ''} ${(meta.touched &&  meta.error) ? 'error' : ''}`}>
    <input {...input} type={type} placeholder={placeholder} />

    <span className="radiomark">
      <label>{label}</label>
    </span>
  </div>
);

export default RenderedRadio;
