import React from 'react'
import { Button,Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../Context/useAuth'
import ar from '../images/icons8-arrow-.png'
import st from '../images/steps.png'

export default function CourseCard({id}) {
    const { user, admin } = useAuth()
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
                <Col xs={admin ? 4 : 6}>
                    <p><img src={st} alt="" height={25} /></p>
                    <p className='fs-7'>Beginner</p>
                </Col>
                <Col xs={admin ? 8 : 6} className='d-flex justify-content-around'>
                    <NavLink to={`/learn/${id.coursename}`}> <Button className='p-2' variant="outline-dark">Preview <img src={ar} alt="" /></Button></NavLink>
                    {admin && <NavLink to={`/dashboard/edit/${id.coursename}`}> <Button className='p-2' variant="outline-success">Edit Course <img src={'ar'} alt="" /></Button></NavLink>}

                </Col>
            </Row>
        </Card>
    </Col>
    )
}
