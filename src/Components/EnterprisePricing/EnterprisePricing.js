import React from 'react'
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap'
import Companies from '../Common/Companies'
import Demo from '../Common/Demo'
import check from '../images/check.png'

export default function EnterprisePricing() {
    return (
        <>
            {/* top part */}
            <Container data-aos="fade-down" className='my-5'>
                <section className='text-center '>
                    <h2 className=''>Choose the Educative Experience. <br /> Make it uniquely yours. </h2>
                    <h4 className=' mt-3 fs-5 mx-auto'>No two teams are exactly alike, and neither are their training needs.<br />
                        Questions about our plans? Looking for more detailed information? We'd love to help.<br />
                        Just contact us.</h4>
                </section>
            </Container>
            <Container data-aos="fade-up" fluid className='middle text-center my-5 py-5'>
                <section className='container mt-5'>
                    <p className='text-center'>MOST POPULAR</p>
                    <Row className='g-0 shadow-sm border'>
                        <Col xs={12} md={4} className=' bg-white border-end'>
                            <p className='bg-primary py-2'></p>
                            <Container className='text-start px-3'>
                                <Card.Title>Team</Card.Title>
                                <p className='my-4'>Upskill teams who are passionate about learning.</p>
                                {/* <p className='text-decoration-line-through'>$16.66</p>
                                <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                                <p>discounted price for </p>
                                <p className='fs-5'> $139 billed annually</p> */}
                                <Button variant="outline-primary text-center w-100 mx-auto">Buy Now</Button>
                                <p className='text-start my-3'>Team includes:</p>
                                <Card.Body className='text-start mx-auto my-3'>

                                    <p><img src={check} alt="" />Manage team subscriptions and learner access</p>
                                    <p><img src={check} alt="" />Unlimited access to Courses</p>
                                    <p><img src={check} alt="" />Unlimited access to Skill Paths</p>
                                    <p><img src={check} alt="" />Personalized Learning Plans </p>
                                    <p><img src={check} alt="" />New courses every week </p>
                                    <p><img src={check} alt="" />Single sign-on (Google) </p>
                                    <p><img src={check} alt="" />Completion certificates. </p>
                                </Card.Body>
                            </Container>
                        </Col>
                        <Col xs={12} md={4} className='bg-white border-end'>
                            <p className='bg-success py-2'></p>
                            <Container className='text-start px-3'>
                                <Card.Title>Enterprise</Card.Title>
                                <p>Manage new hire onboarding, create personalized learning plans, and gain valuable team insights.</p>
                                {/* <p className='text-decoration-line-through'>$16.66</p>
                                <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                                <p>discounted price for </p>
                                <p className='fs-5'> $139 billed annually</p> */}
                                <Button variant="btn btn-primary text-center w-100 mx-auto">Lets Chat</Button>
                                <p className='text-start my-3'>Everything included in Team, and:</p>
                                <Card.Body className='text-start mx-auto my-3'>
                                    <p><img src={check} alt="" />Team learning analytics</p>
                                    <p><img src={check} alt="" />Onboard new team members</p>
                                    <p><img src={check} alt="" />Track usage & progress</p>
                                    <p><img src={check} alt="" />Access to customer success team</p>
                                    <p><img src={check} alt="" />Slack integration</p>
                                    <p><img src={check} alt="" />OpenID SSO (Okta, Azure)</p>
                                    <p><img src={check} alt="" />Ability to assign Courses & Skill Paths</p>
                                    <p><img src={check} alt="" />Assign customized Skill Paths</p>
                                    <p><img src={check} alt="" />Annual SOC2 Type II reports</p>
                                </Card.Body>
                            </Container>

                        </Col>
                        <Col xs={12} md={4} className='bg-white'>
                            <p className='bg-danger py-2'></p>
                            <Container className='text-start px-3'>

                                <Card.Title>Enterprise Plus </Card.Title>
                                <p>Organizations looking for a faster, easier, and more customized approach to onboarding and learning new skills.</p>
                                {/* <p className='text-decoration-line-through'>$16.66</p>
                            <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                            <p>discounted price for </p>
                            <p className='fs-5'> $139 billed annually</p> */}
                                <Button variant="outline-primary text-center w-100 mx-auto">Lets Chat</Button>
                                <p className='text-start my-3'>Everything included in Team, and:</p>
                                <Card.Body className='text-start mx-auto my-3'>
                                    <p><img src={check} alt="" />Dedicated customer success manager</p>
                                    <p><img src={check} alt="" />Analytics API (coming soon)</p>
                                    <p><img src={check} alt="" />Professional services</p>
                                    <p>Connect with our team about additional professional services, LMS integrations, and custom course development by our industry-leading learning team members</p>
                                </Card.Body>
                            </Container>

                        </Col>
                    </Row>

                </section>
            </Container>

            <Container data-aos="fade-up-left"  >
                <Companies />

            </Container>

            <Container fluid data-aos="fade-up-right" className=' text-center my-5 middle'>
                <Container className=' text-start'>
                    <h2 className=' text-start py-5 fs-1'>Frequently Asked Questions</h2>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Are there required sizes for the different plans?</Accordion.Header>
                            <Accordion.Body>
                                Teams are for 3 to 25 users, Enterprise requires a minimum of 10 users, and Enterprise Plus has a minimum of 50. If you have different business needs,
                                please get in touch with us and we'll do everything we can to make it work for you.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Can I upgrade to the next higher plan?</Accordion.Header>
                            <Accordion.Body>
                                Of course. You can easily add users or upgrade your plan at any time. Drop us an email for help.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How can I learn more about the pricing levels for the Enterprise options?</Accordion.Header>
                            <Accordion.Body>
                                Reach out to us and we'll tailor your price to match the size of your organization and your learning goals.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How can I refer Educative to other teams in my company?</Accordion.Header>
                            <Accordion.Body>
                                You can either add them to your admin dashboard or talk to us at enterprise@educative.io
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
            </Container>
            <Container fluid data-aos="fade-down" className='middle my-5 py-5'>
                <Demo />
            </Container>
        </>
    )
}
