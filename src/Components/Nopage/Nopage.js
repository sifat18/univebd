import React from 'react';
import { Container } from 'react-bootstrap';
import pic from '../images/error.png'
const Nopage = () => {
    return (
        // 404 image
        <Container className='text-center'>
            <img src={pic} alt="" className='img-fluid'  />
        </Container>
    );
};
export default Nopage;