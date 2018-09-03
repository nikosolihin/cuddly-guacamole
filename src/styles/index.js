/* eslint no-unused-expressions: 0 */
import { css } from 'react-emotion';
import { colors as colorsVar, spacing as spacingVar, weight as weightVar, breakpoints, fontStack } from './variables';
import './global';

export const colors = colorsVar;

export const spacing = spacingVar;

export const weight = weightVar;

export const fonts = {
  body: fontStack,
};

export const from = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const to = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const flex = width => `
   display: flex;
  width: ${width};
`;
