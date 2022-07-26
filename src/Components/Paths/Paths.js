import React from 'react'
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap'
import useData from '../dataloadHooks/dataload';
import path from '../images/path.png'
import ar from '../images/icons8-arrow-.png'
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseCard from '../Common/CourseCard';

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
                        <CourseCard id={id}/>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
