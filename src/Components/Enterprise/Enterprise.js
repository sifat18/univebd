import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import top from '../images/enterprise/top.png'
import row1 from '../images/enterprise/row1.png'
import row2 from '../images/enterprise/row-2-2.png'
import row22 from '../images/enterprise/row2-1.png'
import row3 from '../images/enterprise/row-3.png'
import row4 from '../images/enterprise/row-4-1.png'
import row42 from '../images/enterprise/row-4-2.png'
import check from '../images/check.png'

import Companies from '../Common/Companies'
import ReviewCard from '../Common/ReviewCard'
import Demo from '../Common/Demo'
import Resources from '../Common/Resources'
export default function Enterprise() {
    return (
        <>
            {/* top part */}
            <Container data-aos="fade-down" className='my-5'>
                <section className='text-center '>
                    <h2 className='fs-1'>আপনার কোম্পানীর এমপ্লয়ীদের ট্রেইনিং এর জন্য আল্টিমেট প্ল্যাটফর্ম</h2>
                    <h4 className=' mt-3 smallText ps-1'>পার্সোনালাইজড লার্নিং এবং অনবোর্ডিং হোক ইউনিভ এর সাথে  <br /></h4>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3 bluebtn' href="#">ইন্টারেক্টিভ ডেমো দেখুন</Button>
                    </div>
                    <div >
                        <img className='img-fluid w-75' src={top} alt="" />

                    </div>
                    <Companies />
                </section>
            </Container>
            {/* Complete Enablement Toolkit */}
            <Container data-aos="fade-up-right" fluid className='text-center py-5 middle'>
                {/* 1st row */}
                <section className='container mt-5'>
                    <h1 className='fs-3 fw-bold'>Unive এন্টারপ্রাইজ সলিউশন ব্যবহার করে আপনার টীম কে কন্টিনিউয়াস ডেভেলপ করুন</h1>
                    {/* Enable Engineer */}
                    <Row className='my-5'>
                        <Col xs={12} md={6} className='mb-3'>
                            <img className='img-fluid' src={row1} alt="" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3 className='text-start'>আপনার এমপ্লয়ীদের থেকে বেস্ট পারফরম্যান্স বের করে আনুন</h3>
                            <p className='text-start'>আপনার কোম্পানীর এমপ্লয়ীরা যাতে তাদের সেরাটা কোম্পানি কে দিতে পারে সেজন্য তাদের প্রতিনিয়ত আপটুডেট রাখা এবং প্রয়োজনীয় সফট এবং হার্ড স্কিল এর ট্রেইনিং হতে পারে ইউনিভে।</p>
                            <div className="text-start">
                                <p><img src={check} alt="" className='img-fluid ' /> সম্পূর্ণ পার্সোনালাইজড জাস্ট ইন টাইম লার্নিং এর সুবিধা।</p>
                                <p>  এমপ্লয়ীদের অন ডিমান্ড ট্রেইনিং দিন অ্যাক্টিভ লার্নিং এর মাধ্যমে। এজাইল মেথডে এমপ্লয়ীরা ও শিখে ফেলবে নতুন স্কিলস দ্রুততার সাথে।</p>
                                {/* <p><img src={check} alt="" className='img-fluid ' /> Learning & Onboarding Built for Engineers</p>
                                <p>Enable growth through personalized, hands-on developer learning resources created by industry pros.</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Curate Custom Growth Plans</p>
                                <p>Identify rising stars within your team and easily curate customized growth paths for their learning and onboarding.</p> */}
                            </div>
                        </Col>
                    </Row>

                </section>

            </Container>
            {/* 2nd row */}
            <Container data-aos="fade-left">
                <Row>
                    <Col xs={12} md={6}>
                        <h3>কাস্টম গ্রোথ প্ল্যান</h3>
                        <p className='text-start'>কোম্পানি এর মাঝে রাইজিং স্টার দের খুঁজে বের করুন এবং তাদের জন্য কাস্টম গ্রোথ প্ল্যান ডিজাইন করুন কোম্পানি এর লং টার্ম ফিউচার কে লক্ষ্য করে।</p>
                        <div className="text-start">
                            <p><img src={check} alt="" className='img-fluid ' /> মনিটর করুন টীম বা যেকোনো এমপ্লয়ী এর প্রগ্রেস</p>
                            <p>টীম বা এমপ্লয়ী এর রিয়েল টাইম লার্নিং এবং স্কিল প্রগ্রেস দেখুন ড্যাশবোর্ড এর মাধ্যমে। প্রমোশন বা দায়িত্ব প্রদানের ক্ষেত্রে যা হতে পারে গুরুত্বপূর্ণ একটি সিগনাল।</p>
                            {/* <p><img src={check} alt="" className='img-fluid ' />Monitor Individual and Team Progress</p>
                            <p>Get real-time progress updates and insights from a streamlined onboarding dashboard.</p>
                            <p><img src={check} alt="" className='img-fluid ' /> Personalized Learning at Scale</p>
                            <p>Accelerate time to production for new hires and focus on growing and leading at scale.</p> */}
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img className='img-fluid' src={row2} alt="" />
                        {/* <img className='img-fluid' src={row22} alt="" /> */}
                    </Col>
                </Row>
            </Container>
            {/* 3rd row */}
            <Container data-aos="fade-right" fluid className='text-center py-5 middle'>
                <section className='container mt-5'>
                    <Row className='my-5'>
                        <Col xs={12} md={6} className='mb-3'>
                            <img className='img-fluid' src={row3} alt="" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3 className='text-start '>ট্রেইনিং ম্যাটেরিয়ালস অ্যাকসেস করুন সবসময়</h3>
                            <p className='text-start'>যে কোনো জায়গা থেকে, যেকোনো ডিভাইস থেকে, অনলাইন বা অফলাইন যে কোনো অবস্থায় ট্রেইনিং ম্যাটেরিয়ালস আপনার হাতের নাগালে। ওয়েব বা অ্যাপ থেকে অ্যাকসেস করুন ইন্টারনেট ছাড়া।</p>
                            <div className="text-start">
                                <p><img src={check} alt="" className='img-fluid ' /> শিখুন অফলাইনে</p>
                                <p>ট্রেইনিং ম্যাটেরিয়ালস বা কোর্স কন্টেন্ট ডাউনলোড করে শিখুন অফলাইনে। নোট লিখে রাখুন এবং নিজেকে যাচাই করুন কুইজলেট দিয়ে।</p>
                                {/* <p><img src={check} alt="" className='img-fluid ' /> Practice Makes Perfect</p>
                                <p>Engineers learn by doing. Using dev-approved and scientifically-backed features, Educative Courses provides an interactive experience designed to improve learning outcomes.</p>
                                <p><img src={check} alt="" className='img-fluid ' />Drive Business Outcomes with Just-in-Time Learning</p>
                                <p>Real-world engineering problems aren’t always expected. Educative Courses are created to help solve skill gaps that may block implementation of new technology..</p> */}
                            </div>
                        </Col>
                    </Row>

                </section>

            </Container>
            {/* 4th row */}
            <Container data-aos="fade-left">
                <Row>
                    <Col xs={12} md={6}>
                        <h3 className='smallCenter'>কোনো ফিজিক্যাল এবং টেকনোলজিক্যাল সেটআপ ছাড়াই দ্রুত শিখান Unive এ!</h3>
                        <p className='text-start'>কোনো ডেভ এনভায়রনমেন্ট সেট করার প্রয়োজন নেই। ব্রাউজারেই  ইন্টারেক্টিভলি কোড লিখুন এবং রান করুন। </p>
                        <div className="text-start">
                            <p><img src={check} alt="" className='img-fluid ' /> অন দি গো আইটি ট্রেইনিং</p>
                            <p>ব্রাউজার  দিয়ে ডামি ওয়ার্কস্পেস এনভায়রনমেন্টে দিন আইটি ট্রেইনিং। </p>
                            {/* <p><img src={check} alt="" className='img-fluid ' />Learn by Doing, Not by Watching</p>
                            <p>Software engineers learn best by building. Actively develop skills through full-featured projects in over 20 technologies.</p> */}
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img className='img-fluid' src={row4} alt="" />
                        <img className='img-fluid' src={row42} alt="" />
                    </Col>
                </Row>
            </Container>
            {/* review */}
            <Container fluid className='text-center py-5 '>
                <h2 className='my-5'>ইনটুইটিভ লার্নিং প্ল্যাটফর্ম আপনার প্রতিষ্ঠানের  জন্য যা আপনার এমপ্লয়ীরা ভালবাসবেই</h2>
                <ReviewCard />

            </Container >
            {/* resources */}
            <Container fluid data-aos="fade-up-right" className='text-center py-5 middle'>
                <Resources />

            </Container >
            {/* demo */}
            <Demo />
        </>
    )
}
