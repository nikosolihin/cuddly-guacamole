import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      {
        site {
          meta: siteMetadata {
            url
            title
            image
            description
            keywords
          }
        }
      }
    `}
    render={({
      site: {
        meta: { url, title, image, description, keywords },
      },
    }) => (
      <Helmet defaultTitle={title} titleTemplate={`%s · ${title}`}>
        <html lang="en" />
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
      </Helmet>
    )}
  />
);
