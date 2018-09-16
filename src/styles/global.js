/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion';
import { fontStack, colors, spacing, weight } from './variables';

injectGlobal`
  /*
   * Regular
   */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    src: local('Karla'), local('Karla-Regular'), url(https://fonts.gstatic.com/s/karla/v6/qkBbXvYC6trAT7RVLtyU5rZP.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /*
   * Bold
   */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    src: local('Karla Bold'), local('Karla-Bold'), url(https://fonts.gstatic.com/s/karla/v6/qkBWXvYC6trAT7zuC8m5xLtlmgzD.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /*
   * Reboot
   */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-y: auto;
    &.frozen {
      overflow-y: hidden;
    }
  }

  html, body {
    font: ${weight.normal} 18px/1.7 ${fontStack};
    color: ${colors['gray-700']};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  [tabindex="-1"]:focus {
    outline: none !important;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: ${spacing.xs};
    font-weight: ${weight.bold};
    color: ${colors.black};
  }

  p {
    margin: 0;
    margin-bottom: ${spacing.md};
  }

  img {
    vertical-align: middle;
    display: block;
    max-width: 100%;
    height: auto;
  }

  [role="button"] {
    cursor: pointer;
  }

  a, a[href] {
    text-decoration: none;
    &:focus,
    &:hover {
      text-decoration: none;
    }
  }

  button,
  button:focus,
  button:active {
    outline: 0 !important;
    outline: none !important;
  }

  input,
  button,
  select,
  textarea {
    font-family: ${fontStack};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    margin: 0;
    display: block;
    font-size: inherit;
    padding: ${spacing.xxs} ${spacing.sm};
    line-height: 1.5;
    color: ${colors['gray-800']};
    display: block;
    background-color: transparent;
    background-image: none;
    border: 1px solid ${colors['gray-200']};
    border-radius: 2px;
    &:focus {
      outline: none;
    }
  }

  input {
    font-family: inherit;
    font-size: 1rem;
    padding: ${spacing.sm};
    line-height: 1;
    transition: all .1s ease-out;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: radio-container;
    -moz-user-focus: ignore;
    -moz-appearance: none;
  }

  textarea {
    resize: vertical;
  }  
`;
