import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Brand from './Brand';

const Header = styled('header')`
  display: flex;
`;

const HomeLink = styled(Link)`
  display: block;
`;

export default () => (
  <Header>
    <HomeLink to="/">
      <Brand />
    </HomeLink>
  </Header>
);
