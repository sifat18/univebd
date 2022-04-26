import React from 'react'
import { Accordion, Button, Col, Container, Form, Row } from 'react-bootstrap'
import instruct from '../images/instructor/instruct.png'
import chair from '../images/instructor/chair.png'
import phone from '../images/instructor/phone.png'
import ppl from '../images/instructor/ppl.png'
import code from '../images/instructor/code.png'
import lady from '../images/instructor/chair-lady.png'
import Header from '../Header/Header'
export default function Instructor() {
    return (
        <>
            <Header />
            {/* top */}
            <Container data-aos="fade-up" className=''>
                <Row className='my-5 container'>
                    <Col xs={12} md={6} className='text-start ps-3 ms-5 '>
                        <h2 className='fs-1 fw-bold'>Shape the future</h2>
                        <h3 className='my-4 fs-3 text-primary fw-bold'>Join our team as an Unive  <br /> instructor</h3>
                        <p className='smallText fw-normal'>Share your expertise and empower more people <br /> to learn, advance their career and change the <br /> world.
                        </p>
                        <p className='smallText fw-normal'> Build your reputation, and earn income for the <br /> courses you create.</p>
                        <Button className='p-3 mt-3 bluebtn' href="#">Become an Instructor</Button>
                    </Col>
                    <Col xs={12} md={5} className='my-5'>
                        <img className='img-fluid' src={instruct} alt="" />
                    </Col>
                </Row>

            </Container>
            {/* why teach unive */}
            <Container data-aos="fade-right" className='text-center my-5'>
                <h2 className='fs-1'>Why Teach at Unive?</h2>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid mb-3' src={chair} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>Interactivity means better learning outcomes</h2>
                        <p className='smallText my-4 text-start'>Educative's unique platform lets you bring your lessons to life with interactive code that runs right in the lesson, saving learners set-up time and increasing their learning.</p>
                    </Col>
                </Row>
            </Container>
            {/* Magic text */}
            <Container data-aos="fade-up-left " className='text-center my-5 middle'>
                <Row className='my-5'>

                    <Col xs={12} md={5}>
                        <h2 className='fs-1 smallCenter '>The magic of text</h2>
                        <p className='smallText ms-3 my-4 text-start'>All our courses are text-based, because developers prefer to learn that way. And that means no fiddling with cameras, no expensive studio equipment, no video editing skills to master… it’s just you, your keyboard, and your ideas.</p>
                    </Col>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={code} alt="" />
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={ppl} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>Focus on teaching, not marketing</h2>
                        <p className='smallText my-4 text-start'>From the moment you hand it off, your course will be launched to the rapidly growing community of more than 750,000 developers on our platform. Educative’s in-house marketing team will make your course shine, with newsletters, advertising, social media, and more.</p>
                    </Col>
                </Row>
                <Row className='my-5'>

                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>Get support when you need it</h2>
                        <p className='smallText my-4 text-start'> Our dedicated Author Success team is available to work with you every step of the way. Need help brainstorming? Want early feedback on your lessons? Troubleshooting a custom environment? A full technical and editorial review? We’ve got you covered.</p>
                    </Col>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={phone} alt="" />
                    </Col>
                </Row>
            </Container>
            <hr className='w-25 fw-bold mx-auto' />
            {/* instructor */}
            <Container data-aos="fade-up-left" className='text-center my-2  py-5'>
                <h2 className='fs-1 fw-bold'>  Join our Community of Instructors</h2>
                <Row className='my-5'>

                    <Col xs={12} md={4} className=" mb-5">
                        <div class="bg-white  py-5 px-4"><img src={'rev1'} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <p className='text-start my-3 text-muted'>
                                A rich yet very easy to use platform, a wonderful team and a true opportunity to make a difference by sharing my skills - couldn't have asked for better!"
                            </p>
                            <h5 class="fw-bold text-start"> Samia Khalid</h5>
                            <h5 class="fw-bold text-start">Senior AI Engineer at Microsoft</h5>

                        </div>
                    </Col>
                    <Col xs={12} md={4} className=" mb-5">
                        <div class="bg-white py-5 px-4"><img src={'rev3'} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <p className='text-start my-3 text-muted'>
                                "Their platform has allowed me to help a broader audience of learners. I look forward to working with them again in the future!"
                            </p>
                            <h5 class="fw-bold text-start"> Vincent Russo</h5>
                            <h5 class="fw-bold text-start">Security software developer</h5>

                        </div>
                    </Col>

                    <Col xs={12} md={4} className=" mb-5">
                        <div class="bg-white py-5 px-4"><img src={'rev2'} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <p className='text-start my-3 text-muted'>
                                "Thank you, Educative! I'm proud of the quality of my course, full of detailed illustrations and interactive quizzes to help users solidify their learning."
                            </p>
                            <h5 class="fw-bold text-start"> Dmitry Vostokov</h5>
                            <h5 class="fw-bold text-start">Principle Cloud Security Engineer, Oracle</h5>

                        </div>
                    </Col>
                </Row>
                <Button className='p-3 mt-3' href="#">Become an Instructor</Button>

            </Container>
            {/* faq */}
            <Container data-aos="fade-left" className='bigWidth  my-5'>
                <h2 className='my-5 fs-1 text-center'>Frequently Asked Questions</h2>
                <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen >
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>I'm ready to get started! What are my next steps?</Accordion.Header>
                        <Accordion.Body>
                            Just complete the Educative Author Form and an Author Representative will reach out to you. You’ll let us know what you want to teach, and we’ll support you in getting started.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>I have published a book that would make an awesome course, but just don't have the time right now. What can I do?</Accordion.Header>
                        <Accordion.Body>
                            No problem. We can take something you’ve already written and handle the entire course creation process for you through our Managed By Educative (MBE) Program. Please complete the Educative Author Form to get started.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What makes a successful author at Educative?</Accordion.Header>
                        <Accordion.Body>
                            Paths are collections of our best lessons from across our library curated to help learners achieve a specific learning goal. The lessons gradually build from fundamentals to advanced
                            practice to ensure each learner leaves with a complete and practiced understanding of the Path's subject.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Can we check which candidates use the Path?</Accordion.Header>
                        <Accordion.Body>
                            Educative Authors are experts in their technical subject matter and want to share their knowledge with others. In addition, Educative Authors write well and clearly — most have experience teaching others. Using the powerful interactive tools in the Educative platform, our Authors create organized and engaging courses that deliver successful learning outcomes.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>I think I have some ideas, but don't know where to start. Can you help?</Accordion.Header>
                        <Accordion.Body>
                            Sure thing! Our team would be glad to help you think through possibilities. We’re always interested in courses on the following topics: Cybersecurity, cloud computing, cloud cert, APIs, front end, and back end, as well as others. After you complete the Educative Author Form, we’ll contact you and can schedule a call.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            {/* instructor form */}
            <Container fluid className='middle py-5 text-center'>
                <h2 className='text-center'>Become an Unive Instructor</h2>
                <Row className='my-5'>
                    <Col xs={12} md={6}>
                        <img className='img-fluid' src={lady} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label >Area of Interest*</Form.Label>
                            <Form.Select >
                                <option>please select</option>
                                <option>Computer Science</option>
                                <option>Electrical </option>
                            </Form.Select>
                            <Form.Label>Course topic(s)*</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Label>What is your Subject Matter Expertise?*</Form.Label>
                            <p>Ex. 15 Years MS Stack, 3 Years of Java, 3 years of AWS/Azure, 2 years of Node.js</p>
                            <Form.Control type="text" placeholder="" />
                            <p>Have you experienced one of our interactive courses?*</p>
                            <p>If you have taken a course or tried a course, select yes.</p>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group1"
                                type='radio'
                                id={`inline-radio-1`}
                            />
                            <Form.Check
                                inline
                                label=" NO"
                                name="group1"
                                type='radio'
                                id={`inline-radio'-1`}
                            />
                            <Form.Label >How did you hear about us?*</Form.Label>
                            <Form.Select >
                                <option>please select</option>
                                <option>Computer Science</option>
                                <option>Electrical </option>
                                <Form.Label>Course topic(s)*</Form.Label>
                                <Form.Control type="text" placeholder="" />
                                <Form.Label>Course topic(s)*</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Select>

                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
