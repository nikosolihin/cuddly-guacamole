import React from 'react';
import styled from 'react-emotion';
import Icon from 'components/Icon';

const Logotype = styled(Icon)`
  fill: red;
`;
Logotype.defaultProps = {
  name: 'help',
};

export default () => (
  <>
    <Logotype />
  </>
);
