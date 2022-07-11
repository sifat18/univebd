import React from 'react';
import { Container, Spinner, Toast } from 'react-bootstrap';

const Offline = () => {
  window.addEventListener('online', () => window.location.reload());

  return (

    <Container className='ms-5'>
     
    <Toast animation={true} >
    <Toast.Header closeButton={false}>
    <Spinner animation="grow" variant="secondary" />
      <strong className="me-auto">Offline</strong>
    </Toast.Header>
    <Toast.Body>  There is no Internet connection. We'll try to reload automatically
            once you're back online!</Toast.Body>
  </Toast>
  
    </Container>
  );
};

export default Offline;
