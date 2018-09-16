import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { createToken } from 'utils/xendit';
import { withAlert } from 'context/AlertContext';
import { initialValues, fields } from './Fields';
import Warning from './Warning';
import ThreeDS from './ThreeDS';
import paymentSchema from './Schema';
import FormField from '../Form/FormField';
import FormSubmit from '../Form/FormSubmit';

export class Payment extends Component {
  // should we move this into Layout?
  // since this component might unmount and mount again
  state = {
    loading: false,
    id: '',
    status: '',
    authId: '',
    authURL: '',
  };

  componentDidMount = () => {
    window.addEventListener('message', this.check3DSecureStatus);
  };

  componentWillUnmount = () => {
    window.removeEventListener('message', this.check3DSecureStatus);
  };

  toggleLoading = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };

  check3DSecureStatus = ({ data, origin }) => {
    if (data && origin.includes(process.env.XENDIT_REDIRECT)) {
      const { id, authentication_id: authId, status } = JSON.parse(data);
      this.setState({
        id,
        status,
        authId,
      });
      console.log('closing iFrame');
    }
  };

  renderFields = (touched, errors) =>
    fields.map(({ name, ...props }) => (
      <FormField {...props} key={name} name={name} errorMsg={errors[`${name}`]} isTouched={touched[`${name}`]} />
    ));

  handleSubmit = (values, { setSubmitting }) => {
    const { setAlert } = this.props;
    this.setState({ loading: true });
    createToken(values).then(
      ({ status, payer_authentication_url: authURL }) => {
        setSubmitting(false);
        this.toggleLoading();
        console.log(status, authURL);
        this.setState({ status, authURL });
        // what if we get VERIFIED right away?
        window.open(authURL, '3DSAuthentication');
      },
      err => {
        setSubmitting(false);
        this.toggleLoading();
        this.setState({ loading: false });
        setAlert(err.message);
      }
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading && <Warning />}
        <Formik initialValues={initialValues} validationSchema={paymentSchema} onSubmit={this.handleSubmit}>
          {({ errors, touched, isSubmitting }) => (
            <Form>
              {this.renderFields(touched, errors)}
              <FormSubmit loading={isSubmitting}>Pay Now</FormSubmit>
            </Form>
          )}
        </Formik>
        <ThreeDS />
      </>
    );
  }
}

export default withAlert(Payment);

// {status === 'IN_REVIEW' && <ThreeDS url={authURL} />}
/**
 * TODO: put token in localstorage?
 */
