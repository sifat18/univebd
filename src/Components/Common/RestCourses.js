import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import st from '../images/steps.png'
import ar from '../images/icons8-arrow-.png'

export default function RestCourses({ show, courses }) {
    return (
        <>

            {courses.map((id) => (
                <Col className={show ? 'd-block' : 'd-none'} key={id._id}>
                    <Card className='py-1'>
                        <Card.Img variant="top" className='img-fluid ' src={id.imageLink} />
                        <Card.Body className='text-start'>
                            <p>Unive</p>
                            <Card.Title >{id.coursename}</Card.Title>
                            <Card.Text>{id.about.slice(0, 100)}              </Card.Text>
                        </Card.Body>
                        <Row>
                            <Col xs={6}>
                                <p><img src={st} alt="" height={25} /></p>
                                <p className='fs-7'>Beginner</p>
                            </Col>
                            <Col xs={6}>
                                <NavLink to={`/learn/${id._id}`}> <Button className='p-3' variant="outline-dark">preview <img src={ar} alt="" /></Button></NavLink>

                            </Col>
                        </Row>
                    </Card>
                </Col>
            ))}
        </>
    )
}
