import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import project from '../../images/project.png'
import check from '../../images/check.png'
export default function Projects() {
    return (
        <Container fluid className=' my-5 pt-5 '>
            <Row>
                <Col xs={8}>
                    <section className='text-start ms-5 ps-5 '>
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
                <Col xs={4}>
                    <img src={project} alt="" />
                </Col>
            </Row>
            <hr />
        </Container>
    )
}
