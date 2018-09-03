import React from 'react';
import styled, { keyframes } from 'react-emotion';
import { colors } from 'styles';

const numDots = 3;

const pulse = keyframes`
  0% {
    transform: scale(0.75);
  }
  50% {
    opacity: 1;
    transform: translateY(-30px);
  }
  100% {
    transform: scale(0.75);
  }
`;

const Spinner = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  transform: scaleX(-1);
`;

const Dots = styled('div')`
  opacity: 0;
  width: 0.625rem;
  height: 0.625rem;
  margin: 0 0.25rem;
  border-radius: 50%;
  background: ${colors.green};
  animation: ${pulse} 0.9s ease-in-out infinite;
  ${Array(numDots)
    .fill(null)
    .map(
      (v, i) => `
        &:nth-child(${i + 1}) {
          animation-delay: -${i + 1}s;
        }
      `
    )};
`;

export default () => (
  <Spinner>
    {Array(numDots)
      .fill(null)
      .map((v, i) => (
        <Dots key={i} />
      ))}
  </Spinner>
);
