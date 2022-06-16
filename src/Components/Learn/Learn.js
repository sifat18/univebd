import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import useData from '../dataloadHooks/dataload'
import ar from '../images/icons8-arrow-.png'
import st from '../images/steps.png'
import dr from '../images/icons8-down-arrow-40.png'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import useAuth from '../Context/useAuth'
import Footer from '../Footer/Footer'
import RestCourses from '../Common/RestCourses'
export default function Learn() {
    const { user,admin } = useAuth()

    const [item] = useData();
    const [disp, setdisp] = useState(false)
    const [disp2, setdisp2] = useState(false)

    const handleShow = () => {
        setdisp(!disp)
    }

    const handleShow2 = () => {
        setdisp2(!disp2)
    }
    return (
        <>
            <Header />
            <Container fluid className='my-5'>
                {/* free courses */}
                <Container className='text-center'>
                    <h2 className='my-5 fw-bold'>{user.displayName && `Welcome ${user.displayName}`}</h2>
                    <section className='text-start my-5 ms-5'>
                        <p className='fs-4 smallText'>Get started with our free courses</p>
                    </section>
                    <Row xs={1} md={3} className="g-4 bigMargin">
                        {item.slice(0, 5).map((id) => (
                            <Col key={id._id}>
                                <Card className='py-1'>
                                    <Card.Img variant="top" className='img-fluid ' src={id.imageLink} />
                                    <Card.Body className='text-start'>
                                        <p>Unive</p>
                                        <Card.Title >{id.coursename}</Card.Title>
                                        <Card.Text>{id.about.slice(0, 100)}              </Card.Text>
                                    </Card.Body>
                                    <Row>
                                        <Col xs={admin?4:6}>
                                            <p><img src={st} alt="" height={25} /></p>
                                            <p className='fs-7'>Beginner</p>
                                        </Col>
                                        <Col xs={admin?8:6} className='d-flex justify-content-around'>
                                            <NavLink to={`/learn/${id._id}`}> <Button className='p-2' variant="outline-dark">Preview <img src={ar} alt="" /></Button></NavLink>
                                            {admin && <NavLink to={`/edit/${id._id}`}> <Button className='p-2' variant="outline-success">Edit Course <img src={'ar'} alt="" /></Button></NavLink>}
                                            

                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                        <RestCourses show={disp} admin={admin} courses={item.slice(5)} />
                    </Row>
                    <Button className='my-5 px-5 py-3' onClick={handleShow} variant="outline-dark">{!disp ? "show more" : "show Less"} <img src={dr} height={22} alt="" /></Button>

                </Container>

            </Container>
            {/* popular */}
            <Container fluid className='py-5 middle'>
                <Container className='text-center'>
                    <section className='text-start my-5 ms-5'>
                        <p className='fs-4 ps-3'>Popular Courses For You</p>
                    </section>
                    <Row xs={1} md={3} className="g-4 bigMargin">
                        {item.slice(0, 5).map((id) => (
                            <Col key={id._id}>
                                <Card className='py-1'>
                                    <Card.Img variant="top" className='img-fluid ' src={id.imageLink} />
                                    <Card.Body className='text-start'>
                                        <p>Unive</p>
                                        <Card.Title >{id.coursename}</Card.Title>
                                        <Card.Text>{id.about.slice(0, 100)}              </Card.Text>
                                    </Card.Body>
                                    <Row>
                                    <Col xs={admin?4:6}>
                                            <p><img src={st} alt="" height={25} /></p>
                                            <p className='fs-7'>Beginner</p>
                                        </Col>
                                        <Col xs={admin?8:6} className='d-flex justify-content-around'>
                                            <NavLink to={`/learn/${id._id}`}> <Button className='p-2' variant="outline-dark">Preview <img src={ar} alt="" /></Button></NavLink>
                                            {admin && <NavLink to={`/edit/${id._id}`}> <Button className='p-2' variant="outline-success">Edit Course <img src={'ar'} alt="" /></Button></NavLink>}

                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                        <RestCourses show={disp2} admin={admin} courses={item.slice(5)} />
                    </Row>
                    <Button className='my-5 px-5 py-3' onClick={handleShow2} variant="outline-dark">{!disp2 ? "show more" : "show Less"} <img src={dr} height={22} alt="" /></Button>

                </Container>

            </Container>
            <Container className='text-center py-5'>
                <h3>Take your skills to the next level.</h3>
                <Button className=' my-2 text-center' variant="primary">Explore all courses and paths </Button>

            </Container>
            <Footer />
        </>
    )
}
