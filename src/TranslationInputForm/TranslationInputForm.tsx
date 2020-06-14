import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Button,
} from '@material-ui/core';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { InputField } from '../InputField';

interface TranslationInputFormProps {
  handleSubmit: (text: any) => void
}

const useStyles = makeStyles(() => createStyles({
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
  },
  input: {
    width: '75%',
  },
  button: {
    marginLeft: '5px',
    width: '20%',
  },
  errorMessage: {
    textAlign: 'left',
  },
}));

// { /* <input type="text"  />
//     {touched[field.name] &&
//       errors[field.name] && <div className="error">{errors[field.name]}</div>} */ }

export const TranslationInputForm: React.SFC<TranslationInputFormProps> = (props) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ text: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.text) {
          // errors.text = 'Required';
        } else if (
          /\S/.test(values.text)
        ) {
          // errors.text = 'Can\'t translate blank spaces';
        }

        return errors;
      }}
      validationSchema={Yup.object({
        text: Yup.string()
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values', values);
        props.handleSubmit(values.text);
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={classes.form}>
            <Field
              type="text"
              name="text"
              size="small"
              className={classes.input}
              component={InputField}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              GO!
            </Button>
          </div>
          <div className={classes.errorMessage}>
            <ErrorMessage
              name="text"
              component="div"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
