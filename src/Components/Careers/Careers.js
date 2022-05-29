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

  <Col xs={12} md={5} className='bigMargin'>
  <h3 className=' mt-5'>Come, Grow With Us</h3>
  <p className='  my-3 '>Growing with Educative is much more than just increasing numbers. Here, personal career development sits at the heart of every initiative. Every day is an opportunity to learn something new and find creative solutions.

</p>
<p><BsTrophy className='me-3'/> Ranked 573 in Inc. 5000 list of Fastest Growing US Companies</p>
  </Col>
  </Row>


  <Row className=' my-5 mx-2'>


  <Col xs={12} md={5} className='me-5'>
  <h3 className=' mt-5'>Inside Unive</h3>
  <p className='  my-3'>Unive is on a mission to help every developer become more productive and successful.</p>
<p>Our people are leaders; they think big, dive deep into problems, and deliver results. With extreme ownership, ideas are taken from inception to production on high standards.</p>
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
  <p className=' pt-3  fs-6 '>IN THE LIMELIGHT</p>

  <h3 >Going beyond routine learning</h3>
  <p className='  my-3'>Unive has launched a series of interactive sessions to promote learning in a diverse range of subjects. Dr. Sarmad Abbasi, a renowned academic of mathematics and theoretical computing, led the session and spoke about the theory of ethics as explained by famous philosophers.
</p>
  </Col>
  </Row>
    </Container>
    {/* faq */}
    <Container data-aos="fade-up" className='  my-5'>
                <Row>
                    <Col xs={12} md={4}>
                        <h2 className='my-5 mx-auto fs-1 text-start'>কিছু কমন প্রশ্ন</h2>
                        <p className=' text-center'>আপনার প্রশ্নের উত্তর খুঁজে পাচ্ছেন না? আমাদের সাথে যোগাযোগ করুন</p>
                    </Col>
                    <Col xs={12} md={8}>
                        <Accordion defaultActiveKey={['0', '1']} alwaysOpen >
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>এখানে কি কোনো রিভিউ প্রসেস আছে?</Accordion.Header>
                                <Accordion.Body>
                                    জ্বি, এখানে আপনি আর্টিকেল সাবমিট করলে একটি রিভিউ প্রসেস দিয়ে যাবে। আপনি আর্টিকেল সাবমিট করার পর অনতিবিলম্বে আপনার সাথে যোগাযোগ করা হবে।</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>আমি কোন টপিক নিয়ে লিখবো?</Accordion.Header>
                                <Accordion.Body>
                                    আপনি Unive এর টপিক লিস্ট থেকে যেকোনো টপিক নিয়ে লিখতে পারেন কিংবা আমাদের সাজেস্ট করতে পারেন নতুন কোনো টপিক।</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='middle py-5 text-center'>
                <h2 className=' mt-2 mb-4 fs-2 '>Apply Now!</h2>
                
                <Button variant='btn btn-primary' size='lg' href='/home'> Explore Opportunities</Button>
                <p className=' my-4 smallText text-muted'>If you have any questions, feel free to email us at jobs@unive.work</p>
            </Container>
    <Footer /></>
  )
}
