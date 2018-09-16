import React from 'react';
import styled from 'react-emotion';
import Spinner from 'components/Spinner';

const Warning = styled('div')``;

export default () => (
  <Warning>
    <Spinner />
    <p>Processing, please wait. Do not click the refresh or back button or this transaction may be interrupted.</p>
  </Warning>
);
