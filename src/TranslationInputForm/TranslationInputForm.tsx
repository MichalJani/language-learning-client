import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Button, Grid,
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
  gridContainer: {
    padding: '20px 0',
  },
  gridItemInput: {
    paddingLeft: '3%',
  },
  gridItemButton: {
    padding: '1px 0 0 2%',
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
          <Grid
            container
            className={classes.gridContainer}
          >
            <Grid
              item
              xs={8}
              className={classes.gridItemInput}
            >
              <Field
                type="text"
                name="text"
                size="small"
                component={InputField}
              />
              <ErrorMessage
                name="text"
                component="div"
              />
            </Grid>
            <Grid
              item
              xs
              className={classes.gridItemButton}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
