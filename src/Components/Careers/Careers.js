import React from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { BsTrophy } from "react-icons/bs";

export default function Careers() {
  return (
    <><Header />
    {/* main content */}
    <Container>
<Row className='border rounded  my-5 bg-white'>
  <Col xs={12} md={5}>
  <h1 className='mx-4 mt-5 mb-3'>Reshape the Future <br/> of Learning</h1>
  <p className='fs-5 mx-4 my-2'>10+ roles now open with remote and hybrid job facilities.</p>
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

  <Col xs={12} md={5} className='bigMargin'>
  <h3 className=' mt-5'>Come, Grow With Us</h3>
  <p className='  my-3 '>in Unive, We believe continuous learning and growth mindset are the keys to uncap the career potential. If you feel the same then come join with us we are all in to facillitate your career development goals.

</p>
  </Col>
  </Row>


  <Row className=' my-5 mx-2'>


  <Col xs={12} md={5} className='me-5'>
  <h3 className=' mt-5'>Inside Unive</h3>
  <p className='  my-3'>Unive is on a mission to help every engineer and technical manpower become more productive and successful.</p>
<p>Our people are problem solvers; they think holistically and have bias to actions to deliver results in the shortest time. With extreme ownership, ideas are taken from inception to execution on high standards.</p>
  </Col>
  <Col xs={12} md={5}>
  <img  className='img-fluid' src="https://img.freepik.com/free-photo/people-business-meeting-high-angle_23-2148911819.jpg?w=2000" alt=""  />
  </Col>
  </Row>

    </Container>
    <Container fluid className='middle text-center'>
      
<Row className=' my-5 bigMargin py-5'>
<Col xs={12} md={5}>
  <img  className='img-fluid invert ' src="https://ugs.utexas.edu/sites/default/files/hero_images/University_Lecture_Series.jpg" alt=""  />
  </Col>

  <Col xs={12} md={5} className='bigMargin text-start'>
  <p className=' pt-3  fs-6 '>TIme to Act Fast</p>

  <h3 >Play an active role in proper nation building</h3>
  <p className='  my-3'>Our country needs the best talents to implement an efficient and effective platform for empowering people. The time was never better. Now it's the time. Let's do it as a team!</p>
  </Col>
  </Row>
    </Container>
    {/* faq */}
    <Container data-aos="fade-up" className='  my-5'>
                <Row>
                    <Col xs={12} md={4}>
                        <h2 className='my-5 mx-auto fs-1 text-start'>Frequently Asked Questions</h2>
                        <p className=' text-center'>Please reach out through mail if you have any further questions</p>
                    </Col>
                    <Col xs={12} md={8}>
                        <Accordion defaultActiveKey={['0', '1']} alwaysOpen >
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>Where can i find the job opening posts?</Accordion.Header>
                                <Accordion.Body>
                                    Please submit your resume by creating a profile in the unive platform as a job aspirant. Our alogirthm will choose the relevant position for your candidacy. If you seem fit our team will reach you through mail and phone.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Is it mandatory to create a profile or can i just submit my resume?</Accordion.Header>
                                <Accordion.Body>
                                    You can just submit your resume but we strongly recommend to create a Job aspirant profile. The algorithm works best with the job aspirant profile to pick out prospective candidates.</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='middle py-5 text-center'>
                <h2 className=' mt-2 mb-4 fs-2 '>Apply Now!</h2>
                
                <Button variant='btn btn-primary' size='lg' href='/home'> Explore Opportunities</Button>
                <p className=' my-4 smallText text-muted'>If you have any questions, feel free to email us at jobs@unive.com.bd</p>
            </Container>
    <Footer /></>
  )
}
