import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import scholarshipPic from '../images/scholarship/graduation.png'

export default function Scholarships() {
  return (
    <><Header />
      <Container className='my-5'>
        <Row>
          <Col xs={12} md={5}>
            <h2 className='fs-1 fw-bold'>GET <br />SCHOLARSHIP <br />WITH US</h2>
            <p className='my-5 fs-4'>Unive provides scholarships to candidates who show exceptional learning and implementation capabilities. If you feel like you are eligible for a scholarship, please fill up the form. Our team will contact you shortly.
            </p>
            <img className='img-fluid my-3' src={scholarshipPic} alt="" srcset="" />

          </Col>
          <Col xs={12} md={7}></Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
