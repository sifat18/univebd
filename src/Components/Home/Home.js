import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './home.css'
import home from '../images/home.png'
import home2 from '../images/home2.png'
import b2 from '../images/b2.mp4'
import bot from '../images/bot.jpg'
import bot2 from '../images/bot2.jpg'
import ar from '../images/icons8-arrow-.png'
import git from '../images/github-48.png'
import ht from '../images/html-5-48.png'
import js from '../images/javascript-48.png'
import jp from '../images/jupyter-48.png'
import md from '../images/mongodb-48.png'
import node from '../images/nodejs-48.png'
import vs from '../images/visual-studio-code-2019-48.png'
import sub from '../images/sublime-text-48.png'
import sql from '../images/sql-server-64.png'
import py from '../images/php-logo-48.png'
import php from '../images/python.gif'
import rec from '../images/react.gif'
export default function Home() {
    return (
        <>
            {/* top part */}
            <Container className='my-5'>
                <section className='text-center '>
                    <h1 className=''>Learn something new. Everyday.</h1>
                    <h5 className=' mt-3 ms-5 ps-5'>Educative helps software engineers and their teams increase productivity and reach their </h5>
                    <h5 className=' ms-5 '>potential</h5>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3' href="#">I'm an individual</Button>
                        <Button className='p-3 m-3' href="#">I'm a business</Button>
                    </div>
                    <div >
                        <img className='img-fluid' src={home} alt="" />
                        <p className='my-3'>Trusted by more than 1.1 million learners working for companies like
                            <img className='img-fluid my-5' src={home2} alt="" />

                        </p>
                    </div>
                </section>
            </Container>
            {/* middle part */}
            <Container fluid className='text-center py-5 middle'>
                {/* middle part */}
                <section className='container mt-5'>
                    <h1 className=''>Hands-on coding environments</h1>
                    <h5 className=' mt-3  ps-2'>You don’t get better at swimming by watching others. Coding is no different. Practice as </h5>
                    <h5 className=' ms-5 '>you learn with live code environments inside your browser.</h5>
                    <div className=" top-video mt-5   ">
                        <video loop="true" className='w-75 h-75' autoplay="autoplay" muted >
                            <source src={b2} type='video/mp4' />
                        </video>
                    </div>

                </section>
                <Row className='mt-5 ms-5'>
                    <Col xs={1}>
                        <Row className='mt-5'>
                            <Col xs={12}><img src={ht} alt="" /></Col>
                            <Col xs={12}><img src={git} alt="" /></Col>
                        </Row>

                    </Col>
                    <Col xs={1}>
                        <Row>
                            <Col xs={12}><img src={js} alt="" /></Col>
                            <Col xs={12}><img src={node} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row className='mt-5'>
                            <Col xs={12}><img src={sql} alt="" /></Col>
                            <Col xs={12}><img src={jp} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row>
                            <Col xs={12}><img src={vs} alt="" /></Col>
                            <Col xs={12}><img src={sub} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row className='mt-5'>
                            <Col xs={12}><img src={md} alt="" /></Col>
                            <Col xs={12}><img src={js} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row className=''>
                            <Col xs={12}><img src={js} alt="" /></Col>
                            <Col xs={12}><img src={py} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row className='mt-5'>
                            <Col xs={12}><img src={ht} alt="" /></Col>
                            <Col xs={12}><img src={vs} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row className=''>
                            <Col xs={12}><img src={jp} alt="" /></Col>
                            <Col xs={12}><img src={ht} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row className='mt-5'>
                            <Col xs={12}><img src={node} alt="" /></Col>
                            <Col xs={12}><img src={jp} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row className=''>
                            <Col xs={12}><img src={js} alt="" /></Col>
                            <Col xs={12}><img src={py} alt="" /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Row className='mt-5'>
                            <Col xs={12}><img src={jp} alt="" /></Col>
                            <Col xs={12}><img src={py} alt="" width='50' height='50' /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* 2nd last part */}
            <Container fluid className='text-center py-5 '>
                <section className='container mt-5'>
                    <h3 className='fw-bold'>Inspired by and developed for </h3>
                    <h3 className=' fw-bold  ps-2'>Engineers like you</h3>
                    <Container className='my-5'>
                        <Row>
                            <Col xs={6} className='p-0 m-0'>
                                <img src={bot} alt="" className='img-fluid' />
                                <div className='mt-5 border-end text-start'>
                                    <h2 className='' >Engineering Managers and Executives</h2>
                                    <p className=' mx-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>
                                    <Button variant="outline-secondary">See how <img src={ar} alt="" /></Button>
                                </div>
                            </Col>
                            <Col xs={6} className='p-0 m-0'>
                                <img src={bot2} alt="" className='img-fluid' />
                                <div className='mt-5 ps-5 text-start'>
                                    <h2 className=' '>Software Engineers</h2>
                                    <p className='mx-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>
                                    <Button variant="outline-secondary">See how <img src={ar} alt="" /></Button>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Container>
            <Container fluid className='text-center py-5 middle'>
                {/* middle part */}
                <section className='container mt-5'>
                    <h1 className=''>What our users are saying</h1>
                    <Container className='my-5 text-start'>
                        <Row>
                            <Col xs={12} md={5} className='bg-white shadow h-50 p-5'>
                                <div><i class="fa-solid fa-quote-left"></i></div>
                                <p className=' mx-1 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>
                            </Col>
                            <Col xs={0} md={1} ></Col>
                            <Col xs={12} md={5} className='bg-white p-5 shadow '>
                                <div style={{ paddingTop: "-50px" }}> <i className="fa-solid fa-quote-left"></i>
                                </div>
                                <p className='mx-1 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>

                            </Col>
                        </Row>
                    </Container>

                </section>

            </Container >
        </>
    )
}
