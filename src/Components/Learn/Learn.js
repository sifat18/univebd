import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import useData from '../dataloadHooks/dataload'
import ar from '../images/icons8-arrow-.png'
import st from '../images/steps.png'
import dr from '../images/icons8-down-arrow-40.png'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
export default function Learn() {
    const [item] = useData();
    // console.log(item);
    return (
        <>
            <Header />
            <Container fluid className='my-5'>
                {/* free courses */}
                <Container className='text-center'>
                    <h2 className='my-5 fw-bold'>Welcome User</h2>
                    <section className='text-start my-5 ms-5'>
                        <p className='fs-4 smallText'>Get started with our free courses</p>
                    </section>
                    <Row xs={1} md={3} className="g-4 bigMargin">
                        {item.map((id) => (
                            <Col key={id.key}>
                                <Card className='py-1'>
                                    <Card.Img variant="top" className='img-fluid ' src={id.image} />
                                    <Card.Body className='text-start'>
                                        <p>Unive</p>
                                        <Card.Title >{id.name}</Card.Title>
                                        <Card.Text>{id.aboutCourse.slice(0, 100)}              </Card.Text>
                                    </Card.Body>
                                    <Row>
                                        <Col xs={6}>
                                            <p><img src={st} alt="" height={25} /></p>
                                            <p className='fs-7'>Beginner</p>
                                        </Col>
                                        <Col xs={6}>
                                            <NavLink to={`/learn/${id.name}`}> <Button className='p-3' variant="outline-dark">preview <img src={ar} alt="" /></Button></NavLink>

                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Button className='my-5 px-5 py-3' variant="outline-dark">show more <img src={dr} height={22} alt="" /></Button>

                </Container>

            </Container>
            {/* popular */}
            <Container fluid className='py-5 middle'>
                <Container className='text-center'>
                    <section className='text-start my-5 ms-5'>
                        <p className='fs-4 ps-3'>Popular Courses For You</p>
                    </section>
                    <Row xs={1} md={3} className="g-4 bigMargin">
                        {item.map((id) => (
                            <Col key={id.key}>
                                <Card className='py-1'>
                                    <Card.Img variant="top" className='img-fluid ' src={id.image} />
                                    <Card.Body className='text-start'>
                                        <p>Unive</p>
                                        <Card.Title >{id.name}</Card.Title>
                                        <Card.Text>{id.aboutCourse.slice(0, 100)}              </Card.Text>
                                    </Card.Body>
                                    <Row>
                                        <Col xs={6}>
                                            <p><img src={st} alt="" height={25} /></p>
                                            <p className='fs-7'>Beginner</p>
                                        </Col>
                                        <Col xs={6}>
                                            <NavLink to={`/learn/${id.name}`}><Button className='p-3' variant="outline-dark">preview <img src={ar} alt="" /></Button></NavLink>

                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Button className='my-5 px-5 py-3' variant="outline-dark">show more <img src={dr} height={22} alt="" /></Button>

                </Container>

            </Container>
            <Container className='text-center py-5'>
                <h3>Take your skills to the next level.</h3>
                <Button className=' my-2 text-center' variant="primary">Explore all courses and paths </Button>

            </Container>
        </>
    )
}
