/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Button, TextField, Grid, Paper,
} from '@material-ui/core';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import * as Yup from 'yup';

const useStyles = makeStyles((theme: Theme) => createStyles({
  materialTextField: {
    width: '100%',
    // marginLeft: '2%',
  },
  gridContainer: {
    paddingBottom: '20px',
  },
  gridItemInput: {
    paddingLeft: '3%',
  },
  gridItemButton: {
    paddingLeft: '3%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  submitButton: {
    marginLeft: '2%',
  },
  title: {
    flexGrow: 1,
  },

}));


const MaterialInputField = ({
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
    // label="Outlined"
      variant="outlined"
    />
  );
};
// { /* <input type="text"  />
//     {touched[field.name] &&
//       errors[field.name] && <div className="error">{errors[field.name]}</div>} */ }


export const TranslationInputForm = (props: any) => {
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
          {/* <Grid container spacing={3}>

              <Grid item xs={12}>


                <Paper className={classes.paper}> */}

          <Grid container alignContent="center" justify="center" className={classes.gridContainer}>

            <Grid item xs={8} className={classes.gridItemInput}>
              {/* <div /> */}
              <Field type="text" name="text" size="small" component={MaterialInputField} />
              <ErrorMessage name="text" component="div" />

            </Grid>
            <Grid item xs={4} className={classes.gridItemButton}>
              <Button type="submit" disabled={isSubmitting} variant="contained" color="primary" className={classes.submitButton}>
                Submit
              </Button>
            </Grid>
            {/* <Grid> */}

            {/* */}
            {/* </Grid> */}

          </Grid>

          {/* </Paper>

              </Grid>


              <Grid item xs={4}>


                <Paper className={classes.paper} />

              </Grid>
            </Grid> */}


        </Form>
      )}
    </Formik>

  );
};
