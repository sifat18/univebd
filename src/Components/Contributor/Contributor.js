import React, { useState } from 'react'
import { Accordion, Button, Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import contribe from '../images/contribute/contribe.png'
export default function Contributor() {

    const [show, setShow] = useState(false);
    const [pdf, setPdf] = useState(null);

    const [showT, setShowT] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseT = () => setShowT(false);
    const handleShowT = () => {
        handleClose()
        setShowT(true)
    }
    const [data, setData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    const handleSubmit = e => {
        console.log('hit');
        e.preventDefault();
        let formData = new FormData();
        // iterating over the object to transform it into formdata
        Object.keys(data).forEach(key => formData.append(key, data[key]));
        formData.append('pdf', pdf);
        // checking if form getting the values
        // for (var value of formData.values()) {
        //   console.log(value);
        // }
        // 
        // https://fierce-woodland-01411.herokuapp.com
        fetch('https://fierce-woodland-01411.herokuapp.com/api/contributer', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    handleShowT()
                } else {
                    console.error('Error2');

                }
            })
    }
    return (
        <>
            <Header />
            {/* top */}
            <Container data-aos="fade-up-left " className=''>
                <Row className='my-5 container'>
                    <Col xs={12} md={6} className='text-start ps-3 ms-5 '>
                        <h2 className='fs-1 fw-bold'>Unive ব্লগে লিখুন!</h2>
                        <p className='smallText fw-normal'>Unive ব্লগে লিখার মাধ্যমে আপনি বাংলাদেশী ওয়ার্কফোর্সকে আপনার এক্সপার্ট অপিনিয়ন বা ইনসাইট দিয়ে সাহায্য করতে পারেন। আমরা যারা ইন্ডাস্ট্রি এক্সপার্ট আছি  সবাই আমাদের নিজ নিজ ইন্ডাস্ট্রি প্র্যাক্টিস, অবজারভেশন এবং উইজডম যদি সবার মাঝে ছড়িয়ে দেই, সেটা হতে পারে দেশ এবং দেশের মানুষের জন্য আমাদের একটি উপহার। প্রতিনিয়ত মূল্যবান লিখার মাধ্যমে হয়ে উঠুন Unive ইন্ডাস্ট্রি এক্সপার্ট।</p>
                        <Button className='p-3 mt-3 bluebtn' onClick={handleShow}>Become a Contributor</Button>
                    </Col>
                    <Col xs={12} md={5} className='my-5'>
                        <img className='img-fluid' src={contribe} alt="" />
                    </Col>
                </Row>

            </Container>
            {/* why unive */}

            <Container data-aos="fade-up-right" fluid className='middle'>
                <Container className='text-center my-2  py-3 '>
                    <Row className='my-2'>

                        <Col xs={12} md={4} className=" mb-2">
                            <div class="  px-4">
                                <p className='text-start my-3 fw-bold fs-4'>
                                    Unive এ কেন লিখবেন?

                                </p>
                                <ul className='text-start'>
                                    <li>Unive আপনাকে কন্টেন্ট লিখা থেকে শুরু করে পাবলিশ করা পর্যন্ত পুরোটা সময় হেল্প করে যাতে কোনো ভুল না থাকে। এছাড়া Unive আপনার হয়ে আপনার কন্টেন্ট এর ডিসকাশন মডারেট করে থাকে।</li>
                                    <li>Unive এ লিখার মাধ্যমে আপনি ইন্ডাস্ট্রির এক জন এক্সপার্ট হিসেবে পরিচিত হয়ে উঠবেন ইউনিভ ইন্ডাস্ট্রি অ্যাফিলিয়েট প্রোগ্রাম এর মাধ্যমে। </li>
                                </ul>

                            </div>
                        </Col>
                        <Col xs={12} md={4} className=" mb-2">
                            <div class="  px-4">
                                <p className='text-start my-3 fw-bold fs-4'>
                                    আপনার জন্য কি আছে?

                                </p>
                                <ul className='text-start '>
                                    <li>আপনার যদি লিখার মাধ্যমে নিজের ধারণা বুঝানোর ভালো হাত থাকে তাহলে যেকোনো বিষয় ইন প্র্যাক্টিক্যাল Unive এর স্পন্সরড প্রোগ্রামে শিখেও শেয়ার করতে পারেন আমাদের প্লাটফর্মে।</li>
                                    <li>নিয়মিত লিখার মাধ্যমে হয়ে উঠতে পারেন ইন্ডাস্ট্রি এর রিসোর্স পারসন।</li>
                                    <li>Unive এর সুবিশাল লার্নার কমিউনিটিতে আপনার কোর্স বা ট্রেইনিং ম্যাটেরিয়ালস পাবলিশ করার সুযোগ।</li>
                                </ul>
                            </div>
                        </Col>

                        <Col xs={12} md={4} className=" mb-5">
                            <div class="  px-4">
                                <p className='text-start my-3 fw-bold fs-4'>
                                    কিভাবে শুরু করবেন?
                                </p>
                                <ul className='text-start'>
                                    <li>প্রথমে Unive এ ফ্রী একাউন্ট খুলে ফেলুন এবং Unive ব্লগ এ আপনার আর্টিকেল বা আর্টিকেল এর কিছু অংশ সাবমিট করুন। Unive মডারেটর আপনার সাথে অতিসত্বর যোগাযোগ করবে।</li>
                                    <li>এ বিষয়ে আরো জানতে হলে যোগাযোগ করুন support@unive.com.bd</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Container>
            {/* contributor */}
            <Container data-aos="fade-up" className='py-5'>
                <h2 className='text-center'>কন্ট্রিবিউট করুন Unive ব্লগে! </h2>
                <p className='text-center'>আপনি দুই উপায়ে Unive ব্লগে কন্ট্রিবিউট করতে পারেন।
                </p>
                <Row className='g-4 my-5'>
                    <Col xs={12} md={4} >
                        <h2 className='fw-bold smallCenter my-3'>কমিউনিটি কন্ট্রিবিউটর হিসেবে
                        </h2>
                        <ul>
                            <li>লিখা শুরু করুন সাইন আপ করেই।</li>
                            <li>পয়েন্ট অর্জন করুন আপনার কন্টেন্ট এর রেটিং এর উপর। পরবর্তীতে পয়েন্ট রিডিম করে সংগ্রহ করুন লাইফস্টাইল গিফট কার্ড।</li>
                            <li>অংশগ্রহণ করুন Unive এর সেমিনার, ওয়ার্কশপে ইন্ডাস্ট্রি এক্সপার্ট হিসেবে।</li>

                        </ul>
                    </Col>
                    <Col xs={12} md={4} >
                        <h3 className='fs-1 text-center my-5'>অথবা</h3>
                    </Col>
                    <Col xs={12} md={4} >
                        <h2 className='fw-bold smallCenter my-3'>টেকনিক্যাল রাইটিং এর জন্য ওয়ার্কশপ পার্টিসিপেন্ট হিসেবে </h2>
                        <ul>
                            <li>দুই সপ্তাহের ওয়ার্কশপে শিখানো হবে টেকনিক্যাল আর্টিকেল কিভাবে লিখে এবং কন্টেন্ট ডেলিভারি ইন্টুইটিভ করার উপায় সমূহ।</li>
                            <li>ওয়ার্কশপে অংশগ্রহণ করে বেস্ট প্র্যাক্টিস মেনে আপনি সম্পূর্ণ একটি আর্টিকেল প্রকাশ করবেন।</li>
                            <li>ডেভেলপ করা স্কিল দিয়ে পরবর্তীতে আপনি যেকোনো বিষয়ে সহজবোধ্য করে আলোচনা এবং লিখতে সক্ষম হবেন এবং Unive সার্টিফাইড ইন্ডাস্ট্রি এক্সপার্ট এর সুযোগ থাকছে।</li>

                        </ul>
                    </Col>
                </Row>
            </Container>
            {/* sign up btn */}
            <Container fluid data-aos="fade-up-left" className='middle py-5'>
                <h2 className='text-center fs-1 fw-bold my-5'>এখনি লিখা শুরু করুন!</h2>
                <Button variant='btn btn-primary mx-auto d-block'>লিখুন</Button>
            </Container>
            {/* Faq */}
            <Container data-aos="fade-up" className='  my-5'>
                <Row>
                    <Col xs={12} md={4}>
                        <h2 className='my-5 mx-auto fs-1 text-start'>কিছু কমন প্রশ্ন</h2>
                        <p className=' text-center'>আপনার প্রশ্নের উত্তর খুঁজে পাচ্ছেন না? আমাদের সাথে যোগাযোগ করুন</p>
                    </Col>
                    <Col xs={12} md={8}>
                        <Accordion defaultActiveKey={['0', '1']} alwaysOpen >
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>এখানে কি কোনো রিভিউ প্রসেস আছে?</Accordion.Header>
                                <Accordion.Body>
                                    জ্বি, এখানে আপনি আর্টিকেল সাবমিট করলে একটি রিভিউ প্রসেস দিয়ে যাবে। আপনি আর্টিকেল সাবমিট করার পর অনতিবিলম্বে আপনার সাথে যোগাযোগ করা হবে।</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>আমি কোন টপিক নিয়ে লিখবো?</Accordion.Header>
                                <Accordion.Body>
                                    আপনি Unive এর টপিক লিস্ট থেকে যেকোনো টপিক নিয়ে লিখতে পারেন কিংবা আমাদের সাজেস্ট করতে পারেন নতুন কোনো টপিক।</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            {/* on the fence */}
            <Container data-aos="fade-left " fluid className=' py-5 text-center'>
                <h2 className='text-center'>আপনি কি আমাদের সাথে কাজ করতে আগ্রহী?</h2>
                <Container className='text-center my-5 bigWidth'>
                    <ul className='text-start '>
                        <li>আমাদেরকে ইমেইল করুন: support@unive.com.bd</li>
                        <li> আমাদের সাথে একটি মিটিং ঠিক করুন।</li>
                    </ul>
                </Container>
            </Container>
            <Footer />

            {/* form modal*/}
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
                                label="Full Name"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="text" name="FullName" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
                            </FloatingLabel>
                            {/* ----------- */}
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="email" className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange} />
                            </FloatingLabel>

                            {/* ----------- */}

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Phone Number"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="number" name="PhoneNumber" className="text-start" placeholder="01299123" onChange={handleOnChange} />
                            </FloatingLabel>
                            {/* ----------- */}
                            <FloatingLabel
                                controlId="floatingInput"
                                label="The topics you want to write on"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="text" name="subject" className="text-start" placeholder="English" onChange={handleOnChange} />
                            </FloatingLabel>

                            {/* ------------ */}

                            <Form.Group controlId="formFile" className="text-start ms-2 mb-3">
                                <Form.Label >CV (if any)</Form.Label>
                                <Form.Control className="text-start" type="file" accept="application/pdf" onChange={e => setPdf(e.target.files[0])} />
                            </Form.Group>
                            <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
                        </form>
                    </Container>

                </Modal.Body>


            </Modal>
            {/* thansk */}
            <Modal show={showT} onHide={handleCloseT}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank  you</Modal.Title>
                </Modal.Header>
                <Modal.Body>We will reach you shortly.</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseT}>
                        Ok!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
