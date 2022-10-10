import React, { useState } from 'react'
import { Accordion, Button, Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import chair from '../images/instructor/chair.png'
import code from '../images/instructor/code.png'
import instruct from '../images/instructor/instruct.png'
import phone from '../images/instructor/phone.png'
import ppl from '../images/instructor/ppl.png'
export default function Instructor() {
    const [show, setShow] = useState(false);
    const [pdf, setPdf] = useState(null);

    const [showT, setShowT] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseT = () => setShowT(false);
    const handleShowT = () => {
        handleClose()
        setShowT(true)
            ;
    }
    const [data, setData] = useState({});

    const [choice, setChoice] = useState('অনুগ্রহপূর্বক সিলেক্ট করুন ');
    function handleSelectChange(event) {
        setChoice(event.target.value);
        handleOnChange(event)
    }
    const [choice2, setChoice2] = useState('অনুগ্রহপূর্বক সিলেক্ট করুন ');
    function handleSelectChange2(event) {
        setChoice2(event.target.value);
        handleOnChange(event)
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    // const handleSubmit2 = e => {
    //     e.preventDefault()
    //     console.log(data);
    //     axios.post(`https://fierce-woodland-01411.herokuapp.com/api/instructorForm2`, data).then(res => res.data ? handleShowT() : '')
    // }
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
        fetch('https://fierce-woodland-01411.herokuapp.com/api/instructor', {
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
    const [term, setTerm] = React.useState('ইন্ডিভিজুয়াল কন্ট্রাক্টর');
    const handleChangeRadio = (event) => {
        setTerm(event.target.value)
        handleOnChange(event)
    }

    return (
        <>
            <Header />
            {/* top */}
            <Container data-aos="fade-up" className=''>
                <Row className='my-5 container'>
                    <Col xs={12} md={6} className='text-start ps-3 ms-5 '>
                        <h2 className='fs-1 fw-bold'>নেশন বিল্ডিং এ কাজ করুন</h2>
                        <h3 className='my-4 fs-3 text-primary fw-bold'>Unive টীমে ইন্সট্রাক্টর হিসেবে যোগ দিয়ে</h3>
                        <p className='smallText fw-normal'>আপনার এক্সপেরিয়েন্স এবং এক্সপার্টাইজ শেয়ার করে দক্ষ মানবসম্পদ গড়তে সরাসরি অবদান রাখুন।
                        </p>
                        <p className='smallText fw-normal'> আপনার কোর্স বা ট্রেইনিং থেকে আয়ের সুযোগ তো থাকছেই।</p>
                        <Button className='p-3 mt-3 bluebtn' onClick={handleShow}>Become an Instructor</Button>
                    </Col>
                    <Col xs={12} md={5} className='my-5'>
                        <img className='img-fluid' src={instruct} alt="" />
                    </Col>
                </Row>

            </Container>
            {/* why teach unive */}
            <Container data-aos="fade-right" className='text-center my-5'>
                <h2 className='fs-1'>Unive এ শিখাবেন কেন?</h2>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid mb-3' src={chair} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>Unive এ ইন্টারেক্টিভিটির মাধ্যমে শিখানোর সুযোগ</h2>
                        <p className='smallText my-4 text-start'>ইন্টারেক্টিভ কন্টেন্ট এর মাধ্যমে সাবলীলভাবে আপনার মেসেজ বা আইডিয়া আপনি আপনার লার্নারদের শিখাতে পারবেন। এটি পজিটিভ লার্নার ফিডব্যাক তৈরি করে।</p>
                    </Col>
                </Row>
            </Container>
            {/* Magic text */}
            <Container data-aos="fade-up-left " className='text-center my-5 middle'>
                <Row className='my-5'>

                    <Col xs={12} md={5}>
                        <h2 className='fs-1 smallCenter '>ভিডিও এর মাঝে কুইজ</h2>
                        <p className='smallText ms-3 my-4 text-start'>আপনার ট্রেইনিং কিংবা কোর্স এর ভিডিও এর মাঝেই কুইজ সেট করে সাথে সাথে লার্নারদের নলেজ চেক করে নিন। সেই সাথে টেক্সট কুইজ এর অপশন তো আছেই। যেকোনো অ্যাসেসমেন্ট বা অ্যাসাইনমেন্টের ফলাফল অটোমেট করুন অটোমেশন ফিচার দিয়ে।</p>
                    </Col>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={code} alt="" />
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={ppl} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>কানেক্টেড থাকুন ওয়ার্ল্ডওয়াইড ইন্ডাস্ট্রি নেটওয়ার্ক এ </h2>
                        <p className='smallText my-4 text-start'>সারা বিশ্বজুড়ে আপনার ট্রেইনিং ম্যাটেরিয়ালস সম্পর্কিত ইন্ডাস্ট্রি এর সাথে যুক্ত থাকুন Unive এর ইন্ডাস্ট্রি অ্যাফিলিয়েশন প্রোগ্রাম এর মাধ্যমে।</p>
                    </Col>
                </Row>
                <Row className='my-5'>

                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>সাপোর্ট ২৪/৭</h2>
                        <p className='smallText my-4 text-start'> সারা বিশ্বজুড়ে আপনার ট্রেইনিং ম্যাটেরিয়ালস সম্পর্কিত ইন্ডাস্ট্রি এর সাথে যুক্ত থাকুন Unive এর ইন্ডাস্ট্রি অ্যাফিলিয়েশন প্রোগ্রাম এর মাধ্যমে।</p>
                    </Col>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={phone} alt="" />
                    </Col>
                </Row>
            </Container>
            <hr className='w-25 fw-bold mx-auto' />
            {/* instructor */}
            <Container data-aos="fade-up-left" className='text-center my-2  py-5'>
                <h2 className='fs-1 fw-bold'>  আমাদের ইন্সট্রাক্টর কমিউনিটিতে জয়েন করুন</h2>
                <Row className='my-5'>

                    <Col xs={12} md={4} className=" mb-5">
                        <div class="bg-white  py-5 px-4"><img src={'rev1'} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <p className='text-start my-3 text-muted'>
                                "কোর্স ডিজাইন করা খুবই সহজ। আমি কোর্স প্ল্যান করার পর এক রাতেই পুরো কোর্স ফরম্যাট Unive এ ডিজাইন করতে পেরেছি যা নিঃসন্দেহে ইন্ডাস্ট্রি বেস্ট"
                            </p>
                            <h5 class="fw-bold text-start"> সায়মা কবির </h5>
                            <h5 class="fw-bold text-start">সিনিয়র লেকচারার, ঢাকা নার্সিং ইনস্টিটিউট</h5>

                        </div>
                    </Col>
                    <Col xs={12} md={4} className=" mb-5">
                        <div class="bg-white py-5 px-4"><img src={'rev3'} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <p className='text-start my-3 text-muted'>
                                "ইন্টুইটিভ ইন্সট্রাক্টর প্যানেল। এছাড়া স্টুডেন্টদের জন্য ইন ব্রাউজার কোডিং স্যান্ডবক্স থাকাতে অন দি গো স্টুডেন্টরা শিখতে পারছে"
                            </p>
                            <h5 class="fw-bold text-start"> জাহিন খান</h5>
                            <h5 class="fw-bold text-start">সফটওয়্যার ইঞ্জিনিয়ার, অ্যামাজন</h5>

                        </div>
                    </Col>

                    <Col xs={12} md={4} className=" mb-5">
                        <div class="bg-white py-5 px-4"><img src={'rev2'} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <p className='text-start my-3 text-muted'>
                                "আমি শুরুতে ইউটিউবে আমার মোবাইল রিপেয়ার  ভিডিও আপলোড করতাম পরবর্তীতে Unive সম্পর্কে জানতে পেরে এখানে কোর্স নিচ্ছি। যেকোনো সমস্যায় সাপোর্ট দ্রুত সমাধান করে দিচ্ছে"

                            </p>
                            <h5 class="fw-bold text-start"> বাবু তালুকদার</h5>
                            <h5 class="fw-bold text-start">মোবাইল রিপেয়ার টেকনিশিয়ান</h5>

                        </div>
                    </Col>
                </Row>
                <Button className='p-3 mt-3' onClick={handleShow}>Become an Instructor</Button>

            </Container>
            {/* faq */}
            <Container data-aos="fade-left" className='bigWidth  my-5'>
                <h2 className='my-5 fs-1 text-center'>কিছু কমন প্রশ্ন</h2>
                <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen >
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>আমি ইন্সট্রাক্টর হতে চাই। কিভাবে অগ্রসর হবো?</Accordion.Header>
                        <Accordion.Body>
                            অনুগ্রহপূর্বক আপনি Unive ইনস্ট্রাক্টর ফরম পূরণ করলেই আমাদের টীম আপনার সাথে অতিসত্বর যোগাযোগ করবে।
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>আমার কিছু ট্রেইনিং আইডিয়া আছে কিন্তু আমি কিভাবে শুরু করবো বুঝছি না।</Accordion.Header>
                        <Accordion.Body>
                            গ্রেট! আপনি আমাদেরকে ইমেইল করুন কিংবা ইনস্ট্রাক্টর ফরম ফিল আপ করুন। আমাদের টীম আপনাকে আইডিয়া ক্রিয়েশন থেকে শুরু করে ট্রেইনিং ডিজাইন প্রতিটি ক্ষেত্রে সাহায্য করবে। আপনি আপনার এক্সপেরিয়েন্স এবং এক্সপার্টাইজ নিয়ে আসুন, একে ট্রেইনিং এ রূপদান করা থেকে শুরু করে বাকিটা Unive এর দায়িত্ব।

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Unive এ সাকসেসফুল ইনস্ট্রাক্টর হতে হলে আমাকে কি করতে হবে?</Accordion.Header>
                        <Accordion.Body>
                            Unive এ সমস্ত ট্রেইনিং প্র্যাক্টিক্যাল এবং বর্তমান ইন্ডাস্ট্রি প্র্যাক্টিস কে হাইলাইট করে। ইনস্ট্রাক্টর হিসেবে আপনার ফোকাস থাকতে হবে আপনি যে ইন্ডাস্ট্রির জন্য ট্রেইনিং দিচ্ছেন তা যেনো আপ টু ডেট ইন্ডাস্ট্রি প্র্যাক্টিস কে ফলো করে। আমরা পুঁথিগত কন্টেন্ট কে ডিসকারেজ করি। আমাদের দেওয়া গাইডলাইন ফলো করলেই আপনি অনেকদূর এগিয়ে থাকবেন প্রথম সারির ইন্সট্রাক্টর হিসেবে।

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
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
                                label="Subject you want to teach"
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