import React from 'react'
import {  Card, Col, Row } from 'react-bootstrap'
import { BsCheck2Circle } from "react-icons/bs";

export default function PriceCard() {
    return (
        <section className='container mt-5'>
            <Row className='my-5'>
              {/* first plan */}
                <Col xs={12} md={4} className='mt-5'>
                    <Card className="text-center pt-5">
                        <Card.Title> ফ্রী প্ল্যান </Card.Title>
                        <p className='text-decoration-line-through'></p>
                        <h4 className='text-primary fs-2'>০ টাকা<span className='text-primary fs-4'></span><span className='text-dark'>/ মাস</span></h4>
                        <p></p>
                        <p className='fs-5'></p>
                        {/* <Button variant="outline-primary text-center w-50 mx-auto"></Button> */}
                        <p className='text-decoration-underline'></p>
                        <Card.Body className='text-start mx-auto my-3'>

                            <p><BsCheck2Circle className='text-success fs-4 me-2' />আনলিমিটেড ট্রেনিং ভিডিও</p>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />১ টি স্কিল অ্যাসেসমেন্ট এর সুযোগ/ মাস</p>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />রেগুলার ওয়েবিনার</p>
                        </Card.Body>
                        <Card.Footer className="text-muted">শুরু করুন</Card.Footer>
                    </Card>
                </Col>
              {/* 2nd plan */}
              <Col xs={12} md={4}>
                    <Card className="text-center pt-5">
                        <Card.Title>অ্যানুয়াল প্ল্যান</Card.Title>
                        <p className='text-decoration-line-through'>৫০০ টাকা/ মাস</p>
                        <h4 className='text-primary fs-2'>২৫০ টাকা<span className='text-primary fs-4'></span><span className='text-dark'>/ মাস</span></h4>
                        <p> ৫০% ডিসকাউন্টে</p>
                        <p className='fs-5'>২৫০ টাকা/মাস করে ৩০০০ টাকা বছরে</p>
                        {/* <Button variant="outline-primary text-center w-50 mx-auto">Get Unlimited</Button> */}
                        <p className='text-decoration-underline'></p>
                        <Card.Body className='text-start mx-auto my-3'>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />লাইফটাইম ট্রেইনিং অ্যাকসেস অ্যান্ড কুইজ</p>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />ট্রেইনিং কম্পলিশন সার্টিফিকেট</p>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />নো লিমিট ইন্টারভিউ আয়োজন</p>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />ইন্টারন্যাশনাল জব প্লেসমেন্ট</p>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />জব সাপোর্ট ২৪/৭</p>
                        </Card.Body>
                        <Card.Footer className="text-muted">শুরু করুন</Card.Footer>
                    </Card>
                </Col>
              {/* 3rd plan */}
              <Col xs={12} md={4} className='mt-5'>
                    <Card className="text-center pt-5">
                        <Card.Title>গ্রোথ ট্র্যাক</Card.Title>
                        <p className='text-decoration-line-through'></p>
                        <h4 className='text-primary fs-2'>১০০০ টাকা <span className='text-primary fs-4'></span><span className='text-dark'>পার কোর্স/ ট্রেইনিং</span></h4>
                        <p></p>
                        <p className='fs-5'></p>
                        {/* <Button variant="outline-primary text-center w-50 mx-auto">Get Unlimited</Button> */}
                        <p className='text-decoration-underline'></p>
                        <Card.Body className='text-start mx-auto my-3'>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />আনলিমিটেড ট্রেইনিং কন্টেন্ট অ্যাকসেস অ্যান্ড কুইজ</p>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />ট্রেইনিং কম্পলিশন সার্টিফিকেট</p>
                            <p><BsCheck2Circle className='text-success fs-4 me-2' />কোর্স/ ট্রেইনিং রিলেটেড ইন্টারভিউ আয়োজন</p>
                        </Card.Body>
                        <Card.Footer className="text-muted">শুরু করুন</Card.Footer>
                    </Card>
                </Col>
            </Row>

        </section>
    )
}
