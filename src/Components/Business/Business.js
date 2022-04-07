import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import bus from '../images/bus.jpg'
import bus2 from '../images/bus2.png'
import check from '../images/check.png'
import bus3 from '../images/bus3.png'
import ar from '../images/icons8-arrow-.png'
import bus4 from '../images/bus4.png'
export default function Business() {
    return (
        <>
            {/* top part */}
            <Container className='my-5'>
                <section className='text-center '>
                    <h2 className=''>Start new developers.</h2>
                    <h2 className=' mt-3  ps-1'>Keep the ones you already have.</h2>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3 w-25' href="#">Start a free trial</Button>
                    </div>
                    <div >
                        <img className='img-fluid w-50' src={bus} alt="" />
                        <img className='img-fluid my-2' src={bus2} alt="" />

                    </div>
                </section>
            </Container>
            {/* middle part */}
            <Container fluid className='text-center py-5 middle'>
                {/* middle part */}
                <section className='container mt-5'>
                    <h1 className=''>The Full Educative Experience</h1>
                    <Row className='my-5'>
                        <Col xs={6}>
                            <img className='img-fluid' src={bus3} alt="" />
                        </Col>
                        <Col xs={6}>
                            <h3>Introducing Educative Onboarding</h3>
                            <p className='text-start'>The clock is ticking on your team. The average tenure of a software engineer is just 2 years. Help them contribute to code faster and keep them longer by leveraging best practices</p>
                            <div className="text-start">
                                <p><img src={check} alt="" className='img-fluid ' /> Asynchronous learning</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Ask for help</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Organized documentation</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Upskill your current team</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <h3>The Classic: Educative Learning</h3>
                            <p className='text-start'>Access to our world-class catalog of 300 hands-on, interactive courses that help software engineers learn by doing, not watching. Nothing to configure. Explore the new courses added each week</p>
                            <div className="text-start">

                                <p><img src={check} alt="" className='img-fluid ' /> Learn at your own pace</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Retain more information</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Practice</p>
                            </div></Col>
                        <Col xs={6}>
                            <img className='img-fluid' src={bus4} alt="" />
                        </Col>
                    </Row>
                </section>

            </Container>

            {/* 2nd last part */}
            <Container fluid className='text-center py-5 '>
                {/* middle part */}
                <section className='container mt-5'>
                    <h1 className=''>What our users are saying</h1>
                    <Container className='my-5 text-start'>
                        <Row>
                            <Col xs={12} md={5} className='bg-white shadow h-50 p-5'>
                                <div><i class="fa-solid fa-quote-left"></i></div>
                                <p className=' mx-1 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>
                            </Col>
                            <Col xs={0} md={1} ></Col>
                            <Col xs={12} md={5} className='bg-white p-5 shadow '>
                                <div style={{ paddingTop: "-50px" }}> <i className="fa-solid fa-quote-left"></i>
                                </div>
                                <p className='mx-1 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>

                            </Col>
                        </Row>
                    </Container>

                </section>

            </Container >

            <Container fluid className='text-center py-5 middle'>
                <section className='container mt-5'>
                    <h3 className='fw-bold fs-'>Resources </h3>
                    <h3 className=' fs-5  ps-2'>Read more about onboarding and retaining your team</h3>
                    <Container className='my-5 mx-5'>
                        <Row>
                            <Col className='' >
                                <Card className='w-75' >
                                    <Card.Img variant="top" className='img-fluid ' src="https://media.istockphoto.com/vectors/finding-new-ideas-problem-solving-vector-illustration-banner-teamwork-vector-id959212324?b=1&k=20&m=959212324&s=612x612&w=0&h=UpW-f5_kylsJqqBSjZ0TCnO_p2a5qaoHNRZLRvv9NuM=" />
                                    <Card.Body className='text-start'>
                                        <Card.Title>5 tips for technical interviews</Card.Title>
                                        <Card.Text>
                                            Conducting technical interviews can feel chaotic, but it doesn't have to. Learn the essentials for conducing great interviews.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className=''>
                                <Card className='w-75'>
                                    <Card.Img variant="top" className='img-fluid ' src="https://media.istockphoto.com/vectors/finding-new-ideas-problem-solving-vector-illustration-banner-teamwork-vector-id959212324?b=1&k=20&m=959212324&s=612x612&w=0&h=UpW-f5_kylsJqqBSjZ0TCnO_p2a5qaoHNRZLRvv9NuM=" />
                                    <Card.Body className='text-start'>
                                        <Card.Title>How-to manage distributed teams</Card.Title>
                                        <Card.Text>
                                            You're working remote. They're working remote. Learn the essentials to successfully manage a distributed team..
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className='my-5'>
                            <Col >
                                <img className='img-fluid' src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/how-to-start-a-blog.webp" alt="" /></Col>
                            <Col className='text-start mt-5'>
                                <h2>Create a great onboarding</h2>
                                <p>First impressions matter. Help your new engineers contribute to code faster and settle into their new role with this ebook.</p>
                                <Button variant="primary">Go somewhere</Button>

                            </Col>
                        </Row>
                    </Container>
                </section>

            </Container>
            <Container className='my-5 w-75'>
                <Row className='my-5'>
                    <Col >
                        <img className='img-fluid' src="https://thumbs.dreamstime.com/b/solution-loading-vector-illustration-concepts-problem-solving-progress-doodle-121718155.jpg" alt="" /></Col>
                    <Col className='text-start mt-5 mx-0'>
                        <h2>Ready for a demo?</h2>
                        <p>See Educative in action to learn how the power of developer experiences can push your team faster and farther than ever before.</p>
                        <Button variant="primary">Request Demo</Button>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
