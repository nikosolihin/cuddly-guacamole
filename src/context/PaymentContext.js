import React from 'react';
import axios from 'axios';
import cuid from 'cuid';

const api = process.env.API_BASE;
const chargeUrl = process.env.API_CHARGE;

export const defaultPaymentContext = {
  loading: false,
  id: '',
  status: '',
  authId: '',
  authURL: '',
  handleCreateCharge: () => {},
};

export const createCharge = (token_id, amount, cvn) => {
  const external_id = cuid();
  axios
    .post(`${api}${chargeUrl}`, {
      token_id,
      external_id,
      amount,
      cvn,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

const PaymentContext = React.createContext(defaultPaymentContext);

export const withPayment = Component => props => (
  <PaymentContext.Consumer>{context => <Component {...props} {...context} />}</PaymentContext.Consumer>
);

export default PaymentContext;
