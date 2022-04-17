import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'
// import foot from '../images/footlogo.jpg'
import face from '../images/facebook-64.png'
import linkd from '../images/linkedin-64.png'
import twit from '../images/twitter-64.png'
import you from '../images/youtube-64.png'
import foot from '../images/logos/Unive-v3-1.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='footer pb-5 ps-5'>
            <Container className='text-secondary my-5 pt-3'>
                <img src={foot} alt="" />
                <p className='text-light mt-3 '>Skill focused learning platform </p>
                <hr className='bg-light' />


                <Row className='my-5 '>
                    {/*  footer img */}
                    <Col xs={2} className='me-5 pe-5'>
                        <p className='text-white'>Solutions</p>
                        <NavLink to='/individual-learner'><p>Unive for Individuals</p></NavLink>
                        <NavLink to='/recruiting'><p>Unive for HR/ Recruiting</p></NavLink>
                        <p>Unive for Enterprise</p>

                    </Col>
                    <Col xs={2} className=' me-5 pe-5'>
                        <Row>
                            <Col xs={12}>
                                <p className='text-white'>Products</p>
                                <NavLink to='/individual-learner'> <p>Unive Learning</p></NavLink>
                                <NavLink to='/onboarding'> <p>Unive Onboarding</p></NavLink>
                                <p>Unive Skill Assessments</p>
                            </Col>
                            <Col xs={12}>
                                <p className='text-white'>Pricing</p>
                                <p>For Individuals</p>
                                <p>For Enterprise</p>
                                <p>For Manpower as a Service</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={2} className=' me-5 pe-5'>
                        <Row>
                            <Col xs={12} className='mb-4'>
                                <p className='text-white'>Resources</p>
                                <p>Unive Blog</p>
                                <p>FAQ</p>
                            </Col>
                            <Col xs={12}>
                                <p className='text-white'>Contribute</p>
                                <p>Become an instructor</p>
                                <p>Become a Contributor</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={2} className=' me-5 pe-5'>
                        <Row>
                            <Col xs={12}>
                                <p className='text-white'>Legal</p>
                                <p>Privacy Policy</p>
                                <p>Cookie Settings</p>
                                <p>Terms of Service</p>
                                <p>Business Terms of Service</p>
                            </Col>
                            <Col xs={12}>
                                <p className='text-white'>About Us</p>
                                <p>Our Team</p>
                                <p>Careers</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={2} className=''>
                        <p className='text-white'>More</p>
                        <p>Course Catalog</p>
                        <p>Scholarships</p>
                        <p>Press</p>
                        <p>Contact Us</p>
                    </Col>
                </Row>
                <hr />
                <Row className=''>
                    <Col xs={8}>
                        <div className='d-flex  mt-2 '>
                            <img src={face} alt="" height='25' width='25' className='me-2' />
                            <img src={linkd} alt="" height='25' width='25' className='mx-2' />
                            <img src={twit} alt="" height='25' width='25' className='mx-2' />
                            <img src={you} alt="" height='25' width='25' className='mx-2' />
                        </div>
                    </Col>
                    <Col xs={4} className='pe-auto'>
                        <p>2021 Unive © All rights reserved.</p>
                    </Col>
                </Row>
            </Container>

        </Container>
    );
};

export default Footer;