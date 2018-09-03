import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby';
import 'sanitize.css';
import UserContext, { defaultUserContext } from 'context/UserContext';
import { spacing } from 'styles';
import MobileNavigation from '../MobileNavigation';
import Header from './Header';
import Banner from '../Banner';

const Main = styled('main')`
  position: relative;
  margin: 0 auto;
  padding-left: ${spacing.lg};
  max-width: 600px;
`;

export default class Layout extends Component {
  state = {
    user: {
      ...defaultUserContext,
    },
  };

  render() {
    const { user } = this.state;
    const { location, children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              meta: siteMetadata {
                title
                description
                keywords
              }
            }
          }
        `}
        render={({
          site: {
            meta: { title, description, keywords },
          },
        }) => (
          <>
            <Helmet lang="en" title={title || ''} defaultTitle={title} titleTemplate="%s | YICF">
              <meta name="description" content={description} />
              <meta name="keywords" content={keywords} />
              <link rel="canonical" href={`https://gatsbyjs.org${location.pathname}`} />
            </Helmet>
            <UserContext.Provider value={user}>
              <Header />
              <Main>{children}</Main>
              <MobileNavigation />
            </UserContext.Provider>
          </>
        )}
      />
    );
  }
}
