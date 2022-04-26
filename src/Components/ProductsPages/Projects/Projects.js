import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import project from '../../images/project.png'
import check from '../../images/check.png'
import ar from '../../images/icons8-arrow-.png'
import useData from '../../dataloadHooks/dataload';
import { NavLink } from 'react-router-dom'
import Header from '../../Header/Header'

export default function Projects() {
    const [item] = useData();

    return (
        <>
            <Header />
            <Container fluid className=' my-5 pt-5 '>
                <Row>
                    <Col xs={12} md={8} className='order-2 order-md-1'>
                        <section className='text-start mx-3 '>
                            <h2 className='fs-1 fw-bold'>Build real-world programming projects</h2>
                            <Row className=" py-5   ">
                                <Col>
                                    <p><img src={check} alt="" className='img-fluid ' /> Practice what you learned</p>
                                    <p><img src={check} alt="" className='img-fluid ' /> Demonstrate your skill level</p>

                                </Col>
                                <Col>
                                    <p><img src={check} alt="" className='img-fluid ' /> No download or setup required</p>
                                    <p><img src={check} alt="" className='img-fluid ' /> Code inside your browser</p>
                                </Col>

                            </Row>
                        </section>
                    </Col>
                    <Col xs={12} md={4} className='order-1 pb-5 order-md-2'>
                        <img src={project} alt="" />
                    </Col>
                </Row>
                <hr />
            </Container>
            <Container>
                <Row xs={1} md={3} className="g-4 bigMargin mb-5">
                    {item.map((id) => (
                        <Col key={id.key}>
                            <Card className='py-1'>
                                <Card.Img variant="top" className='img-fluid ' src={id.image} />
                                <Card.Body className='text-start'>
                                    <p>educative</p>
                                    <Card.Title >{id.name}</Card.Title>
                                    <Card.Text>{id.aboutCourse.slice(0, 100)}              </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={5} className='ms-2 ps-3 mt-3'>
                                        <p className='fs-7'>Beginner</p>
                                    </Col>
                                    <Col xs={6} className='py-3'>
                                        <NavLink to={`/learn/${id.name}`}> <Button className=' w-100 h-100' variant="warning">Get Started <img src={ar} alt="" /></Button></NavLink>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
