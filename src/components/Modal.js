import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import ReactModal from 'react-modal';
import Icon from './Icon';

const Close = styled('button')`
  background: purple;
`;

const StyledModal = styled(ReactModal)``;

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.initial,
    };
  }

  componentDidMount = () => ReactModal.setAppElement('#___gatsby');

  // Should this be in componenDidUpdate?
  freeze = () => document.querySelector('html').classList.toggle('frozen');

  // open = () => {
  //   this.freeze();
  //   this.setState({ isOpen: true });
  // };

  toggle = () => {
    const { open } = this.state;
    this.freeze();
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    const { label, button, children } = this.props;
    return (
      <>
        {/* {button(this.open)} */}
        <StyledModal
          isOpen={open}
          contentLabel={label}
          onRequestClose={this.toggle}
          closeTimeoutMS={150}
          portalClassName="Modal"
          className="Modal-content"
          overlayClassName="Modal-overlay"
        >
          {children({
            open,
            toggle: this.toggle,
          })}
          <Close onClick={this.close}>
            <Icon icon="close" />
          </Close>
        </StyledModal>
      </>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  initial: false,
};
