import React from 'react';
import styled from 'react-emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { colors, spacing, from } from 'styles';

const Banner = styled('div')`
  padding: ${spacing.md};
  background: ${colors.brand};
  ${from.tablet` background: lavender; `};
`;

export default ({ data }) => (
  <Banner>
    <span>Making a tax deductible donation in the United States? </span>
    <OutboundLink href="https://google.com/">Go to our US donation page</OutboundLink>.
  </Banner>
);

/**
 * TODO: Query graphql for text here
 */
