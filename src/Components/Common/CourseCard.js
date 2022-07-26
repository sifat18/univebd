import React from 'react'
import { Button,Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ar from '../images/icons8-arrow-.png'
import st from '../images/steps.png'

export default function CourseCard({id}) {
    return (
        <Col key={id._id}>
        <Card className='py-1'>
            <Card.Img variant="top" className='img-fluid ' src={id.imageLink} />
            <Card.Body className='text-start'>
                <p>Unive</p>
                <Card.Title >{id.coursename}</Card.Title>
                <Card.Text>{id.about.slice(0, 100)}              </Card.Text>
            </Card.Body>
            <Row>
                <Col xs={5} className='ms-2 ps-3 mt-3'>
                    <p className='fs-7'>Beginner</p>
                </Col>
                <Col xs={6} className='py-3'>
                    <NavLink to={`/learn/${id.coursename}`}>  <Button className=' w-100 h-100' variant="warning">Get Started <img src='{ar}' alt="" /></Button></NavLink>

                </Col>
            </Row>
        </Card>
    </Col>
    )
}
