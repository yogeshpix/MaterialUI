import React from 'react';
import {
  RadioGroup as MUIRadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { FormControl, FormLabel } from '@material-ui/core';

function RadioGroup(props) {
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MUIRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
}

export default RadioGroup;
