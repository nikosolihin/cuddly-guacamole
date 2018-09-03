import React from 'react';
import styled from 'react-emotion';
import { spacing } from 'styles';

const Icon = styled('svg')`
  display: block;
  width: 1rem;
  height: 1rem;
  fill: currentColor;
  margin: 0 auto ${spacing.xs};
`;

export default ({ icon }) => (
  <Icon aria-hidden="true" role="presentation">
    <use xlinkHref={`#icon-${icon}`} />
  </Icon>
);
