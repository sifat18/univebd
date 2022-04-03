import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'
import foot from '../images/footlogo.jpg'
import face from '../images/facebook-64.png'
import linkd from '../images/linkedin-64.png'
import twit from '../images/twitter-64.png'
import you from '../images/youtube-64.png'

const Footer = () => {
    return (
        <Container fluid className='footer pb-5 ps-5'>
            <Container className='text-secondary mt-5 pt-3'>
                <img src={foot} alt="" height='50' width='150' />
                <p className='text-light mt-2 '>Learn in-demand tech skills in half the time</p>
                <hr className='bg-light' />


                <Row className='my-5 '>
                    {/*  footer img */}
                    <Col xs={2} className='me-5 pe-5'>
                        <p className='text-white'>Solutions</p>
                        <p>Educative for business</p>
                        <p>Educative for Individuals</p>
                        <p>Educative for HR/ recruiting</p>
                        <p>Educative for Bootcamps</p>
                    </Col>
                    <Col xs={2} className=' me-5 pe-5'>
                        <Row>
                            <Col xs={12}>
                                <p className='text-white'>Products</p>
                                <p>Educative Learning</p>
                                <p>Educative Onboarding</p>
                                <p>Educative Skill Assessments</p>
                            </Col>
                            <Col xs={12}>
                                <p className='text-white'>Pricing</p>
                                <p>For Individuals</p>
                                <p>Educative Onboarding</p>
                                <p>For Teams</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={2} className=' me-5 pe-5'>
                        <Row>
                            <Col xs={12} className='mb-4'>
                                <p className='text-white'>RESOURCES</p>
                                <p>Educative Blog</p>
                                <p>Edpresso</p>
                            </Col>
                            <Col xs={12}>
                                <p className='text-white'>CONTRIBUTE</p>
                                <p>Become an Author</p>
                                <p>Become an Affiliate</p>
                                <p>Become a Contributor</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={2} className=' me-5 pe-5'>
                        <Row>
                            <Col xs={12}>
                                <p className='text-white'>LEGAL</p>
                                <p>Privacy Policy</p>
                                <p>Cookie Settings</p>
                                <p>Terms of Service</p>
                                <p>Business Terms of Service</p>
                            </Col>
                            <Col xs={12}>
                                <p className='text-white'>ABOUT US</p>
                                <p>Our Team</p>
                                <p>Careers</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={2} className=''>
                        <p className='text-white'>MORE</p>
                        <p>Course Catalog</p>
                        <p>Early Access Courses</p>
                        <p>CodingInterview.com</p>
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
                        <p>Copyright ©2022 Educative, Inc. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>

        </Container>
    );
};

export default Footer;