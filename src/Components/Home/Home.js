import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './home.css'
import home from '../images/home.png'
import b2 from '../images/b2.mp4'

import bot from '../images/bot.jpg'
import bot2 from '../images/bot2.jpg'
import ar from '../images/icons8-arrow-.png'
import ReviewCard from '../Common/ReviewCard'
import Companies from '../Common/Companies'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Home() {
    return (
        <>
            <Header />
            {/* top part */}
            <Container data-aos="fade-right" className='my-5'>
                <section className='text-center '>
                    <h2 className=''>অনলাইনে ইন্ডাস্ট্রি ফোকাসড আইটি এবং টেকনিক্যাল স্কিল শিখুন এবং আয় করুন।​</h2>
                    <h5 className=' mt-3 smallText '>সমস্ত প্রোগ্রাম ইন্ডাস্ট্রি প্র্যাক্টিস ফোকাসড এবং আপ টু ডেট। ​</h5>
                    {/* <h5 className=' ms-5 '></h5> */}
                    <div className=" mt-3   ">
                        <NavLink to='/individual-learner'><Button className='p-3 m-3 bluebtn' >আমি শিখতে চাই</Button></NavLink>
                        <NavLink to='/assessments'><Button className='p-3 m-3 bluebtn' >আমি জব খুঁজছি</Button></NavLink>
                        <NavLink to='/recruiting'><Button className='p-3 m-3 bluebtn'>আমি এমপ্লয়ী খুঁজছি</Button></NavLink>
                    </div>
                    <div >
                        <img className='img-fluid' src={home} alt="" />
                        <p className='my-3'> সমস্ত ইন্ডাস্ট্রি লিডিং কোম্পানি আমাদের প্ল্যাটফর্ম থেকে এমপ্লয়ী হায়ার করছে:
                            {/* <img className='img-fluid my-5' src={home2} alt="" /> */}
                        </p>
                    </div>
                    <Companies />
                </section>
            </Container>
            {/* middle part */}
            <Container fluid data-aos="fade-left" className='text-center py-5 middle'>
                {/* middle part */}
                <section className='container mt-5'>
                    <h1 className=''>শিখুন ইন্টারেক্টিভ ভিডিও টিউটোরিয়াল এর মাধ্যমে</h1>
                    <h5 className=' mt-3 smallText ps-2'> সমস্ত ক্যারিয়ার পাথ এবং ট্রেনিং কন্টেন্ট এর পিছনে আছেন ভেটেরান ইন্ডাস্ট্রি ইঞ্জিনিয়ার্স যারা প্রতিনিয়ত ট্রেনিং ম্যাটেরিয়ালস আপডেট করে যাচ্ছেন।</h5>
                    <h5 className=' text-center smallText'></h5>
                    <div className=" top-video mt-5   ">
                        <video loop="true" className='w-75 h-75' autoplay="autoplay" muted >
                            <source src={b2} type='video/mp4' />
                        </video>
                    </div>

                </section>

            </Container>
            {/* 2nd last part */}
            <Container fluid data-aos="fade-down" className='text-center py-5 '>
                <section className='container mt-5'>
                    <h3 className='fw-bold'>প্রোগ্রাম গুলো ডিজাইন এবং ডেভেলপ করেছেন </h3>
                    <h3 className=' fw-bold  ps-2'>এবং প্রতিনিয়ত আপডেট করছেন ইন্ডাস্ট্রি লিডিং ইঞ্জিনিয়াররা।</h3>
                    <Container className='my-5'>
                        <Row>
                            <Col xs={12} md={6} className='p-0 mb-3'>
                                <img src={bot} alt="" className='img-fluid' />
                                <div className='mt-5 border-end text-start'>
                                    <h2 className='' >সফটওয়্যার এবং আইটি প্রফেশনালদের জন্য</h2>
                                    <p className=''> এই ক্যারিয়ার পাথটি যারা সফটওয়্যার এবং আইটি ইন্ডাস্ট্রি তে ক্যারিয়ার গড়তে চান তাদের জন্য। এই ক্যারিয়ার পাথ আপনাকে দেশে এবং দেশের বাইরে জব মার্কেট ফোকাস করে তৈরি করে গড়ে উঠতে সাহায্য করবে।</p>
                                    <NavLink to='/learn'><Button variant="outline-secondary">এক্সপ্লোর করুন<img src={ar} alt="" /></Button></NavLink>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='p-0 m-0'>
                                <img src={bot2} alt="" className='img-fluid' />
                                <div className='mt-5  smallpadding text-start'>
                                    <h2 className=' '>টেকনিক্যাল ইঞ্জিনিয়ারদের জন্য</h2>
                                    <p className=''>ইলেকট্রিক্যাল, মেকানিকাল, সিভিল, কেমিক্যাল কিংবা আর্কিটেকচার ইঞ্জিনিয়ারদের জব মার্কেট এর জন্য গড়ে উঠতে আপনাকে সাহায্য করবে এই ক্যারিয়ার পাথটি।</p>
                                    <NavLink to='/learn'><Button variant="outline-secondary">এক্সপ্লোর করুন <img src={ar} alt="" /></Button></NavLink>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Container>

            <Container fluid data-aos="fade-up" className='text-center py-5 middle'>
                <h3>
                    যারা কোর্স সম্পন্ন করেছেন তাদের মতামত-
                </h3>
                <p className='text-muted my-4'>

                    ইউনিভে যারা কোর্স করে জব পেয়েছে –
                </p>
                <ReviewCard />

            </Container >
            <Footer />
        </>
    )
}
