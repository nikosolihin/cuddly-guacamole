import React from 'react';
import { push } from 'gatsby';
import { handleAuthentication } from 'utils/auth';
import Spinner from 'components/Spinner';

export default () => {
  handleAuthentication(() => push('/account'));
  return <Spinner />;
};
