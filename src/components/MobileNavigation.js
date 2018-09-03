import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { spacing, colors, from, weight } from 'styles';
import Icon from './Icon';

const StyledMobileNavItem = styled(Link)`
  flex: 0 0 25%;
  color: ${colors['gray-600']};
  font-size: 0.825rem;
  font-weight: ${weight.bold};
  line-height: 1;
  text-align: center;
  padding: ${spacing.sm};
`;

const MobileNavItem = ({ linkTo, label, icon }) => (
  <StyledMobileNavItem to={linkTo}>
    <Icon icon={icon} />
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
  background-color: ${colors['gray-100']};
`;

export default () => (
  <MobileNavigation>
    <MobileNavItem linkTo="/projects" label="Projects" icon="activity" />
    <MobileNavItem linkTo="/dashboard" label="My Profile" icon="user" />
    <MobileNavItem linkTo="/help" label="Help" icon="help" />
    <MobileNavItem linkTo="/more" label="More" icon="more" />
  </MobileNavigation>
);
