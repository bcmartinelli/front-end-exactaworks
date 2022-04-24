// @flow
import React from 'react';
import { FormHelperText } from '@material-ui/core';
import { TextField } from '../material';

type FieldProps = {
  input: Object,
  label: string,
  meta: Object,
  meta: Object,
  custom: Object,
  children: Node,
  value: string,
};

const RenderedSelect = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}: FieldProps) => (
  <div>
    <TextField
      select
      fullWidth
      title={label}
      margin="dense"
      error={touched && !!error}
      variant="outlined"
      {...input}
      {...custom}
    >
      {children}
    </TextField>
    {touched && !!error ? (
      <FormHelperText error={touched && !!error}>{error}</FormHelperText>
    ) : null}
  </div>
);

export default RenderedSelect;
