import React from 'react';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

export const TranslationInputForm = (props: any) => (
  <div>
    <br />
    <br />

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
    // validationSchema={Yup.object({
    //   firstName: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   lastName: Yup.string()
    //     .max(20, "Must be 20 characters or less")
    //     .required("Required"),
    //   // email: Yup.string()
    //   //   .email("Invalid email addresss`")
    //   //   .required("Required"),
    //   // acceptedTerms: Yup.boolean()
    //   //   .required("Required")
    //   //   .oneOf([true], "You must accept the terms and conditions."),
    //   // jobType: Yup.string()
    //   //   // specify the set of valid values for job type
    //   //   // @see http://bit.ly/yup-mixed-oneOf
    //   //   .oneOf(
    //   //     ["designer", "development", "product", "other"],
    //   //     "Invalid Job Type"
    //   //   )
    //   //   .required("Required")
    // })}

      onSubmit={(values, { setSubmitting }) => {
        props.handleSubmit(values.text);
        setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="text" />
          <ErrorMessage name="text" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
