import React from 'react';
import {
  TextField,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface InputFieldProps{
  field: any,
  form: any,
}

const useStyles = makeStyles(() => createStyles({
  materialTextField: {
    width: '100%',
  },
}));

export const InputField:React.SFC<InputFieldProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.materialTextField}
      {...field}
      {...props}
      type="text"
      name="text"
      id="outlined-basic"
      variant="outlined"
    />
  );
};
