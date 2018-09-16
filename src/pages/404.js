import React from 'react';
import Layout from 'components/shared/Layout';
import { Heading, Text } from 'components/shared/Typography';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Heading>Whoops — That Page Doesn’t Exist (404)</Heading>
    <Text>Looks like the page you requested either doesn’t exist or has been moved.</Text>
  </Layout>
);

export default NotFoundPage;
