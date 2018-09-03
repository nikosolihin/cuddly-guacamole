import React from 'react';
import { Heading, Subheading, Lede } from 'styles/typography';
import Carousel from '../Carousel';
import Card from '../Card';

export default () => (
  <>
    <Heading>Projects</Heading>
    <Carousel>{[<Card />, <Card />]}</Carousel>
    <Heading>I am a Heading</Heading>
    <Lede>Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</Lede>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
      odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
      lacinia congue felis in faucibus.
    </p>
    <Subheading>I am a Subheading</Subheading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem pariatur provident eaque, obcaecati laudantium
      officia dolores maxime illum assumenda. Dolor tenetur saepe voluptatem iure suscipit hic labore, consequuntur cum
      at.
    </p>
  </>
);
