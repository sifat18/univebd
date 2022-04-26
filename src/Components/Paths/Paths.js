import React from 'react'
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap'
import useData from '../dataloadHooks/dataload';
import path from '../images/path.png'
import ar from '../images/icons8-arrow-.png'
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';

export default function Paths() {
    const [item] = useData();
    const getAll = data => {
        console.log(data);
    }
    return (
        <>
            <Header />
            <Container fluid className=' my-5 pt-5 '>
                <Container>
                    <Row className='mb-3'>
                        <Col xs={12} md={6} className='order-md-1 order-2'>
                            <section className='text-start ms-5 mt-5 '>
                                <h2 className='fs-1 fw-bold'>Learning Paths</h2>
                                <h2 className=' smallText'>All our Learning Paths are carefully curated to help you achieve a specific learning goal. Find the perfect Learning Path for your needs here.</h2>
                            </section>
                        </Col>
                        <Col xs={12} md={4} className='order-md-2 order-1'>
                            <img className='img-fluid ' src={path} alt="" />
                        </Col>
                    </Row>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link onClick={() => getAll('all')}>All path</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => getAll('filter')}>saved path</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => getAll('filter2')}>
                                In-progress path
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>

            </Container>
            <Container>
                <Row xs={1} md={3} className="g-4 bigMargin">
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
