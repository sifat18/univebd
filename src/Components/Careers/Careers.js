import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { BsTrophy } from "react-icons/bs";

export default function Careers() {
  return (
    <><Header />
    {/* main content */}
    <Container>
<Row className='border rounded ms-3 my-5 bg-white'>
  <Col xs={12} md={5}>
  <h1 className='mx-4 mt-5 mb-3'>Reshape the Future <br/> of Learning</h1>
  <p className='fs-5 mx-4 my-2'>50+ roles now open in multiple locations</p>
  <NavLink to='/'><Button size='lg' className=' mx-4 my-3 bluebtn'>Explore Opportunities</Button></NavLink>
  </Col>
  <Col xs={12} md={6}>
  <img  className='img-fluid' src="https://remote-tools-images.s3.amazonaws.com/engineering+team+names.jpg" alt=""  />
  </Col>
</Row>

<Row className=' my-5 mx-2'>
<Col xs={12} md={5}>
  <img  className='img-fluid' src="https://media.istockphoto.com/photos/businessman-working-on-a-laptop-computer-in-the-office-picture-id1338145486?b=1&k=20&m=1338145486&s=170667a&w=0&h=cW5Q_kLRXijvlAjaK86ijnQOzlouKvVMDUXZ9Ped2vs=" alt=""  />
  </Col>

  <Col xs={12} md={5} className='ms-5'>
  <h3 className=' mt-5'>Come, Grow With Us</h3>
  <p className='  my-3'>Growing with Educative is much more than just increasing numbers. Here, personal career development sits at the heart of every initiative. Every day is an opportunity to learn something new and find creative solutions.

</p>
<p><BsTrophy className='me-3'/> Ranked 573 in Inc. 5000 list of Fastest Growing US Companies</p>
  </Col>
  </Row>


    </Container>
    
    <Footer /></>
  )
}
