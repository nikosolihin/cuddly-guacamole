import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
// import { logout } from '../../utils/auth';
import UserContext, { defaultUserContext } from '../../context/UserContext';
import 'sanitize.css';

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
    const { title, children } = this.props;
    return (
      <>
        <Helmet lang="en" title={title || ''} defaultTitle="Giving" titleTemplate="%s · Giving">
          <body />
        </Helmet>
        <UserContext.Provider value={user}>
          <Main>{children}</Main>
        </UserContext.Provider>
      </>
    );
  }
}
