import React, { Component } from 'react';
import { Field } from 'formik';
import styled from 'react-emotion';

const FieldWrapper = styled('label')`
  position: relative;
  display: block;
  margin-bottom: 50px;
`;

const FormLabel = styled('div')`
  position: absolute;
  transition: 0.2s ease;
  transform: ${p => (p.isFocused ? 'scale(.75) translate3d(-16%, -120%, 0)' : 'translate3d(14px, 8px, 0)')};
`;

const FormError = styled('div')`
  color: red;
  font-size: 0.75rem;
`;

const StyledField = styled(Field)`
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  &:focus {
    border-color: blue;
  }
`;
StyledField.defaultProps = { autoCorrect: 'off', autoCapitalize: 'none', spellCheck: 'false', required: true };

export default class FormField extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () =>
    this.setState({
      isFocused: true,
    });

  render() {
    const { isFocused } = this.state;
    const { label, errorMsg, isTouched, ...props } = this.props;
    return (
      <FieldWrapper>
        <FormLabel isFocused={isFocused}>{label}</FormLabel>
        <StyledField {...props} onFocus={this.handleFocus} />
        {errorMsg && isTouched && <FormError>{errorMsg}</FormError>}
      </FieldWrapper>
    );
  }
}
