/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'react-emotion';

injectGlobal`
  .Modal {
    &-overlay {
      background-color: #00000095;
      z-index: 10000;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      min-height: 100%;
      min-width: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      &[class*="after-open"] {
        overflow-y: auto;
      }
      &[class*="after-open"] {
        overflow-y: hidden;
      }
    }

    &-content {
      position: absolute;
      top: 40px;
      left: 40px;
      right: 40px;
      margin: 0 auto;
      max-width: 640px;
      background: white;
      padding: 10px;
      opacity: 0;
      transform: translate(0,-25%);
      transition: all .15s ease-out;
      &[class*="after-open"] {
        opacity: 1;
        transition: all 150ms;
        transform: translate(0, 0);
      }
      &[class*="before-close"] {
        opacity: 0;
        transform: translate(0, -25%);
      }
    }
  }
`;
