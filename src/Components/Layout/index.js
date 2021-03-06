import { Container } from 'reactstrap';
import React from 'react';

import Routes from '../../Routes';

const Layout = () => (
  <>
    <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
      <h5 className='my-0 mr-md-auto font-weight-normal'>File Manage</h5>
    </div>

    <Container>
      <Routes />
    </Container>
  </>
);

export default Layout;
