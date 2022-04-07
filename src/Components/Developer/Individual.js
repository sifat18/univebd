import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import indi from '../images/indi.png'
import indi2 from '../images/indi2.png'
import check from '../images/check.png'
import indi4 from '../images/indi4.webm'
import indi3 from '../images/indi3.png'
import st from '../images/steps.png'
import ar from '../images/icons8-arrow-.png'

import useData from '../dataloadHooks/dataload'
import ReviewCard from '../Common/ReviewCard'
import NormalCards from '../Common/NormalCards'
export default function Individual() {
    const [item] = useData();

    return (
        <>
            {/* top part */}
            <Container className='my-5'>
                <section className='text-center '>
                    <h2 className=''>Your future starts here.</h2>
                    <h4 className=' mt-3  ps-1'>World-class courses for world-class software developers</h4>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3 w-25' href="#">Start a free trial</Button>
                    </div>
                    <div >
                        <img className='img-fluid w-50' src={indi} alt="" />

                    </div>
                </section>
            </Container>
            {/* middle part */}
            <Container fluid className='text-center py-5 middle'>
                {/* middle part */}
                <NormalCards
                    titleSection={"How we help"}
                    card1Msg={"Has it been a while since you used a certain skill? We hear that a lot. Our hands-on courses help you practice right in your browser, so you'll sharpen those skills in no time."}
                    card1Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card1Name={"Shake the rust"}
                    card2Msg={"Land your dream job. We can help whether you're days or weeks away from your next technical interview. Our customers now work at FAANG and Fortune500 companies around the world."}
                    card2Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card2Name={"Interview prep"}
                    card3Msg={"95% of engineers want to learn a new skill each year. Join them and accelerate your growth with our interactive experiences that help you test, learn, and grow."}
                    card3Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card3Name={"Grow your career"}
                />

            </Container>

            {/* Educative difference */}
            <Container fluid className='text-center py-5 '>
                <section className='container my-5 '>
                    <h1 className=''>The Educative Difference</h1>
                    <Row className='my-5 py-5'>
                        <Col xs={6}>
                            <img className='img-fluid' src={indi2} alt="" />
                        </Col>
                        <Col xs={6} className="text-start">
                            <h3>Better than videos</h3>
                            <p className='text-start'>Reading is faster than watching: The average tutorial is spoken at 150 words per minute. You can read at 250. That’s why our courses are laid out as rich text and interactive experience so you learn more, learn faster, and learn exactly what you need.</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="text-start">
                            <h3>Slick coding environments</h3>
                            <p className='text-start'>Have your team practice as they learn with full-fledged code playgrounds inside their browsers.</p>
                            <div className="text-start">

                                <p><img src={check} alt="" className='img-fluid ' /> No time is wasted on set-up</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Dozens of technologies supported</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Test skills with in-course Assessment</p>
                            </div>
                            <img className='mt-5 w-75' src={indi3} alt="" />
                        </Col>
                        <Col xs={6}>
                            <video loop="true" className='w-50' autoplay="autoplay" muted >
                                <source src={indi4} type='video/mp4' />
                            </video>
                        </Col>
                    </Row>
                </section>

            </Container>

            <Container fluid className='text-center py-5 middle'>
                <section className='container mt-5'>
                    <h3 className='text-center fw-bold fs-2'>Stop scrolling. Start coding. </h3>
                    <p className=' text-center fs-7 mt-2 ps-2'>Kick off your new skillset with these free courses.</p>
                    <Container className='my-5 mx-2'>
                        <Row xs={1} md={3} className="g-4 ms-5 ps-5">
                            {item.map((id) => (
                                <Col key={id.key}>
                                    <Card className='py-1'>
                                        <Card.Img variant="top" className='img-fluid ' src={id.coverImageUrl} />
                                        <Card.Body className='text-start'>
                                            <p>educative</p>
                                            <Card.Title >{id.title}</Card.Title>
                                            <Card.Text>{id.synopsis.slice(0, 100)}              </Card.Text>
                                        </Card.Body>
                                        <Row>
                                            <Col xs={6}>
                                                <p><img src={st} alt="" height={25} /></p>
                                                <p className='fs-7'>Beginner</p>
                                            </Col>
                                            <Col xs={6}>
                                                <Button className='p-3' variant="">Get Started <img src={ar} alt="" /></Button>

                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

            </Container>
            <Container fluid className='text-center py-5 '>
                <section className='container mt-5'>
                    <h1 className=''>Curated Paths</h1>
                    <h5 className='text-center'>Go in-depth and become a subject matter expert </h5>
                    <h5 className='text-center'> with our hand-picked, curated content.</h5>
                    <Row className='my-5'>
                        <Col xs={4}>
                            <Card className='bg-dark text-white'>
                                <Card.Img variant="img-fluid" height={250} src="https://repository-images.githubusercontent.com/353592899/33d81200-a1d0-11eb-87ec-74fc98b824ea" />
                                <Card.Body className='text-start'>
                                    <Card.Title className='fw-bold'>Python for Programmers </Card.Title>
                                    <Card.Text>
                                        Has it been a while since you used a certain skill? We hear that a lot. Our hands-on courses help you practice right in your browser, so you'll sharpen those skills in no time.
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={6}>
                                        <h4 className='text-start ms-3'>4 modules</h4>
                                    </Col>
                                    <Col xs={6}>
                                        <Button className='p-3' variant="dark">Preview <img src={ar} alt="" /></Button>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <Card className='bg-dark text-white'>
                                <Card.Img variant="img-fluid" height={250} src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30316331.jpg" />
                                <Card.Body className='text-start'>
                                    <Card.Title className='fw-bold' >Become a Machine learning Engineer</Card.Title>
                                    <Card.Text>
                                        Land your dream job. We can help whether you're days or weeks away from your next technical interview. Our customers now work at FAANG and Fortune500 companies around the world.
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={6}>
                                        <h4 className='text-start ms-3'>6 modules</h4>
                                    </Col>
                                    <Col xs={6}>
                                        <Button className='p-3' variant="dark">Preview <img src={ar} alt="" /></Button>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={4} >
                            <Card className='bg-dark text-white'>
                                <Card.Img variant="img-fluid" height={250} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhd8iGwfvol0_yRJ0jOhD-oEI9cIjGqMuwQ&usqp=CAU" />
                                <Card.Body className='text-start'>
                                    <Card.Title className='fw-bold'>C++ for programmers </Card.Title>
                                    <Card.Text>
                                        95% of engineers want to learn a new skill each year. Join them and accelerate your growth with our interactive experiences that help you test, learn, and grow.
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={6}>
                                        <h4 className='text-start ms-3'>6 modules</h4>
                                    </Col>
                                    <Col xs={6}>
                                        <Button className='p-3' variant="dark">Preview <img src={ar} alt="" /></Button>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                </section>

            </Container>
            <Container fluid className='text-center py-5 middle'>
                {/* middle part */}
                <section className='container mt-5'>
                    <h1 className=''>Simple pricing, uniquely yours</h1>
                    <Row className='my-5'>
                        <Col xs={4} className='mt-5'>
                            <Card className="text-center pt-5">
                                <Card.Title>Annual Plan</Card.Title>
                                <p className='text-decoration-line-through'>$16.66</p>
                                <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                                <p>discounted price for </p>
                                <p className='fs-5'> $139 billed annually</p>
                                <Button variant="outline-primary text-center w-50 mx-auto">Get Unlimited</Button>
                                <p className='text-decoration-underline'>Choose a 2 year plan</p>
                                <Card.Body className='text-start mx-auto my-3'>
                                    <p><img src={check} alt="" />24 months of unlimited access</p>
                                    <p><img src={check} alt="" />Completion certificates</p>
                                    <p><img src={check} alt="" />New courses every week</p>
                                    <p><img src={check} alt="" />Early access to upcoming courses</p>
                                </Card.Body>
                                <Card.Footer className="text-muted">Gift A subscription</Card.Footer>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <Card className="text-center pt-5">
                                <Card.Title>Annual Plan</Card.Title>
                                <p className='text-decoration-line-through'>$16.66</p>
                                <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                                <p>discounted price for </p>
                                <p className='fs-5'> $139 billed annually</p>
                                <Button variant="outline-primary text-center w-50 mx-auto">Get Unlimited</Button>
                                <p className='text-decoration-underline'>Choose a 2 year plan</p>
                                <Card.Body className='text-start mx-auto my-3'>
                                    <p><img src={check} alt="" />24 months of unlimited access</p>
                                    <p><img src={check} alt="" />Completion certificates</p>
                                    <p><img src={check} alt="" />New courses every week</p>
                                    <p><img src={check} alt="" />Early access to upcoming courses</p>
                                </Card.Body>
                                <Card.Footer className="text-muted">Gift A subscription</Card.Footer>
                            </Card>
                        </Col>
                        <Col xs={4} className='mt-5'>
                            <Card className="text-center pt-5">
                                <Card.Title>Annual Plan</Card.Title>
                                <p className='text-decoration-line-through'>$16.66</p>
                                <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                                <p>discounted price for </p>
                                <p className='fs-5'> $139 billed annually</p>
                                <Button variant="outline-primary text-center w-50 mx-auto">Get Unlimited</Button>
                                <p className='text-decoration-underline'>Choose a 2 year plan</p>
                                <Card.Body className='text-start mx-auto my-3'>
                                    <p><img src={check} alt="" />24 months of unlimited access</p>
                                    <p><img src={check} alt="" />Completion certificates</p>
                                    <p><img src={check} alt="" />New courses every week</p>
                                    <p><img src={check} alt="" />Early access to upcoming courses</p>
                                </Card.Body>
                                <Card.Footer className="text-muted">Gift A subscription</Card.Footer>
                            </Card>
                        </Col>
                    </Row>

                </section>

            </Container>

            {/* Review */}
            <Container fluid className='text-center py-5 '>
                <ReviewCard />

            </Container >
        </>
    )
}
