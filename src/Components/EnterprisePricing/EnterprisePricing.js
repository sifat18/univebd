import React, { Suspense, useState } from 'react'
import { Accordion, Button, Card, Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
// import Companies from '../Common/Companies'
// import Demo from '../Common/Demo'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
// import check from '../images/check.png'
import { BsCheck2Circle } from "react-icons/bs";
import axios from 'axios'
const Demo = React.lazy(() => import("../Common/Demo"));
const Companies = React.lazy(() => import("../Common/Companies"));

export default function EnterprisePricing() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({});

    const [showT, setShowT] = useState(false);
    const handleCloseT = () => setShowT(false);
    const handleShowT = () => {
        handleClose()
        setShowT(true)
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(data);
        axios.post(`https://unive.site/api/enterprice`, data).then(res => res.data ? handleShowT() : '')

    }
    return (
        <>
            <Header />
            {/* top part */}
            <Container data-aos="fade-down" className='my-5'>
                <section className='text-center '>
                    <h2 className=''>আপনার প্রতিষ্ঠানের এমপ্লয়ীদের জন্য সাজান ইউনিক এক্সপেরিয়েন্স! </h2>
                    <h4 className=' mt-3  mx-auto smallText'>প্রতিটি টীম আলাদা এবং তাদের ট্রেইনিং ও হতে হবে আলাদা। সেই কাস্টোমাইজড ট্রেইনিং ডিজাইন আপনি করতে পারবেন Unive এ।<br />
                        আমাদের সার্ভিস নিয়ে আরো জানতে যোগাযোগ করুন Unive টীম এর সাথে।</h4>
                </section>
            </Container>
            <Container data-aos="fade-up" fluid className='middle text-center my-5 py-5'>
                <section className='container mt-5'>
                    <p className='text-center'>MOST POPULAR</p>
                    <Row className='g-0 shadow-sm border'>
                        <Col xs={12} md={4} className=' bg-white border-end'>
                            <p className='bg-primary py-2'></p>
                            <Container className='text-start px-3'>
                                <Card.Title>টীম</Card.Title>
                                <p className='my-4'>যারা শিখতে আগ্রহী সেইসব টীম কে স্কিলড আপ করুন Unive এ</p>
                                {/* <p className='text-decoration-line-through'>$16.66</p>
                                <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                                <p>discounted price for </p>
                                <p className='fs-5'> $139 billed annually</p> */}
                                <Button variant="outline-primary text-center w-100 mx-auto" onClick={handleShow}>যোগাযোগ করুন</Button>
                                <p className='text-start my-3'>টীম প্ল্যানে যা যা আছে:</p>
                                <Card.Body className='text-start mx-auto my-3'>

                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />টীম সাবস্ক্রিপশন এবং লার্নার অ্যাকসেস</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />আনলিমিটেড অ্যাকসেস টু কোর্সেস</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />পার্সোনালাইজড লার্নিং প্ল্যান</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />কম্প্লিশন সার্টিফিকেটস </p>
                                </Card.Body>
                            </Container>
                        </Col>
                        <Col xs={12} md={4} className='bg-white border-end'>
                            <p className='bg-success py-2'></p>
                            <Container className='text-start px-3'>
                                <Card.Title>এন্টারপ্রাইজ</Card.Title>
                                <p>নতুন এমপ্লয়ীদের দ্রুততার সাথে প্রতিষ্ঠানে অনবোর্ড করুন, জব রোল বুঝিয়ে দিন এবং টীম লার্নিং পারফরম্যান্স থেকে ডিসিশন নিন এবং যোগ্য এমপ্লয়ীকে দায়িত্ব প্রদান করুন </p>
                                {/* <p className='text-decoration-line-through'>$16.66</p>
                                <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                                <p>discounted price for </p>
                                <p className='fs-5'> $139 billed annually</p> */}
                                <Button variant="btn btn-primary text-center w-100 mx-auto" onClick={handleShow}>যোগাযোগ করুন</Button>
                                <p className='text-start my-3'>এন্টারপ্রাইজ প্ল্যানে টীমে যা আছে তা তো থাকছেই সাথে থাকছে:</p>
                                <Card.Body className='text-start mx-auto my-3'>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />টীম লার্নিং অ্যানালিটিকস</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />অনবোর্ডিং নতুন টীম মেম্বার</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />ইন্ডিভিজুয়াল এবং টীম ট্র্যাক প্রগ্রেস</p>
                                </Card.Body>
                            </Container>

                        </Col>
                        <Col xs={12} md={4} className='bg-white'>
                            <p className='bg-danger py-2'></p>
                            <Container className='text-start px-3'>

                                <Card.Title>আনলিমিটেড</Card.Title>
                                <p>যে সমস্ত প্রতিষ্ঠান এমপ্লয়ীদের ক্যারিয়ার প্রোগ্রেশন নিশ্চিত করতে চান নি, এমপ্লয়ী পারফরম্যান্স এবং স্যাটিসফেকশন নিয়ে কম্প্রোমাইজ করতে চান না প্ল্যান টি তাদের জন্য</p>
                                {/* <p className='text-decoration-line-through'>$16.66</p>
                            <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                            <p>discounted price for </p>
                            <p className='fs-5'> $139 billed annually</p> */}
                                <Button variant="outline-primary text-center w-100 mx-auto" onClick={handleShow}>যোগাযোগ করুন</Button>
                                <p className='text-start my-3'>আনলিমিটেডে প্ল্যানে টীম এবং এন্টারপ্রাইজ প্ল্যানের সব কিছু তো থাকছেই সাথে থাকছে:</p>
                                <Card.Body className='text-start mx-auto my-3'>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />থার্ড পার্টি ইন্টিগ্রেশন</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />কাস্টমাইজড সলিউশন অ্যান্ড ফিচারস</p>
                                    <p><BsCheck2Circle className='text-success fs-4 me-2' />প্রতিষ্ঠানের এমপ্লয়ীদের জন্য লাইফস্টাইল অফারস ফ্রম বেস্ট ব্র্যান্ডস</p>
                                    <p>আমাদের টীম এর সাথে কথা বলুন আনলিমিটেড প্ল্যান সম্পর্কে বিস্তারিত জানতে। </p>
                                </Card.Body>
                            </Container>

                        </Col>
                    </Row>

                </section>
            </Container>

            <Container data-aos="fade-up-left"  >
                <p className='middle text-center my-5'> Unive ব্যবহার করছে দেশের প্রথম সারির প্রতিষ্ঠানগুলো:</p>
                <Companies />

            </Container>

            <Container fluid data-aos="fade-up-right" className=' text-center my-5 middle'>
                <Container className=' text-start'>
                    <h2 className=' text-start py-5 fs-1'>কিছু কমন প্রশ্ন</h2>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>কোন প্ল্যান এ ইউজার লিমিট কত?</Accordion.Header>
                            <Accordion.Body>
                                টিম প্ল্যান ৩ থেকে ২০ জন ইউজার এর জন্য। এন্টারপ্রাইজ প্ল্যান ২০ বা তার বেশি ইউজার দের জন্য। আল্টিমেট প্ল্যান ৩০ বা তার বেশি ইউজার দের জন্য।
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>আমরা কি ইচ্ছে মত প্ল্যান চেঞ্জ করতে পারবো?</Accordion.Header>
                            <Accordion.Body>
                                হ্যা। আপনি সাপোর্ট এর সাথে কথা বলে অন ডিমান্ড পরবর্তী বিলিং সাইকেল থেকে প্ল্যান চেঞ্জ করতে পারবেন।
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>প্রাইসিং সম্পর্কে জানবো কিভাবে?</Accordion.Header>
                            <Accordion.Body>
                                অনুগ্রহপূর্বক আপনার জিজ্ঞাসা এবং কন্ট্যাক্ট নম্বর আমাদের কে মেইল করুন বা ডেমো এর জন্য ফর্ম পূরণ করুন। আমাদের টিম ১ দিনের মাঝে আপনার সাথে যোগাযোগ করবে।
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Container>
            <Suspense>
            <Container fluid data-aos="fade-down" className='middle my-5 py-5'>
                <Demo />
            </Container>
            </Suspense>
            <Footer />

            {/* form */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h2 className='mx-auto ps-5'>Fill up the form</h2>
                </Modal.Header>
                <Modal.Body>
                    <Container className='py-2'>
                        {/* Login form */}
                        <form className='mt-3  py-3' onSubmit={handleSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contact Person Name"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="text" name="FullName" className="text-start" placeholder="contact person" onChange={handleOnChange} />
                            </FloatingLabel>
                            {/* --------- */}
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Company Name"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="text" name="Company" className="text-start" placeholder="xyz" onChange={handleOnChange} />
                            </FloatingLabel>
                            {/* ----------- */}
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="email" className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange} />
                            </FloatingLabel>
                            {/* ------------- */}

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Phone Number"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="number" name="PhoneNumber" className="text-start" placeholder="01299123" onChange={handleOnChange} />
                            </FloatingLabel>
                            {/*------------  */}
                            <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
                        </form>
                    </Container>

                </Modal.Body>


            </Modal>
            {/* thanks modal */}
            <Modal show={showT} onHide={handleCloseT}>
                <Modal.Header closeButton>
                    <Modal.Title>Thanks for your interest</Modal.Title>
                </Modal.Header>
                <Modal.Body>One of our representatives will get back to you asap.</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseT}>
                        Ok!!
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
