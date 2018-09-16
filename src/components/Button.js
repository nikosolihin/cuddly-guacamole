import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Spinner from './Spinner';

const StyledButton = styled('button')`
  color: #000;
  font-weight: bold;
  background: #bada55;
  cursor: pointer;
`;
StyledButton.defaultProps = {
  type: 'button',
};

const Button = ({ children, loading, onClick }) => (
  <StyledButton onClick={onClick}>{loading ? <Spinner /> : children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;

/**
 * TODO: Is this really needed?
 */
