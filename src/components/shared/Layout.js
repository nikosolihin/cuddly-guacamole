import React, { Component } from 'react';
import styled from 'react-emotion';
import { push } from 'gatsby';
import 'sanitize.css';
import AlertContext, { defaultAlertContext } from 'context/AlertContext';
import PaymentContext, { defaultPaymentContext } from 'context/PaymentContext';
import { spacing } from 'styles';
import { logout, getUserInfo } from 'utils/auth';
import MobileNavigation from '../MobileNavigation';
import Notification from '../Notification';
import SiteMetadata from './SiteMetadata';
import Header from './Header';

const Main = styled('main')`
  position: relative;
  margin: 0 auto;
  padding-left: ${spacing.lg};
  max-width: 600px;
`;

export default class Layout extends Component {
  state = {
    alert: {
      ...defaultAlertContext,
      setAlert: message =>
        this.setState(({ alert }) => ({
          alert: { ...alert, message },
        })),
      resetAlert: () =>
        this.setState(({ alert }) => ({
          alert: { ...alert, message: '' },
        })),
    },
    payment: {
      ...defaultPaymentContext,
      handleCreateCharge: () => {},
    },
    user: {
      handleLogout: () => {
        // this.setState({ user: defaultUserContext });
        logout(() => push('/'));
      },
    },
  };

  componentDidMount = () =>
    getUserInfo().then(profile => {
      console.log(profile);
      // Get past donations API call here, then set state...
      // this.setState(state => ({
      //   user: { ...state.user },
      // }));
    });

  render() {
    const { alert, payment, user } = this.state;
    const { children } = this.props;
    return (
      <>
        <SiteMetadata />
        <PaymentContext.Provider value={payment}>
          <AlertContext.Provider value={alert}>
            <Header />
            {alert.message && <Notification />}
            <Main>{children}</Main>
            <MobileNavigation />
          </AlertContext.Provider>
        </PaymentContext.Provider>
      </>
    );
  }
}
