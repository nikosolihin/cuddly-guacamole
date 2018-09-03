import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { colors, spacing } from 'styles';
import { Subheading } from 'styles/typography';

const Card = styled(Link)`
  width: 70%;
  margin-right: ${spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: ${colors.white};
`;

export default () => (
  <Card to="/">
    <img
      src="https://creditcards.chase.com/K-Marketplace/images/modals/slate_credit_monitoring_lg.jpg"
      alt="alt text"
    />
    <Subheading>Cleaning</Subheading>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
      odio, vestibulum in vulputate at.
    </p>
  </Card>
);
