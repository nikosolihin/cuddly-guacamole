import React from 'react';
import styled from 'react-emotion';
import Flickity from 'react-flickity-component';

const options = {
  pageDots: false,
  prevNextButtons: false,
};

const Carousel = styled('div')`
  background-color: transparent;
`;

const StyledFlickity = styled(Flickity)`
  background-color: transparent;
`;

export default () => (
  <Carousel>
    <StyledFlickity options={options} reloadOnUpdate>
      <img src="https://via.placeholder.com/350x150" />
      <img src="https://via.placeholder.com/350x150" />
      <img src="https://via.placeholder.com/350x150" />
    </StyledFlickity>
  </Carousel>
);
