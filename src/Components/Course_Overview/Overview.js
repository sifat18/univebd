import React, { useEffect, useState } from 'react'
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useParams } from "react-router-dom";
import Read from '../Common/Read';
import { MdOutlineQuiz } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { BsTropicalStorm } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CgBorderStyleDotted } from "react-icons/cg";
import { BsCodeSlash } from "react-icons/bs";
import { MdPhonelinkSetup } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { MdTextFields } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import Companies from '../Common/Companies';
import ReviewCard from '../Common/ReviewCard';
import Header from '../Header/Header';
export default function Overview() {

    const [courses, setcourses] = useState([])
    const course = useParams()
    useEffect(() => {
        fetch('../courses.json').then(res => res.json()).then(data => setcourses(data))
    }, [])
    const courseData = courses.find(sub => sub.name === course.courseName)
    console.log(courseData);

    const [arr, setArr] = useState(true)
    const [dispp, setDispp] = useState(false)
    const contentShow = () => {
        setArr(!arr)
    }
    const disp = () => {
        setDispp(!dispp)
    }
    return (
        <>
            <Header />
            {courseData &&
                <Container className='my-5 contentpadding hor'>
                    <Row className='gx-5'>
                        <Col xs={12} className='d-block d-md-none'>
                            <img className='img-fluid' src={courseData.image} alt="" />
                        </Col>
                        <Col xs={12} md={9} >
                            <h1 className='my-5'>{courseData?.name}</h1>
                            {/* quiz video bars */}
                            <div className="d-flex justify-content-start flex-wrap ">
                                <div class="p-2 bd-highlight border-secondary border mb-2 px-2 px-3"><MdOutlinePlayLesson className=' fs-4 me-2' />14 lessons</div>
                                <div class="p-2 bd-highlight border-secondary border mb-2 mx-3 px-2 px-3"><MdOutlineSlowMotionVideo className=' fs-4 me-2' />8 videos</div>
                                <div class="p-2 bd-highlight border-secondary border px-2 px-3"><MdOutlineQuiz className=' fs-4 me-2' />2 quizes</div>
                                <div class="p-2 bd-highlight border-secondary border px-2 px-3 mx-3"><BsTropicalStorm className=' fs-4 me-2' />5 illustrations</div>
                            </div>
                            {/* responsive display start btn */}
                            <div className=" my-3 d-block d-md-none">
                                <Card >
                                    <Card.Body className='mx-auto mt-4' >
                                        <NavLink to={`/learn/${course.courseName}/start`}><Button className='bluebtn btn py-2 px-5'>Start learning </Button></NavLink>
                                    </Card.Body>
                                    <hr className='bg-secondary' />
                                    <Card.Body>
                                        <p><AiOutlineFieldTime className='fs-4' /> Est. 2h to complete</p>
                                        <p><CgBorderStyleDotted className='fs-4' /> Beginner</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            {/* overview */}
                            <div className="my-5">
                                <h3>Course Overivew</h3>
                                <Read>{courseData?.aboutCourse || ''}</Read>
                            </div>
                            {/* how will you learn */}
                            <Row>
                                <h2>How Will You Learn</h2>
                                <Col xs={12} md={5}>
                                    <p className='fs-5'><BsCodeSlash className=' me-2' />Hands-on coding environments</p>
                                    <p>You don’t get better at swimming by watching others. Coding is no different. Practice as you learn with live code environments inside your browser.</p>
                                </Col>
                                <Col xs={12} md={5}>
                                    <p className='fs-5'><MdTextFields className=' me-2' />Faster than videos</p>
                                    <p>Videos are holding you back. The average video tutorial is spoken at 150 words per minute, while you can read at 250. That‘s why our courses are text-based.</p>
                                </Col>
                            </Row>
                            {/* part-2 */}
                            <Row>
                                <Col xs={12} md={5}>
                                    <p className='fs-5'><MdPhonelinkSetup className=' me-2' />No set-up required</p>
                                    <p>Start learning immediately instead of fiddling with SDKs and IDEs. It‘s all on the cloud.</p>
                                </Col>
                                <Col xs={12} md={5}>
                                    <p className='fs-5'><GrCertificate className=' me-2' />Progress you can show</p>
                                    <p>Built in assessments let you test your skills. Completion certificates let you show them off.</p>
                                </Col>
                            </Row>

                            <Row className='my-5'>
                                <div className='my-3 d-flex justify-content-between'>
                                    <h3>Course Content</h3>
                                    <Button onClick={contentShow} variant='btn btn-outline-info'>{arr ? 'Hide All Content' : 'Show All Content'}</Button>
                                </div>
                                <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen flush>
                                    <Accordion.Item eventKey="0" onClick={disp} >
                                        <Accordion.Header>Introduction</Accordion.Header>
                                        <Accordion.Body className={arr | dispp ? 'd-block' : 'd-none'}>
                                            <ul>
                                                <li>1</li>
                                                <li>1</li>
                                                <li>1</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" onClick={disp} >
                                        <Accordion.Header >Content2</Accordion.Header>
                                        <Accordion.Body className={arr || dispp ? 'd-block' : 'd-none'}>
                                            <ul>
                                                <li>1</li>
                                                <li>1</li>
                                                <li>1</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item >
                                    <Accordion.Item eventKey="2" onClick={disp} >
                                        <Accordion.Header >Content3</Accordion.Header>
                                        <Accordion.Body className={arr || dispp ? 'd-block' : 'd-none'}>
                                            <ul>
                                                <li>1</li>
                                                <li>1</li>
                                                <li>1</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" onClick={disp} >
                                        <Accordion.Header >Content4</Accordion.Header>
                                        <Accordion.Body className={arr || dispp ? 'd-block' : 'd-none'}>
                                            <ul>
                                                <li>1</li>
                                                <li>1</li>
                                                <li>1</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4" onClick={disp} >
                                        <Accordion.Header >Content5</Accordion.Header>
                                        <Accordion.Body className={arr || dispp ? 'd-block' : 'd-none'}>
                                            <ul>
                                                <li>1</li>
                                                <li>1</li>
                                                <li>1</li>
                                            </ul></Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Row>
                        </Col>
                        <Col md={2} className='d-none d-md-block pt-5 ' >
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={courseData?.image} />
                                <Card.Body className='mx-auto mt-4' sticky>
                                    <NavLink to={`/learn/${course.courseName}/start`}><Button className='bluebtn btn py-2 px-5'>Start learning </Button></NavLink>
                                </Card.Body>
                                <hr className='bg-secondary' />
                                <Card.Body>
                                    <p><AiOutlineFieldTime className='fs-4' /> Est. 2h to complete</p>
                                    <p><CgBorderStyleDotted className='fs-4' /> Beginner</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Container className='text-center'>
                    </Container>

                    {/* <iframe src={courseData?.demoVideo}
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='Xray'
                        width="560" height="315"
                    /> */}

                    {/* <ul>
                        {courseData?.whatWillYouLearn?.map(data => (
                            <li>{data}</li>
                        ))}
                    </ul> */}
                </Container>

            }
            <Container fluid className='middle py-5 ps-5 '>
                <Container>
                    <p>COURSE BY: <br /><MdPersonPin /> <NavLink to='/'>Unive</NavLink></p>
                </Container>
            </Container>
            <Container className='mb-5'>
                <Row>
                    <Col xs={12} md={6}>
                        <h3 className='py-5 mt-5'>যারা জব খুঁজছেন,যারা এমপ্লয়ী খুঁজছেন বা এমপ্লয়ী ট্রেইনিং দিতে চান <br />
                                কিংবা যারা শিখতে চান তারা সবাই ইউনিভ ব্যবহার করছেন</h3>
                    </Col>
                    <Col xs={12} md={6}>
                        <Companies />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
