import React, { Component } from 'react';
import styled from 'react-emotion';

const ModalButton = styled('button')`
  background: #e2edff;
  border: 2px solid #bad2fa;
  border-radius: 1em;
  cursor: pointer;
  transition: background 0.15s ease-out;

  &:hover {
    background: #cbddfb;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 4px currentColor;
  }
`;

const ModalContent = styled('aside')``;

export class Modal extends Component {
  state = {
    isOpen: false,
  };

  render() {
    const { label } = this.props;
    return (
      <div>
        <ModalButton>{label}</ModalButton>
        <ModalContent>
          <div className="c-modal">
            <button className="c-modal__close">
              <span className="u-hide-visually">Close</span>
              <svg className="c-modal__close-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <div className="c-modal__body">CONTENT WILL GO HERE</div>
          </div>
        </ModalContent>
      </div>
    );
  }
}

export default Modal;
