import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useData from '../dataloadHooks/dataload';
import Header from '../Header/Header';
import top from '../images/assesment/top.png'
export default function Assessments() {
    const [item] = useData();
    return (
        <>
            <Header />
            <Container data-aos="fade-up-right" fluid className='bg-primary mb-5 py-5'>
                <Container className='text-light'>
                    <Row>
                        <Col xs={12} md={8}>
                            <h5>অ্যাসেসমেন্টস</h5>
                            <h2 className='fs-1 mb-4'>আপনার স্কিল গ্যাপ খুঁজে বের করুন</h2>
                            <p className='smallText'>অ্যাসেসমেন্টের মাধ্যমে যে বিষয় গুলোতে আপনার স্কিল গ্যাপ আছে কিংবা ইমপ্রুভ এর সুযোগ আছে তা চিহ্নিত করতে পারবেন।</p>
                            <p className='smallText'>Unive সেই বিষয় গুলোতে ইমপ্রুভ করার জন্যে আপনাকে পার্সোনালাইজড সাজেশন এবং ট্রেইনিং ম্যাটেরিয়ালস ডিজাইন করে দিবে।<br />  এছাড়া কোনো অ্যাসেসমেন্ট এ এক্সেপশনাল ফলাফলের প্রেক্ষিতে জব প্লেসমেন্ট এর সুযোগ তো আছেই। </p>
                        </Col>
                        <Col xs={12} md={4} >
                            <img src={top} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container data-aos="fade-up-left">
                <Row className='g-4'>
                    <Col xs={6}>
                        {item.map((id) => (
                            <Row key={id.key} xs={1} className="g-3 my-3 border">
                                <Col xs={12} md={4} className='border-end'>
                                    <img className='img-fluid ' src={id.image} alt="" />
                                </Col>
                                <Col xs={12} md={8}>
                                    <h5 className='fs-5'>অ্যাসেসমেন্ট</h5>
                                    <h2 className='my-2 text-start fs-4'>{id.name}</h2>
                                    <NavLink to={`/learn/${id.name}`}> <Button variant='btn btn-outline-primary py-2 px-5 d-block my-5 me-3 ms-auto'> Preview</Button></NavLink>

                                </Col>

                            </Row>
                        ))}
                    </Col>
                    <Col xs={6}>
                        {item.map((id) => (
                            <Row key={id.key} xs={1} className="g-3 my-3 border">
                                <Col xs={12} md={4} className='border-end'>
                                    <img className='img-fluid ' src={id.image} alt="" />
                                </Col>
                                <Col xs={12} md={8}>
                                    <h5 className='fs-5'>অ্যাসেসমেন্ট</h5>
                                    <h2 className='my-2 text-start fs-4'>{id.name}</h2>
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
