import React from 'react'
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap'
import useData from '../dataloadHooks/dataload';
import path from '../images/path.png'
import ar from '../images/icons8-arrow-.png'

export default function Paths() {
    const [item] = useData();
    const getAll = data => {
        console.log(data);
    }
    return (
        <>
            <Container fluid className=' my-5 pt-5 '>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <section className='text-start ms-5 mt-5 ps-5 '>
                                <h2 className='fs-1 fw-bold'>Learning Paths</h2>
                                <h2 className='fs-5 '>All our Learning Paths are carefully curated to help you achieve a specific learning goal. Find the perfect Learning Path for your needs here.</h2>
                            </section>
                        </Col>
                        <Col xs={4}>
                            <img src={path} alt="" />
                        </Col>
                    </Row>
                    <Nav variant="tabs" defaultActiveKey="/home">
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
                                    <Col xs={5} className='ms-2 ps-3 mt-3'>
                                        <p className='fs-7'>Beginner</p>
                                    </Col>
                                    <Col xs={6} className='py-3'>
                                        <Button className=' w-100 h-100' variant="warning">Get Started <img src={ar} alt="" /></Button>

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
