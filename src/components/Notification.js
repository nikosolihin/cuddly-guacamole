import React from 'react';
import styled from 'react-emotion';
import { withAlert } from 'context/AlertContext';
import Icon from './Icon';

const StyledNotification = styled('div')`
  cursor: pointer;
`;

const Notification = ({ message, resetAlert }) => (
  <StyledNotification>
    <p>{message}</p>
    <button type="button" onClick={resetAlert}>
      <Icon name="close" />
    </button>
  </StyledNotification>
);

export default withAlert(Notification);
