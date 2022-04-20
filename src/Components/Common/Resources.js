import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Resources() {
    return (
        <section className='container mt-5'>
            <h3 className='fw-bold fs-'>Resources </h3>
            <h3 className=' fs-5  ps-2'>Read more about onboarding and retaining your team</h3>
            <Container className='my-5 '>
                <Row>
                    {/* 5 tips */}
                    <Col xs={12} md={6} className='mb-3' >
                        <Card className='' >
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
                    {/* manage */}
                    <Col xs={12} md={6} className=' '>
                        <Card className=''>
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
                {/* onboarding */}
                <Row className='my-5'>
                    <Col xs={10} md={6}>
                        <img className='img-fluid' src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/how-to-start-a-blog.webp" alt="" /></Col>
                    <Col xs={10} md={6} className='text-start mt-5'>
                        <h2>Create a great onboarding</h2>
                        <p>First impressions matter. Help your new engineers contribute to code faster and settle into their new role with this ebook.</p>
                        <Button variant="primary">Go somewhere</Button>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
