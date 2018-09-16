import { object, string } from 'yup';

export default object().shape({
  cardnumber: string()
    .matches(/^[0-9]+$/i, 'Cannot include characters')
    .length(16, 'Invalid card number')
    .trim()
    .required('Card number is required'),
  ccname: string()
    .trim()
    .required('Please enter your full name'),
  'cc-exp': string()
    .matches(/^[0-9]+$/i, 'Cannot include characters')
    .length(4, 'Invalid expiry date')
    .trim()
    .required('Card expiry is required'),
  cvc: string()
    .matches(/^[0-9]+$/i, 'Cannot include characters')
    .length(3, 'Invalid CVC number')
    .trim()
    .required('CVC number is required'),
});
