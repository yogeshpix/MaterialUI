import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
      width: '80%',
    },
  },
}));

export function useForm(initialFieldValues) {
  const [values, setValues] = useState(initialFieldValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}

export function Form(props) {
  const classes = useStyles();
  return <form className={classes.root}>{props.children}</form>;
}
