import React from 'react'
import { Container } from 'reactstrap'

const NoMatch = () => {
  const pageTitle = 'Not Found';
  document.title = `${pageTitle} | ProfileHub`;

  return <Container className="main-wrapper mt-5">
    <h3>404: Not Found</h3>
  </Container>
};

export default NoMatch;
