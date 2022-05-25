import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import pic from '../images/error.png'
const Nopage = () => {
    return (
        // 404 image
        <>
            <Header />
            <Container className='text-center my-5 py-5 '>
                {/* <img src={pic} alt="" className='img-fluid'  /> */}
                <h3 className='fw-bold fs-1'>The page you’re looking <br /> for can’t be found.</h3>

            </Container>
            <div className="d-md-block d-none mt-5 pt-5">
                <Footer />
            </div>
            <div className="d-block d-md-none">
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Solutions</Accordion.Header>
                        <Accordion.Body>
                            <NavLink to='/individual-learner'><p className='ashText'>Unive for Individuals</p></NavLink>
                            <NavLink to='/recruiting'><p className='ashText'>Unive for HR/ Recruiting</p></NavLink>
                            <NavLink to='/enterprise'><p className='ashText'>Unive for Enterprise</p></NavLink>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Products</Accordion.Header>
                        <Accordion.Body>
                            <NavLink to='/individual-learner'> <p className='ashText'>Unive Learning</p></NavLink>
                            <NavLink to='/assessments '><p className='ashText'>Unive Skill Assessments</p></NavLink>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Pricing</Accordion.Header>
                        <Accordion.Body>
                            <NavLink to='/unlimited '> <p className='ashText'>For Individuals</p></NavLink>
                            <NavLink to='/enterprise-price '> <p className='ashText'>For Enterprise</p></NavLink>
                            <NavLink to='/maas '><p className='ashText'>For Manpower as a Service</p></NavLink>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Resources</Accordion.Header>
                        <Accordion.Body>
                            <NavLink to='/blogs'><p className='ashText'>Unive Blog</p></NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Contribute</Accordion.Header>
                        <Accordion.Body>
                            <NavLink to='/become-an-unive-instructor'><p className='ashText'>Become an instructor</p></NavLink>
                            <NavLink to='/write-on-edpresso'><p className='ashText'>Become a Contributor</p></NavLink>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Legal</Accordion.Header>
                        <Accordion.Body>
                            <NavLink to='/privacy'><p className='ashText'>Privacy Policy</p></NavLink>
                            <NavLink to='/terms'><p className='ashText'>Terms of Service</p></NavLink>
                            <NavLink to='/enterprise-terms'> <p className='ashText'> Business Terms of Service</p></NavLink>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>About Us</Accordion.Header>
                        <Accordion.Body>
                            <NavLink to='/our-team'> <p className='ashText'>Our Team</p></NavLink>
                            <NavLink to='/careers'> <p className='ashText'>Careers</p></NavLink>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>More</Accordion.Header>
                        <Accordion.Body>
                            <NavLink to='/course-catalogue'> <p className='ashText'>Course Catalog</p></NavLink>
                            <NavLink to='/scholarships'> <p className='ashText'>Scholarships</p></NavLink>
                            <NavLink to='/contact'><p className='ashText'>Contact Us</p></NavLink>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <p className='ashText words text-center'>2022 Unive © All rights reserved.</p>

            </div>
        </>
    );
};
export default Nopage;