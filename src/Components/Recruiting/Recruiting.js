import React, { useState } from 'react'
import { Accordion, Button, Col, Container, Row,Modal, Form, FloatingLabel } from 'react-bootstrap'
import Companies from '../Common/Companies'
import hr from '../images/hr/hr.png'
import search from '../images/hr/search.png'
import resume from '../images/hr/resume.png'
import loud from '../images/hr/loud.png'
import ContactForm from '../Common/ContactForm'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'
export default function Recruiting() {
    const [show, setShow] = useState(false);
    const [showT, setShowT] = useState(false);
    const handleClose = () => {
        setShow(false);
        handleShowT()
    }
    const handleShow = () => setShow(true);
    const handleCloseT = () => setShowT(false);
    const handleShowT = () => setShowT(true);
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
        e.preventDefault()
        console.log(data);
        axios.post(`https://fierce-woodland-01411.herokuapp.com/recruit`, data).then(res => res.data ? handleClose() : '')

    }
    return (
        <>
            <Header />
            {/* top */}
            <Container>
                <Row data-aos="fade-up" className='my-5'>
                    <Col xs={12} md={7} className='text-start ms-3 mb-3'>
                        <h2 className='fs-1 '>আপনার প্রতিষ্ঠানের জন্য এমপ্লয়ী খুঁজুন <br /> খুব সহজে ইউনিভ এর মাধ্যমে।</h2>
                        <h4 className='my-4 mx-1 smallText'>ডিজাইন করুন ইন্টারভিউ প্রিপারেশন কোর্স এবং সম্পূর্ণ রিক্রুটমেন্ট প্রসেস সম্পন্ন করুন আমাদের প্লাটফর্মে।  <br /> শুধুমাত্র যোগ্য ক্যান্ডিডেটদের ইন্টারভিউ নেওয়ার আয়োজন করে ইউনিভ আপনার প্রতিষ্ঠানের প্রোডাক্টিভিটি লস বাঁচিয়ে দেয়। <br /></h4>
                        <Button className='p-3 mt-3 bluebtn' href="#">ট্রাই করুন ইউনিভ ফর রিক্রুটমেন্ট</Button>
                    </Col>
                    <Col xs={12} md={4}>
                        <img className='img-fluid ' src={hr} alt="" />
                    </Col>
                </Row>

            </Container>
            {/* logos */}
            <Container data-aos="fade-down" fluid className='middle'>
                <Container>
                    <h5 className='text-center my-5'>ইউনিভ এর রিক্রুটমেন্ট প্ল্যাটফর্ম ইউজ করছে দেশের ইন্ডাস্ট্রি লিডিং কোম্পানিরা:</h5>
                    <Companies />
                </Container>
            </Container>
            {/* empower */}
            <Container data-aos="fade-up" className='text-center my-5'>
                <h2 className='fs-1'>আপনার ক্যান্ডিডেটদের জব রোল এর জন্য প্রস্তুত করুন ইউনিভে।</h2>
                <h5 className='smallText my-4'>আমাদের রিক্রুটিং প্ল্যান আপনার প্রতিষ্ঠানের জব এর জন্য প্রয়োজনীয় নলেজ এবং প্র্যাক্টিস সম্বলিত কোর্স তৈরি করতে আপনাকে সাহায্য করবে।</h5>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={search} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>বাছাই করুন যোগ্য ক্যান্ডিডেট অতিরিক্ত সময় নষ্ট করা ছাড়া।</h2>
                        <h5 className='smallText my-4 text-start'>প্রার্থী বাছাই করতে আপনার প্রতিষ্ঠানের যে গুরুত্বপূর্ণ প্রোডাক্টিভ টাইম নষ্ট হচ্ছে তা কমিয়ে আনতে ব্যবহার করতে পারেন ইউনিভ।</h5>
                    </Col>
                </Row>
            </Container>
            <Container data-aos="fade-up-left" className='text-center my-5 middle'>
                <Row className='my-5'>

                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>বেস্ট ক্যান্ডিডেট বাছাই করুন সমগ্র বাংলাদেশ থেকে</h2>
                        <h5 className='smallText my-4 text-start'>বেশিরভাগ ক্ষেত্রেই রেফারেন্স এর মাধ্যমে প্রার্থী বাছাইয়ে উঠে আসে না যোগ্য প্রার্থী। এক গবেষণায় দেখা গেছে, যথার্থ রিক্রুটমেন্ট প্রসেসের মাধ্যমে যোগ্য প্রার্থী বাছাই করে আপনার প্রতিষ্ঠানের প্রোডাক্টিভিটি বাড়ানো সম্ভব ৫০% পর্যন্ত! ইউনিভ নিশ্চিত করে আপনি আপনার জব প্লেসমেন্ট এর জন্য সবচেয়ে যোগ্য প্রার্থী নির্বাচিত করছেন।</h5>
                    </Col>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={resume} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container data-aos="fade-up-right" className='text-center my-5'>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={search} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>ট্রেইনিং ম্যাটেরিয়ালস ঠিক আপনার কোম্পানি এর জব রোলটির জন্য</h2>
                        <p className='smallText my-2 text-start'>আমরা নিশ্চিত করবো আপনার কোম্পানী এর জব রোলের চাহিদা অনুসারে কাষ্টমাইজ্ড ট্রেইনিং পাথ যাতে করে ক্যান্ডিডেট তার সেরা পারফরম্যান্স দিতে পারে।</p>
                        <p className='my-4 text-start'>পরবর্তীতে একই জব রোলের জন্য আপডেটেড ট্রেইনিং ম্যাটেরিয়ালস দিয়ে ক্যান্ডিডেট বাছাই করতে পারবেন খুব সহজেই।</p>
                    </Col>
                </Row>
            </Container>
            <Container data-aos="fade-up-left " className='text-center my-5 middle py-5'>
                <Row className='my-5'>
                    <Col xs={12} md={5}>
                        <h2 className='fs-1 text-start'>দিন বেটার ক্যান্ডিডেট এক্সপেরিয়েন্স!</h2>
                        <p className='smallText my-2 text-start'>পজিটিভ ইন্টারভিউ এক্সপেরিয়েন্স একজন ক্যান্ডিডেটকে আপনার প্রতিষ্ঠানের প্রতি আরো ইন্টারেস্টেড করে তুলে এবং আপনার প্রতিষ্ঠান বা ব্র্যান্ডের ভ্যালু বৃদ্ধি করে।</p>
                    </Col>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={loud} alt="" />
                    </Col>

                </Row>
            </Container>
            {/* contact */}
            <Container data-aos="fade-up" fluid className='bg-primary text-center py-5'>
                <h2 className='text-white'>ইউনিভ সম্পর্কে আরও জানতে যোগাযোগ করুন!</h2>
                <Container className='bg-white bigWidth text-center mx-auto p-5 py-3'>
                    <ContactForm />
                </Container>
            </Container>
            {/* faq */}
            <Container data-aos="fade-down" className='bigWidth text-center my-5'>
                <h2 className='my-5 fs-1'>কিছু কমন প্রশ্ন</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Unive এর ট্রেইনিং বা কোর্স ম্যাটেরিয়ালস এর বিশেষত্ব কি?</Accordion.Header>
                        <Accordion.Body>
                            Unive এ আমরা বিশ্বাস করি ফর্মুলা মনে রাখা বা মুখস্ত রাখা বা ইনস্টিটিউশনের রেজাল্ট ক্যান্ডিডেট নির্বাচনে অতটা গুরুত্বপূর্ণ নয় যতটা গুরুত্বপূর্ণ নলেজ এর প্রাকটিক্যাল প্রয়োগ,
                            যেকোনো সমস্যা সমাধানে অ্যানালিটিক্যাল অ্যাবিলিটির প্রয়োগ, বুদ্ধিমান চিন্তার ধরন,গ্রোথ মাইন্ডসেট। সেজন্য আমাদের ট্রেইনিং ম্যাটেরিয়ালস এর মূল উদ্দেশ্য প্রাকটিক্যাল কন্টেন্টস।
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>রিক্রুটিং প্ল্যান কাদের জন্য?</Accordion.Header>
                        <Accordion.Body>
                            রিক্রুটিং প্ল্যান হচ্ছে সে সব কোম্পানিদের জন্য যারা প্রতিনিয়ত এমপ্লয়ীজ রিক্রুট করছেন,
                            যারা ইকুয়াল অপরচুনিটি তে বিশ্বাস করেন এবং ক্যান্ডিডেট কে ভালো রিক্রুটিং এক্সপেরিয়েন্স দিতে চান।
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>আপনাদের সাথে লিংকডইন, বি ডি জবস ইত্যাদি এর পার্থক্য কি?</Accordion.Header>
                        <Accordion.Body>
                            অন্যান্য প্ল্যাটফর্ম এর সাথে আমাদের পার্থক্য হচ্ছে অন্যান্য রা টোটাল রিক্রুটমেন্ট প্রসেস এর একটি অংশ নিয়ে কাজ করছে।
                            অন্যদিকে, Unive এর রিক্রুটিং প্ল্যাটফর্ম পুরো রিক্রুটমেন্ট জার্নি এর জন্য একটি কমপ্লিট সলিউশন।
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>আমরা কি ক্যান্ডিডেট এর পারফরম্যান্স ট্র্যাক করতে পারবো?</Accordion.Header>
                        <Accordion.Body>
                            হ্যা। আপনারা কোম্পানি এর অ্যাডমিন প্যানেল থেকে আপনাদের ক্যান্ডিডেট এর পারফরম্যান্স ট্র্যাক করতে পারবেন
                            এবং এ থেকে ক্যান্ডিডেট এর ডেডিকেশন এবং কমপিটেন্সি এর ধারণাও পেয়ে যাবেন।
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="4">
                        <Accordion.Header>What courses will our candidates get access to?</Accordion.Header>
                        <Accordion.Body>
                            Our full library of hundreds of software courses and private access to your company's Curated Path.
                        </Accordion.Body>
                    </Accordion.Item> */}
                </Accordion>
            </Container>
            <Container fluid className='middle py-5 text-center'>
                <h2 className=' my-2 fs-2 '>রেডী টু স্টার্ট?</h2>
                <p className=' my-4 smallText text-muted'>আপনি যদি আগ্রহী হন তাহলে যোগাযোগ করুন আমাদের টিম এর সাথে।</p>
                <Button variant='btn btn-primary' onClick={handleShow} > কথা বলুন আমাদের রিপ্রেজেন্টেটিভ এর সাথে</Button>
            </Container>
            <Footer />
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
            {/* Thank you */}
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
