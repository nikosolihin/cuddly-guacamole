import { css } from 'react-emotion';
import { colors as colorsVar, spacing as spacingVar, breakpoints, fontStack } from './variables';

export const colors = colorsVar;

export const spacing = spacingVar;

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
