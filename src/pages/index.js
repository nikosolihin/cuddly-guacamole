import React from 'react';
import styled from 'react-emotion';
import Layout from 'components/shared/Layout';
import Projects from 'components/Projects';

const IndexPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <Projects />
  </Layout>
);

export default IndexPage;
