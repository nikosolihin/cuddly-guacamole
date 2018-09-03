import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';

import FormField from './FormField';
import FormSubmit from './FormSubmit';

const fields = [
  {
    type: 'text',
    name: 'name',
    label: 'Full name',
    autoComplete: 'name',
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email address',
    autoComplete: 'email',
  },
  {
    type: 'text',
    name: 'cardnumber',
    label: 'Credit card number',
    maxLength: '16',
    autoComplete: 'cc-number',
  },
];

const initialValues = fields.reduce(
  (acc, val) => ({
    ...acc,
    [val.name]: '',
  }),
  {}
);

const profileSchema = object().shape({
  name: string().required('Please enter your full name'),
  email: string()
    .email('Invalid email address')
    .required('Email is required'),
  cardnumber: string()
    .matches(/^[0-9]+$/i, 'Cannot include characters')
    .length(16, 'Invalid card number')
    .trim()
    .required('Card number is required'),
});

const submitForm = (values, actions) => {
  const { setSubmitting, setErrors, setValues } = actions;
};

const renderFields = (touched, errors) =>
  fields.map(({ name, ...props }) => (
    <FormField {...props} key={name} name={name} errorMsg={errors[`${name}`]} isTouched={touched[`${name}`]} />
  ));

const ProfileForm = () => (
  <Formik initialValues={initialValues} validationSchema={profileSchema} onSubmit={submitForm}>
    {({ errors, touched, isSubmitting }) => (
      <Form>
        {renderFields(touched, errors)}
        <FormSubmit disabled={isSubmitting}>Submit</FormSubmit>
      </Form>
    )}
  </Formik>
);

export default ProfileForm;
