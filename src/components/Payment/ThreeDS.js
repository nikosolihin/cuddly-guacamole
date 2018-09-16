import React from 'react';
import styled from 'react-emotion';

const ThreeDS = styled('div')`
  /* display: none; */
`;

export default () => (
  <ThreeDS>
    <iframe name="3DSAuthentication" title="3DS Authentication" width="400" height="350" frameBorder="0" />
  </ThreeDS>
);

{
  /* <Modal initial label="3DS Identity Authentication">
    {({ open }) => (
      <>
        {open && (
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe title="Inline Frame Example" width="300" height="200" src="${url}" />`,
            }}
          />
        )}
      </>
    )}
  </Modal> */
}
