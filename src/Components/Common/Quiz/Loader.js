import React, { useState } from 'react';
import { Button, Col, Container, Row, Spinner, Toast } from 'react-bootstrap';

const Loader = () => {
   
  return (
    <Container className='ms-5'>
     
          <Toast animation={true} >
          <Toast.Header closeButton={false}>
          <Spinner animation="grow" variant="secondary" />
            <strong className="me-auto">Just one second</strong>
          </Toast.Header>
          <Toast.Body>We are fetching that content for you.</Toast.Body>
        </Toast>
      
        {/* <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are fetching that content for you.
        </Message.Content>
      </Message> */}
    </Container>
  );
};

export default Loader;