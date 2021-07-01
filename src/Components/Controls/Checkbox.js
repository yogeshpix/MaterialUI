import React from 'react';
import { Checkbox as MUICheckbox, FormControlLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

export default function Checkbox(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={<MUICheckbox />}
        name={name}
        color='primary'
        checked={value}
        onChange={(e) => onChange(convertToDefEventPara(name, e.target))}
        label={label}
      ></FormControlLabel>
    </FormControl>
  );
}
