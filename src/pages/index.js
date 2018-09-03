import React from 'react';
import Layout from 'components/shared/Layout';
import Projects from 'components/Projects';
import Modal from 'components/Modal';
import Spinner from 'components/Spinner';
import ProfileForm from 'components/ProfileForm';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <ProfileForm />
  </Layout>
);

export default IndexPage;

{
  /* <Modal ariaLabel="A label describing the Modal\'s current content" label="I'm a button">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem pariatur provident eaque, obcaecati laudantium
        officia dolores maxime illum assumenda. Dolor tenetur saepe voluptatem iure suscipit hic labore, consequuntur
        cum at.
      </p>
    </Modal> */
}
