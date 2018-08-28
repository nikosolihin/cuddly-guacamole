import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';

import { ProjectsIcon } from 'assets/mobile-nav-icons';
import presets, { colors } from '../utils/presets';
import typography, { rhythm, scale, options } from '../utils/typography';

const StyledMobileNavItem = styled(Link)`
  flex: 0 0 25%;
  line-height: 1;
  img {
    display: block;
    height: 3rem;
    margin: 0 auto;
  }
`;

const MobileNavItem = ({ linkTo, label, icon }) => (
  <StyledMobileNavItem to={linkTo}>
    <img src={icon} alt={`${label} Icon`} />
    <div>{label}</div>
  </StyledMobileNavItem>
);

const MobileNavigation = styled('div')`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${from.tablet`
    background: dodgerblue;
  `};
`;

export default () => (
  <MobileNavigation>
    <MobileNavItem linkTo="/projects" label="Projects" icon={ProjectsIcon} />
  </MobileNavigation>
);
