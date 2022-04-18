import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import useData from '../dataloadHooks/dataload';
import top from '../images/assesment/top.png'
export default function Assessments() {
    const [item] = useData();
    return (
        <>
            <Container data-aos="fade-up-right" fluid className='bg-primary mb-5 py-5'>
                <Container className='text-light'>
                    <Row>
                        <Col xs={8} >
                            <h5>Assessments</h5>
                            <h2 className='fs-1 mb-4'>Identify your skill gaps</h2>
                            <p className='fs-5'>Take an assessment to benchmark your current coding skills</p>
                            <p className='fs-5'>Understand your strengths and weaknesses, then get <br /> personalized recommendations to improve your SkillScore</p>
                        </Col>
                        <Col xs={4} >
                            <img src={top} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container data-aos="fade-up-left">
                <Row className='g-5'>
                    <Col xs={6}>
                        {item.map((id) => (
                            <Row key={id.key} xs={1} className="g-4 my-3 border">
                                <Col xs={12} md={4} className='border-end'>
                                    <img className='img-fluid ' src={id.coverImageUrl} alt="" />
                                </Col>
                                <Col xs={12} md={8}>
                                    <h5 className='fs-5'>Assesement</h5>
                                    <h2 className='my-2 text-start fs-4'>{id.title}</h2>
                                    <Button variant='btn btn-outline-primary py-2 px-5 d-block my-5 me-3 ms-auto'> Preview</Button>

                                </Col>

                            </Row>
                        ))}
                    </Col>
                    <Col xs={6}>
                        {item.map((id) => (
                            <Row key={id.key} xs={1} className="g-4 my-3 border">
                                <Col xs={12} md={4} className='border-end'>
                                    <img className='img-fluid ' src={id.coverImageUrl} alt="" />
                                </Col>
                                <Col xs={12} md={8}>
                                    <h5 className='fs-5'>Assesement</h5>
                                    <h2 className='my-2 text-start fs-4'>{id.title}</h2>
                                    <Button variant='btn btn-outline-primary py-2 px-5 d-block my-5 me-3 ms-auto'> Preview</Button>

                                </Col>

                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
