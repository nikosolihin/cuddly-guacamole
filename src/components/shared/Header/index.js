import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';

const Header = styled('header')`
  display: flex;
`;

const HeaderLink = styled(Link)`
  display: block;
`;

export default () => (
  <Header>
    <HeaderLink to="/" />
  </Header>
);
