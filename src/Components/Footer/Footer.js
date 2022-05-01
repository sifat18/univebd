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
        <Container fluid className='footer pb-5 ps-2 '>
            <Container className='text-secondary my-5 pt-3'>
                <img src={foot} alt="" />
                <p className='text-light mt-3 '>Skill focused learning platform </p>
                <hr className='bg-light' />


                <Row className='my-5 ms-2 words'>
                    {/*  footer img */}
                    <Col xs={4} md={2} className='me-2'>
                        <p className='text-white'>Solutions</p>
                        <NavLink to='/individual-learner'><p className='ashText'>Unive for Individuals</p></NavLink>
                        <NavLink to='/recruiting'><p className='ashText'>Unive for HR/ Recruiting</p></NavLink>
                        <NavLink to='/enterprise'><p className='ashText'>Unive for Enterprise</p></NavLink>

                    </Col>
                    <Col xs={4} md={2} className=' mx-3 pe-5'>
                        <Row>
                            <Col xs={2} md={12}>
                                <p className='text-white'>Products</p>
                                <NavLink to='/individual-learner'> <p className='ashText'>Unive Learning</p></NavLink>
                                {/* <NavLink to='/onboarding'> <p className='ashText'>Unive Onboarding</p></NavLink> */}
                                <NavLink to='/assessments '><p className='ashText'>Unive Skill Assessments</p></NavLink>
                            </Col>
                            <Col xs={3} md={12} className='d-none d-md-block text-white'>
                                <p className='text-white'>Pricing</p>
                                <NavLink to='/unlimited '> <p className='ashText'>For Individuals</p></NavLink>
                                <NavLink to='/enterprise-price '> <p className='ashText'>For Enterprise</p></NavLink>
                                <NavLink to='/mass '><p className='ashText'>For Manpower as a Service</p></NavLink>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={5} md={12} className='d-block d-md-none text-white'>
                        <p className='text-white'>Pricing</p>
                        <NavLink to='/unlimited '> <p className='ashText'>For Individuals</p></NavLink>
                        <NavLink to='/enterprise-price '> <p className='ashText'>  For Enterprise</p></NavLink>
                        <p className='ashText'>For Manpower as a Service</p>
                    </Col>

                    <Col xs={4} md={2} className=' me-5 pe-2'>
                        <Row>
                            <Col xs={12} className='mb-4'>
                                <p className='text-white'>Resources</p>
                                <NavLink to='/blogs'><p className='ashText'>Unive Blog</p></NavLink>
                                {/* <NavLink to='/FAQ'>  <p className='ashText'>FAQ</p></NavLink> */}
                            </Col>
                            <Col xs={12} className='d-none d-md-block' >
                                <p className='text-white'>Contribute</p>
                                <NavLink to='/become-an-unive-instructor'><p className='ashText'>Become an instructor</p></NavLink>
                                <NavLink to='/write-on-edpresso'><p className='ashText'>Become a Contributor</p></NavLink>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={5} md={12} className='d-block d-md-none text-white' >
                        <p className='text-white'>Legal</p>
                        <NavLink to='/privacy'><p className='ashText'>Privacy Policy</p></NavLink>
                        {/* <NavLink to='/privacy'><p className='ashText'>Cookie Settings</p></NavLink> */}
                        <NavLink to='/terms'><p className='ashText'>Terms of Service</p></NavLink>
                        <NavLink to='/enterprise-terms'> <p className='ashText'> Business Terms of Service</p></NavLink>
                    </Col>
                    <Col xs={4} className=' d-block d-md-none me-5 pe-4 ' >
                        <p className='text-white'>Contribute</p>
                        <NavLink to='/become-an-unive-instructor'><p className='ashText'>Become an instructor</p></NavLink>
                        <NavLink to='/write-on-edpresso'><p className='ashText'>Become a Contributor</p></NavLink>
                    </Col>
                    <Col xs={2} className=' me-5 pe-5'>
                        <Row>
                            <Col xs={12} className=' d-none d-md-block'>
                                <p className='text-white'>Legal</p>
                                <NavLink to='/privacy'><p className='ashText'>Privacy Policy</p></NavLink>
                                {/* <NavLink to='/privacy'><p className='ashText'>Cookie Settings</p></NavLink> */}
                                <NavLink to='/terms'><p className='ashText'>Terms of Service</p></NavLink>
                                <NavLink to='/enterprise-terms'> <p className='ashText'>Business Terms of Service</p></NavLink>
                            </Col>
                            <Col xs={12} className='d-none d-md-block' >
                                <p className='text-white'>About Us</p>
                                <NavLink to='/our-team'> <p className='ashText'>Our Team</p></NavLink>
                                <NavLink to='/careers'> <p className='ashText'>Careers</p></NavLink>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={12} md={2} className=''>
                        <p className='text-white'>More</p>
                        <NavLink to='/course-catalogue'> <p className='ashText'>Course Catalog</p></NavLink>
                        <NavLink to='/scholarships'> <p className='ashText'>Scholarships</p></NavLink>
                        {/* <NavLink to='/press'><p className='ashText'>Press</p></NavLink> */}
                        <NavLink to='/contact'><p className='ashText'>Contact Us</p></NavLink>
                    </Col>
                </Row>
                <hr />
                <Row className=''>
                    <Col xs={8} >
                        <div className='d-flex  mt-2 d-none d-md-block'>
                            <img src={face} alt="" height='25' width='25' className='me-2' />
                            <img src={linkd} alt="" height='25' width='25' className='mx-2' />
                            <img src={twit} alt="" height='25' width='25' className='mx-2' />
                            <img src={you} alt="" height='25' width='25' className='mx-2' />
                        </div>
                    </Col>
                    <Col xs={4} className='pe-auto d-none d-md-block mt-2'>
                        <p className='ashText'>2022 Unive © All rights reserved.</p>
                    </Col>
                </Row>
            </Container >
            <Container xs={4} className='pe-auto d-block d-md-none'>
                <div className='d-flex justify-content-center mb-5 '>
                    <img src={face} alt="" height='25' width='25' className='me-2' />
                    <img src={linkd} alt="" height='25' width='25' className='mx-2' />
                    <img src={twit} alt="" height='25' width='25' className='mx-2' />
                    <img src={you} alt="" height='25' width='25' className='mx-2' />
                </div>
                <p className='ashText words text-center'>2022 Unive © All rights reserved.</p>
            </Container>
        </Container >
    );
};

export default Footer;