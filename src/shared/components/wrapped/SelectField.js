import React from 'react';
import Select from 'react-select'

const RenderedSelect = ({
  input,
  label,
  meta,
  classInput,
  options,
  valueSelected
}) => {
  return (
    <div className={`rendered-field ${classInput} ${meta.touched &&  meta.error && 'error'}`}>
      <label>{label}</label>
      <Select
        {...input}
        value={options?.find(c => c.value === input?.value.value)}
        classNamePrefix="react-select"
        options={options}
        placeholder="Selecione"
        onBlur={() => input.onBlur(input.value)}
      />
    </div>
  );
};

export default RenderedSelect;
