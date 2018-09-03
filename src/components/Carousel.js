import React from 'react';
import styled from 'react-emotion';
import Flickity from 'react-flickity-component';

const options = {
  cellAlign: 'left',
  pageDots: false,
  prevNextButtons: false,
};

const Carousel = styled('div')`
  background-color: transparent;
`;

const StyledFlickity = styled(Flickity)`
  background-color: transparent;
`;

export default ({ children }) => (
  <Carousel>
    <StyledFlickity options={options} reloadOnUpdate>
      {children}
    </StyledFlickity>
  </Carousel>
);
