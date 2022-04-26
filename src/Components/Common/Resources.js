import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Resources() {
    return (
        <section className='container mt-5'>
            <h3 className='fw-bold fs-'>রিসোর্সেস </h3>
            <h3 className=' fs-5  ps-2'>এমপ্লয়ী অনবোর্ডিং এবং রিক্রুটমেন্ট নিয়ে পড়ুন</h3>
            <Container className='my-5 '>
                <Row>
                    {/* 5 tips */}
                    <Col xs={12} md={6} className='mb-3' >
                        <Card className='' >
                            <Card.Img variant="top" className='img-fluid ' src="https://media.istockphoto.com/vectors/finding-new-ideas-problem-solving-vector-illustration-banner-teamwork-vector-id959212324?b=1&k=20&m=959212324&s=612x612&w=0&h=UpW-f5_kylsJqqBSjZ0TCnO_p2a5qaoHNRZLRvv9NuM=" />
                            <Card.Body className='text-start'>
                                <Card.Title>টেকনিক্যাল ইন্টারভিউ নিতে যে বিষয়গুলো মনে রাখবেন।</Card.Title>
                                <Card.Text>
                                টেকনিক্যাল ইন্টারভিউতে প্রাথমিক লক্ষ্য থাকা উচিত ক্যান্ডিডেট আপনার প্রতিষ্ঠানের টেকনিক্যাল ডিমান্ড এর সাথে তাল মিলাতে পারবে কিনা তা নিশ্চিত করা।
                                </Card.Text>
                                <Button variant="primary">পুরোটা পড়ুন</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* manage */}
                    <Col xs={12} md={6} className=' '>
                        <Card className=''>
                            <Card.Img variant="top" className='img-fluid ' src="https://media.istockphoto.com/vectors/finding-new-ideas-problem-solving-vector-illustration-banner-teamwork-vector-id959212324?b=1&k=20&m=959212324&s=612x612&w=0&h=UpW-f5_kylsJqqBSjZ0TCnO_p2a5qaoHNRZLRvv9NuM=" />
                            <Card.Body className='text-start'>
                                <Card.Title>সাইকোমেট্রিক টেস্ট কিভাবে ডিজাইন করবেন</Card.Title>
                                <Card.Text>
                                আপনার প্রতিষ্ঠানের বিভিন্ন টীম এর কালচারাল ওরিয়েন্টেশন এর সাথে মিল রেখে সাইকোমেট্রিক টেস্ট ডিজাইন করার মাধ্যমে আপনি যোগ্য ক্যান্ডিডেট কে খুঁজে পেতে পারেন এবং এটা ইন্টার টীম বন্ডিং মেইনটেইন করতে সাহায্য করে।

                                </Card.Text>
                                <Button variant="primary">পুরোটা পড়ুন</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* onboarding */}
                <Row className='my-5'>
                    <Col xs={10} md={6}>
                        <img className='img-fluid' src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/how-to-start-a-blog.webp" alt="" /></Col>
                    <Col xs={10} md={6} className='text-start mt-5'>
                        <h2>কিভাবে এমপ্লয়ী অনবোর্ড করবেন</h2>
                        <p>এমপ্লয়ী অনবোর্ডিং এর ক্ষেত্রে মনে রাখতে হবে ফার্স্ট ইম্প্রেশন গুরুত্বপূর্ণ ভূমিকা রাখে। এ জন্য অনবোর্ডিং যত স্মুথ ভাবে সম্পন্ন করা যায় সেটা এমপ্লয়ী সেটিসফেকশন এ মূল্যবান ফ্যাক্টর হিসেবে কাজ করে।</p>
                        <Button variant="primary">পুরোটা পড়ুন</Button>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
