import { useEffect, useState } from 'react';
import { Accordion, Alert, Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { BsTropicalStorm } from "react-icons/bs";
import { MdOutlinePlayLesson, MdOutlineQuiz, MdOutlineSlowMotionVideo, MdQuiz } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Read from '../Common/Read';

import axios from 'axios';
import { MdPersonPin } from "react-icons/md";
import Companies from '../Common/Companies';
import LoginModal from '../Common/LoginModal';
import useAuth from '../Context/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './over.css';

export default function Overview() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [Lshow, setLShow] = useState(false);
    const handleCloseL = () => setLShow(false);
    const handleShowL = () => setLShow(true);
    const handleClose = (flag) => {
        setShow(false);
// if true navigate
        if(flag){
            window.open('/dashboard/mycourses','_blank')
        // navigate('/dashboard/mycourses')
    }
}
    const handleShow = () => setShow(true);
    const [showF, setShowF] = useState(false);
    const handleCloseF = () => setShowF(false);
    const handleShowF = () => setShowF(true);
    const [courses, setcourses] = useState({})
    const { courseID } = useParams()
    // single data load based on id
    // https://api.unive.com.bd
    useEffect(() => {
        fetch(`https://api.unive.com.bd/api/course/${courseID}`).then(res => res.json()).then(data => setcourses(data))
    }, [courseID])
    // const [arr, setArr] = useState(true)
    // const contentShow = () => {
    //     setArr(!arr)
    // }
    const { user } = useAuth()

    const orderData = e => {
        e.preventDefault();
        const data = { email: user.email }
        data.course = courses;
        // data.orderStatus = 'Pending';
        axios.post('https://api.unive.com.bd/api/order', data).then(res => res.data.insertedId ? handleShow() : handleShowF())

    }
    return (
        <>
            <Header />
            <Alert className='my-3 text-center' variant='danger'>
          Coming soon
        </Alert>
            {courses &&
                <Container className='my-5 contentpadding hor'>
                    <Row className='gx-5'>
                        <Col xs={12} className='d-block d-md-none'>
                            <img className='img-fluid' src={courses.imageLink} alt="" />
                        </Col>
                        <Col xs={12} md={9} >
                            <h1 className='my-5'>{courses.coursename}</h1>
                            {/* quiz video bars */}
                            <div className="d-flex justify-content-start flex-wrap ">
                                <div class="p-2 bd-highlight border-secondary border mb-2 px-2 px-3"><MdOutlinePlayLesson className=' fs-4 me-2' />{courses.total_modules || 1} lessons</div>
                                <div class="p-2 bd-highlight border-secondary border mb-2 mx-3 px-2 px-3"><MdOutlineSlowMotionVideo className=' fs-4 me-2' />{courses.course_length || 4} hrs</div>
                                <div class="p-2 bd-highlight border-secondary border px-2 px-3"><MdOutlineQuiz className=' fs-4 me-2' />{courses.total_quizes || 1} quizes</div>
                                <div class="p-2 bd-highlight border-secondary border px-2 px-3 mx-3"><BsTropicalStorm className=' fs-4 me-2' />{courses.course_level || 'beginner'} level</div>
                            </div>
                            {/* responsive display start btn */}
                            <div className=" my-3 d-block d-md-none">
                                <Card >
                                    <Card.Body className='mx-auto mt-4' >
                                        {/* <NavLink to={`/learn/start/${courses._id}`}><Button className='bluebtn btn py-2 px-5'>Start learning </Button></NavLink> */}
                                        {user.email &&
                                            <Button onClick={(e) => orderData(e)} className='bluebtn btn py-2 px-5'>Start learning </Button>}
                                        {!user.email && <Button variant="success" onClick={handleShowL}>Start Learning</Button>}
                                    </Card.Body>
                                    {/* <hr className='bg-secondary' />
                                    <Card.Body>
                                        <p><AiOutlineFieldTime className='fs-4' /> Est. 2h to complete</p>
                                        <p><CgBorderStyleDotted className='fs-4' /> Beginner</p>
                                    </Card.Body> */}
                                </Card>
                            </div>
                            {/* overview */}
                            <div className="my-5">
                                <h3>Course Overivew</h3>
                                <Read>{courses?.about || ''}</Read>
                            </div>
                            {/* how will you learn */}
                            {/* <Row>
                                <h2>How Will You Learn</h2>
                                <Col xs={12} md={5}>
                                    <p className='fs-5'><BsCodeSlash className=' me-2' />Hands-on coding environments</p>
                                    <p>You don’t get better at swimming by watching others. Coding is no different. Practice as you learn with live code environments inside your browser.</p>
                                </Col>
                                <Col xs={12} md={5}>
                                    <p className='fs-5'><MdTextFields className=' me-2' />Faster than videos</p>
                                    <p>Videos are holding you back. The average video tutorial is spoken at 150 words per minute, while you can read at 250. That‘s why our courses are text-based.</p>
                                </Col>
                            </Row> */}
                            {/* part-2 */}
                            {/* <Row>
                                <Col xs={12} md={5}>
                                    <p className='fs-5'><MdPhonelinkSetup className=' me-2' />No set-up required</p>
                                    <p>Start learning immediately instead of fiddling with SDKs and IDEs. It‘s all on the cloud.</p>
                                </Col>
                                <Col xs={12} md={5}>
                                    <p className='fs-5'><GrCertificate className=' me-2' />Progress you can show</p>
                                    <p>Built in assessments let you test your skills. Completion certificates let you show them off.</p>
                                </Col>
                            </Row> */}

                            <Row className='my-5'>
                                <div className='my-3 d-flex justify-content-between'>
                                    <h3>Course Content</h3>
                                    {/* <Button onClick={contentShow} variant='btn btn-outline-info'>{arr ? 'Hide All Content' : 'Show All Content'}</Button> */}
                                </div>
                                {/* accordion start */}
                                <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen flush>
                                    {courses?.Module?.map((data, index) => (
                                        <Accordion.Item eventKey={'' + index} key={index} >

                                            <Accordion.Header>{data.module_name}</Accordion.Header>
                                            {/* <Accordion.Body className={arr ? 'd-block' : 'd-none'}> */}
                                            <Accordion.Body >
                                                <ul className='nobull'>
                                                    {data.sub_mod1 && <li><RiVideoAddLine /> {data.sub_mod1}</li>}
                                                    {data.sub_mod2 && <li><RiVideoAddLine /> {data.sub_mod2}</li>}
                                                    {data.sub_mod3 && <li><RiVideoAddLine /> {data.sub_mod3}</li>}
                                                    <li><MdQuiz /> কুইজ</li>
                                                </ul>
                                            </Accordion.Body>

                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </Row>
                        </Col>
                        <Col md={2} className='d-none d-md-block pt-5 ' >
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={courses?.imageLink} />
                                <Card.Body className='mx-auto mt-4' sticky>
                                    {/* <NavLink to={`/learn/start/${courses._id}`}><Button className='bluebtn btn py-2 px-5'>Start learning </Button></NavLink> */}
                                    {user.email &&
                                        <Button onClick={(e) => orderData(e)} className='bluebtn btn py-2 px-5'>Start learning </Button>}
                                    {!user.email &&
                                            <Button className='bluebtn' onClick={handleShowL}>Sign in to start learning</Button>}
                                </Card.Body>
                                {/* <hr className='bg-secondary' />
                                <Card.Body>
                                    <p><AiOutlineFieldTime className='fs-4' /> Est. 2h to complete</p>
                                    <p><CgBorderStyleDotted className='fs-4' /> Beginner</p>
                                </Card.Body> */}
                            </Card>
                        </Col>
                    </Row>
                    <Container className='text-center'>
                    </Container>



                    {/* <ul>
                        {courseData?.whatWillYouLearn?.map(data => (
                            <li>{data}</li>
                        ))}
                    </ul> */}
                </Container >

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
            <Footer />

      {/* modal after submit form */}
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>ধন্যবাদ কোর্সে রেজিস্ট্রেশন করার জন্য! কোর্স টি লাইভ হওয়া মাত্রই আমরা আপনাকে ইমেইল এর মাধ্যমে জানিয়ে দিবো!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>handleClose(true)}>
                        Visit My Courses
                    </Button>
                    <Button variant="info" onClick={()=>handleClose(false)}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* already has course */}
            <Modal show={showF} onHide={handleCloseF}>
                <Modal.Header closeButton>
                    <Modal.Title>OOPPS</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have already added this course</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseF}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
{/* login */}
            <LoginModal Lshow={Lshow} handleCloseL={handleCloseL}/>
        </>
    )
}

// const popover = (
//     <Popover id="popover-basic">
//         {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
//         <Popover.Body>
//             Log in to start learning
//         </Popover.Body>
//     </Popover>
// );