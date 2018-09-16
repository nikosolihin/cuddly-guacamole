import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Spinner from 'components/Spinner';

const SubmitButton = styled('button')`
  color: ${p => (p.disabled ? 'white' : 'black')};
  background: ${p => (p.disabled ? 'red' : 'lavender')};
`;
SubmitButton.defaultProps = {
  type: 'submit',
};

const FormSubmit = ({ children, loading }) => (
  <SubmitButton disabled={loading}>{loading ? <Spinner /> : children}</SubmitButton>
);

FormSubmit.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

FormSubmit.defaultProps = {
  loading: false,
};

export default FormSubmit;
