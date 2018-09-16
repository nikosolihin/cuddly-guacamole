import React from 'react';
import Layout from 'components/shared/Layout';
import Payment from 'components/Payment/Payment';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Payment />
  </Layout>
);

export default IndexPage;

// const Button = styled('button')`
//   cursor: pointer;
// `;
// const button = open => <Button onClick={open}>Click Me</Button>;
{
  /* <Modal label="Sample Modal Component" button={button}>
  {isOpen => isOpen && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>}
</Modal> */
}
