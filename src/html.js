import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'utils/icons';

const HTML = ({ htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents }) => (
  /* eslint jsx-a11y/html-has-lang: 0 */
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="application-name" content="YICF Giving" />
      <meta name="apple-mobile-web-app-title" content="YICF Giving" />
      <meta name="og:site_name" content="YICF Giving" />
      <meta name="og:type" content="website" />
      <meta property="fb:app_id" content="304225166758127" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#de5d39" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/flickity@2.1.2/dist/flickity.min.css" />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      <div id="portal" />
      <Icons />
      {postBodyComponents}
    </body>
  </html>
);

/* eslint react/require-default-props: 0 */
HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default HTML;
