import Xendit from 'xendit-js-node';

Xendit.setPublishableKey(process.env.XENDIT_KEY);

const isValid = ({ card_number, card_exp_month, card_exp_year, card_cvn }) =>
  Xendit.card.validateCardNumber(card_number) &&
  Xendit.card.validateExpiry(card_exp_month, card_exp_year) &&
  Xendit.card.validateCvn(card_cvn);

export const createToken = ({ cardnumber, 'cc-exp': exp, cvc, amount }) =>
  new Promise((resolve, reject) => {
    const data = {
      amount,
      card_number: cardnumber,
      card_exp_month: exp.slice(0, 2),
      card_exp_year: `20${exp.slice(2, 4)}`,
      card_cvn: cvc,
    };
    if (!isValid(data)) {
      reject(Error('Card information is not valid'));
      return;
    }
    Xendit.card.createToken({ ...data }, (err, token) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(token);
      resolve(token);
    });
  });

// if (creditCardToken.status === 'APPROVED' || creditCardToken.status === 'VERIFIED') {
//   this.displaySuccess(creditCardToken);
// } else if (creditCardToken.status === 'IN_REVIEW') {
//   this.setState({ source: creditCardToken.payer_authentication_url })
// } else if (creditCardToken.status === 'FRAUD') {
//   this.displayError(creditCardToken);
// } else if (creditCardToken.status === 'FAILED') {
//   this.displayError(creditCardToken);
// }
