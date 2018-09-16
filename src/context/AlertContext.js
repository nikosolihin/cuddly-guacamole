import React from 'react';

export const defaultAlertContext = {
  message: '',
  setAlert: () => {},
  resetAlert: () => {},
};

const AlertContext = React.createContext(defaultAlertContext);

export const withAlert = Component => props => (
  <AlertContext.Consumer>{context => <Component {...props} {...context} />}</AlertContext.Consumer>
);

export default AlertContext;
