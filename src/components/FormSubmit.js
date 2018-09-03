import React from 'react';
import styled from 'react-emotion';

const Submit = styled('button')`
  color: ${p => (p.disabled ? 'white' : 'black')};
  background: ${p => (p.disabled ? 'red' : 'lavender')};
`;
Submit.defaultProps = { type: 'submit' };

export default ({ disabled, children }) => <Submit disabled={disabled}>{children}</Submit>;

/**
 * TODO: Put spinner if disabled true
 */
