import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import project from '../../images/project.png'
// import check from '../../images/check.png'
import { BsCheck2Circle } from "react-icons/bs";
import ar from '../../images/icons8-arrow-.png'
import useData from '../../dataloadHooks/dataload';
import { NavLink } from 'react-router-dom'
import Header from '../../Header/Header'
import './projects.css'
import Footer from '../../Footer/Footer'
import CourseCard from '../../Common/CourseCard';
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
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />Practice what you learned</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />Demonstrate your skill level</p>

                                </Col>
                                <Col>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' /> No download or setup required</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' /> Code inside your browser</p>
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
                      <CourseCard id={id}/>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
