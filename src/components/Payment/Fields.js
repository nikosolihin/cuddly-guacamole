export const fields = [
  {
    type: 'number',
    name: 'amount',
    label: 'Amount',
  },
  {
    type: 'text',
    name: 'cardnumber',
    label: 'Card Number',
    maxLength: '16',
    autoComplete: 'cc-number',
  },
  {
    type: 'text',
    name: 'ccname',
    label: 'Card Holder Name',
    autoComplete: 'cc-name',
  },
  {
    type: 'text',
    name: 'cc-exp',
    label: 'Expiry',
    maxLength: '4',
    autoComplete: 'cc-exp',
    placeholder: 'MM-YYYY',
    max: 2,
  },
  {
    type: 'text',
    name: 'cvc',
    label: 'CVN',
    maxLength: '3',
    autoComplete: 'cc-csc',
  },
];

export const initialValues = fields.reduce(
  (acc, val) => ({
    ...acc,
    [val.name]: '',
  }),
  {}
);
