import React from 'react'
import { Accordion, Button, Col, Container,  Row } from 'react-bootstrap'
import Header from '../Header/Header'
import contribe from '../images/contribute/contribe.png'
export default function Contributor() {
    return (
        <>
            <Header />
            {/* top */}
            <Container data-aos="fade-up-left " className=''>
                <Row className='my-5 container'>
                    <Col xs={12} md={6} className='text-start ps-3 ms-5 '>
                        <h2 className='fs-1 fw-bold'>Write on Unive!</h2>
                        <p className='smallText fw-normal'>Edpresso is a free database of short, concise articles on dev topics. Any dev or dev-in-training who wants to share knowledge and help others is welcome to write for Edpresso’s 2.1 million monthly users.</p>
                        <Button className='p-3 mt-3 bluebtn' href="#">Become an Instructor</Button>
                    </Col>
                    <Col xs={12} md={5} className='my-5'>
                        <img className='img-fluid' src={contribe} alt="" />
                    </Col>
                </Row>

            </Container>
            {/* why unive */}

            <Container data-aos="fade-up-right" fluid className='middle'>
                <Container className='text-center my-2  py-3 '>
                    <Row className='my-2'>

                        <Col xs={12} md={4} className=" mb-2">
                            <div class="  px-4">
                                <p className='text-start my-3 fw-bold fs-4'>
                                    Why Unive?

                                </p>
                                <ul className='text-start'>
                                    <li>Unive guides its contributors through the entire writing process, from choosing a topic to making sure your article is scrubbed of errors before publication.</li>
                                    <li>Once you become an Edresso contributor, you will gain access to our Edpresso Community Slack channel where you can speak directly to our contributors and the Edpresso review team.</li>
                                </ul>

                            </div>
                        </Col>
                        <Col xs={12} md={4} className=" mb-2">
                            <div class="  px-4">
                                <p className='text-start my-3 fw-bold fs-4'>
                                    What’s in it for you?

                                </p>
                                <ul className='text-start '>
                                    <li>Learn new writing skills that will help you throughout your entire career.</li>
                                    <li>Gain technical writing experience and work with a remote editorial team</li>
                                    <li>Get published and gain access to Edpresso’s 2.1 million users</li>
                                </ul>
                            </div>
                        </Col>

                        <Col xs={12} md={4} className=" mb-5">
                            <div class="  px-4">
                                <p className='text-start my-3 fw-bold fs-4'>
                                    Where to start?
                                </p>
                                <ul className='text-start'>
                                    <li>Create a free account at educative.io, login, and navigate to Edpresso on the left-hand rail.</li>
                                    <li>For questions on how to get started, sign-up or email edpresso@educative.io</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Container>
            {/* contributor */}
            <Container data-aos="fade-up" className='py-5'>
                <h2 className='text-center'>Contribute to Edpresso today! </h2>
                <p className='text-center'>There are two ways that you can contribute to the growing Edpresso database.
                </p>
                <Row className='g-4 my-5'>
                    <Col xs={12} md={4} >
                        <h2 className='fw-bold smallCenter my-3'>As a Community Contributor
                        </h2>
                        <ul>
                            <li>Can start writing as soon as you sign-up.</li>
                            <li>Can write on topics from our Official Edpresso topic list.</li>
                            <li>Receive a 3-month Educative Unlimited gift subscription each time one of your shots receives the most views in a certain month.</li>
                            <li> For more information on what sorts of perks are associated with being an Edpresso contributor, click here.
                            </li>

                        </ul>
                    </Col>
                    <Col xs={12} md={4} >
                        <h3 className='fs-1 text-center my-5'>OR</h3>
                    </Col>
                    <Col xs={12} md={4} >
                        <h2 className='fw-bold smallCenter my-3'>As a Technical Writing Workshop participant </h2>
                        <ul>
                            <li>You will work with the Edpresso team over a three-week period to write an article and get it ready for publication.</li>
                            <li>You will walk away from the workshop with a published article and tangible skills to add to your resume.</li>
                            <li>You will be able to develop valuable writing skills to support you as you grow in your career.</li>
                            <li> Sign-ups for the Spring Technical Writing Workshop will open this summer. Click here for more information.    </li>

                        </ul>
                    </Col>
                </Row>
            </Container>
            {/* sign up btn */}
            <Container fluid data-aos="fade-up-left" className='middle py-5'>
                <h2 className='text-center fs-1 fw-bold my-5'>Sign-up to write!</h2>
                <Button variant='btn btn-primary mx-auto d-block'>Here</Button>
            </Container>
            {/* Faq */}
            <Container data-aos="fade-up" className='  my-5'>
                <Row>
                    <Col xs={12} md={4}>
                        <h2 className='my-5 mx-auto fs-1 text-start'>Frequently asked <br /> questions</h2>
                        <p className=' text-center'>Haven’t found what you were looking for? Contact Us</p>
                    </Col>
                    <Col xs={12} md={8}>
                        <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen >
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>Is there a review process?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, each shot goes through a content and grammar review that takes about 3-4 days. However, if there is an influx of submissions, it may take longer.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What do I write on?</Accordion.Header>
                                <Accordion.Body>
                                    You can write on any topic from our Edpresso topic list or suggest a topic of your own</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>More questions?</Accordion.Header>
                                <Accordion.Body>
                                    Visit our FAQ page!</Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>
            </Container>
            {/* on the fence */}
            <Container data-aos="fade-left " fluid className=' py-5 text-center'>
                <h2 className='text-center'>On the fence?</h2>
                <Container className='text-center my-5 bigWidth'>
                    <ul className='text-start '>
                        <li>Email edpresso@educative.io</li>
                        <li> schedule a call for more information!</li>
                        <li>Check out our FAQ page and/or our EdPresso Community Guidelines for more information.</li>
                    </ul>
                </Container>
            </Container>
        </>
    )
}
