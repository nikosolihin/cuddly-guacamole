import React from 'react';
import styled from 'react-emotion';
import { Formik, Field, Form } from 'formik';
import yup, { string, object, number } from 'yup';

const SubmitButton = styled('button')`
  color: ${p => (p.disabled ? 'white' : 'black')};
  background: ${p => (p.disabled ? 'red' : 'lavender')};
`;

SubmitButton.defaultProps = { type: 'submit' };

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required!'),
  card: yup
    .number()
    .integer()
    .min(16)
    .max(16),
});

const initial = {
  email: '',
  name: 'Niko Solihin',
};

const submitForm = (values, actions) => {
  const { setSubmitting, setErrors, setValues } = actions;
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2));
    setErrors({ email: 'Damn', name: 'Cool name yo!' });
    setValues({ email: 'new email value', name: 'your new name' });
    setSubmitting(false);
  }, 1000);
};

const ProfileForm = () => (
  <Formik
    initialValues={initial}
    validationSchema={schema}
    onSubmit={submitForm}
    render={({ errors, touched, isSubmitting }) => (
      <Form>
        <Field type="email" name="email" placeholder="Email address" />
        {errors.email && touched.email && <div>{errors.email}</div>}

        <Field type="text" name="name" placeholder="Your name" />
        {errors.name && touched.name && <div>{errors.name}</div>}

        <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
      </Form>
    )}
  />
);

export default ProfileForm;
