import React from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import Companies from '../Common/Companies'
import hr from '../images/hr/hr.png'
import search from '../images/hr/search.png'
import resume from '../images/hr/resume.png'
import loud from '../images/hr/loud.png'
import ContactForm from '../Common/ContactForm'
import Header from '../Header/Header'
export default function Recruiting() {
    return (
        <>
            <Header />
            {/* top */}
            <Container>
                <Row data-aos="fade-up" className='my-5'>
                    <Col xs={12} md={7} className='text-start ms-3 mb-3'>
                        <h2 className='fs-1 '>Increase your technical <br /> interview-to-hire rate</h2>
                        <h4 className='my-4 mx-1 smallText'>With curated interview prep courses, Educative for <br /> Recruiting helps you improve hiring outcomes and reach <br /> your D&I goals.</h4>
                        <Button className='p-3 mt-3 bluebtn' href="#">Try Unive for Recruiters</Button>
                    </Col>
                    <Col xs={12} md={4}>
                        <img className='img-fluid ' src={hr} alt="" />
                    </Col>
                </Row>

            </Container>
            {/* logos */}
            <Container data-aos="fade-down" fluid className='middle'>
                <Container>
                    <h2 className='smallText'>Unive learning platform is used by 500,000+ users at companies such as:</h2>
                    <Companies />
                </Container>
            </Container>
            {/* empower */}
            <Container data-aos="fade-up" className='text-center my-5'>
                <h2 className='fs-1'>Empower your candidates with Unive</h2>
                <h5 className='smallText my-4'>The Recruiting plan lets each of your candidates prepare for their interview using a selection of courses curated for your company.</h5>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={search} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>Recruit prime candidates with fewer interviews</h2>
                        <h5 className='smallText my-4 text-start'>Every engineer hour spent interviewing is productivity lost for your company. Give incoming candidates access to Educative and raise your interview pass through rate by an average of 13%.</h5>
                    </Col>
                </Row>
            </Container>
            <Container data-aos="fade-up-left" className='text-center my-5 middle'>
                <Row className='my-5'>

                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>Hire more diverse candidates</h2>
                        <h5 className='smallText my-4 text-start'>Not all candidates have the same resources or educational backgrounds. Reduce false negatives and diversify your workforce with standardized material available to every candidate.</h5>
                    </Col>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={resume} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container data-aos="fade-up-right" className='text-center my-5'>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        video here
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>Curated Paths tailored to your interview process</h2>
                        <p className='smallText my-2 text-start'>We'll put together an exclusive, curated collection of our existing course content to ensure your candidates brush up on the skills your company is looking for.</p>
                        <p className='my-4 text-start'>Our team will work with you to create a tailored Learning Path for your needs, so you can be confident candidates come in at their best. </p>
                    </Col>
                </Row>
            </Container>
            <Container data-aos="fade-up-left " className='text-center my-5 middle py-5'>
                <Row className='my-5'>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>Deliver a better candidate experience</h2>
                        <p className='smallText my-2 text-start'>Positive interview experiences make candidates advocates for your company, regardless of whether or not they're hired. Small things can go a long way.</p>
                    </Col>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={loud} alt="" />
                    </Col>

                </Row>
            </Container>
            {/* contact */}
            <Container data-aos="fade-up" fluid className='bg-primary text-center py-5'>
                <h2 className='text-white'>Contact us for more information</h2>
                <Container className='bg-white bigWidth text-center mx-auto p-5 py-3'>
                    <ContactForm />
                </Container>
            </Container>
            {/* faq */}
            <Container data-aos="fade-down" className='bigWidth text-center my-5'>
                <h2 className='my-5 fs-1'>Frequently Asked Questions</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Isn't this just giving candidates the answers to the test?</Accordion.Header>
                        <Accordion.Body>
                            No - Educative's courses discourage simple memorization and instead
                            prioritize lasting learning. Our courses teach students to apply fundamental
                            concepts, see patterns in questions, and build modes of thought.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Who is the Recruiting plan for?</Accordion.Header>
                        <Accordion.Body>
                            This plan is ideal for companies that hire engineers at-scale,
                            care about equal opportunity of employment, and want to make an impact on candidates' experience.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is a Path?</Accordion.Header>
                        <Accordion.Body>
                            Paths are collections of our best lessons from across our library curated to help learners achieve a specific learning goal. The lessons gradually build from fundamentals to advanced
                            practice to ensure each learner leaves with a complete and practiced understanding of the Path's subject.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Can we check which candidates use the Path?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you will be able to see usage data of your candidates through an admin dashboard.
                            You can use this as a helpful indicator of a candidate's willingness to learn and grow.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What courses will our candidates get access to?</Accordion.Header>
                        <Accordion.Body>
                            Our full library of hundreds of software courses and private access to your company's Curated Path.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Container fluid className='middle py-5 text-center'>
                <h2 className=' my-2 fs-2 '>Ready to get started?</h2>
                <p className=' my-4 smallText text-muted'>Contact our team today! We'll get back to you within 1 business day.</p>
                <Button variant='btn btn-primary' href='/home'> Speak to the representative</Button>
            </Container>
        </>
    )
}
