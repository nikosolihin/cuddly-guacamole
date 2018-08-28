import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import 'sanitize.css';
import UserContext, { defaultUserContext } from 'context/UserContext';
import Header from './Header';
import Banner from '../Banner';

const Main = styled('main')`
  display: block;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
`;

export default class Layout extends Component {
  state = {
    user: {
      ...defaultUserContext,
    },
  };

  render() {
    const { user } = this.state;
    const { location, title, children } = this.props;
    return (
      <>
        <Helmet lang="en" title={title || ''} defaultTitle="Giving" titleTemplate="%s | Giving">
          <html lang="en" />
          <meta name="twitter:site" content="@gatsbyjs" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="GatsbyJS" />
          <link rel="stylesheet" type="text/css" href="https://unpkg.com/flickity@2.1.2/dist/flickity.min.css" />
          <link rel="canonical" href={`https://gatsbyjs.org${location.pathname}`} />
        </Helmet>
        <UserContext.Provider value={user}>
          <Banner />
          <Header />
          <Main>{children}</Main>
        </UserContext.Provider>
      </>
    );
  }
}
