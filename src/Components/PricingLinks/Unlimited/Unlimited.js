import React, { Suspense } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Companies from '../../Common/Companies'
// import Demo from '../../Common/Demo'
// import PriceCard from '../../Common/PriceCard'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import unlimited from '../../images/unlimited.png'
import train from '../../images/unlimited/5187419.jpg'
import train2 from '../../images/unlimited/8294.jpg'
import dream from '../../images/unlimited/pale-job-search.png'
import cancel from '../../images/unlimited/jaconda-planning-1.png'
const Demo = React.lazy(() => import("../../Common/Demo"));
const PriceCard = React.lazy(() => import("../../Common/PriceCard"));
const Companies = React.lazy(() => import("../../Common/Companies"));

export default function Unlimited() {
    return (
        <>
            <Header />
            {/* top part */}
            <Container data-aos="fade-up-right" className='my-5'>
                <section className='text-center '>
                    <h2 className=''>ক্যারিয়ারে এগিয়ে থাকুন Unive এর সাথে</h2>
                    <h4 className=' mt-3 smallText mx-auto'>যারা ক্যারিয়ারে উত্তরোত্তর সাফল্য লাভ করেন তাদের সাফল্যের কারণ তারা প্রতিনিয়ত নতুন নতুন স্কিল শিখছেন। <br /> Unive এর মাধ্যমে আপনিও থাকতে পারেন আপ টু ডেট এবং নতুন নতুন স্কিল যোগ করতে পারেন নিজের ক্যারিয়ারে।</h4>
                    <div className=" mt-3   ">
                    </div>

                </section>
            </Container>
<Suspense>
            <Container fluid data-aos="fade-up-left" className='middle text-center my-5 py-5'>
                <PriceCard />
                {/* <p className='my-5'> <a href='/home'> explore for your team</a></p> */}
                <p className='my-5'> Unive এ শিখছে দেশের প্রথম সারির প্রতিষ্ঠান গুলোর এমপ্লয়ীরা এবং সেসব ইন্ডাস্ট্রিতে জব করতে ইচ্ছুক প্রার্থীরা:</p>
                <Container >
                    <Companies />
                </Container>

            </Container>
            {/* Course you need */}
            <Container data-aos="fade-up" >
                <Row className='gx-5'>
                    <Col xs={12} md={4} className='text-center mb-3 '>
                        <img src={train} alt="someimage" className='img-fluid' />
                        <h3 className='pt-2'>জব ফোকাসড ট্রেইনিং</h3>
                        <p>প্রতিটি ট্রেইনিং ম্যাটেরিয়ালস কারেন্ট ডিমান্ডিং জবস এর উপর ফোকাস করে তৈরি করা। ট্রেইনিং করে নিজেকে এগিয়ে রাখুন জব রোলের জন্য। সাধারণত এমপ্লয়ার তাকেই নেয় যে জব সম্পর্কে ভালো আইডিয়া রাখে</p>
                    </Col>
                    <Col xs={12} md={4} className='text-center mb-3'>
                        <img src={dream} alt="someimage" className='img-fluid' />
                        <h3>ল্যান্ড ইন ইউর ড্রিম জব</h3>
                        <p>ট্রেইনিং বা অ্যাসেসমেন্ট এ ভালো ফলাফল করে ল্যান্ড করুন আপনার ড্রিম জবে। ভালো ফলাফল করা আপনার দায়িত্ব, বাদবাকি আমাদের।</p>
                    </Col>
                    <Col xs={12} md={4} className='text-center '>
                        <img src={cancel} alt="someimage" className='img-fluid' />
                        <h3>যেকোনো সময় ক্যান্সেল করুন আপনার প্ল্যান</h3>
                        <p>আপনার যদি ভালো না লাগে যেকোনো সময় ক্যান্সেল করুন আপনার প্ল্যান। যে ট্রেইনিং আপনি কিনছেন বা শেষ করেছেন তার অ্যাকসেস এবং সার্টিফিকেশন তো থাকছেই সবসময়। </p>
                    </Col>
                </Row>
                <Row className='my-5 py-5 smallCenter'>
                    <Col xs={12} md={6} className='my-5 py-5'>
                        <h3>এমপ্লয়ারদের কাছে স্কিল শো অফ করুন </h3>
                        <p>অ্যাসেসমেন্ট এর মাধ্যমে টেস্ট করুন স্কিল  <br /> কিংবা সার্টিফিকেট এর মাধ্যমে শো অফ করুন স্কিল।</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={unlimited} className='img-fluid' alt="" />
                    </Col>
                </Row>

            </Container>
            {/* demo */}
            x
            <Container data-aos="fade-down" fluid className='middle my-5 py-5'>
                <Demo />
            </Container>
            </Suspense>
            <Footer />
        </>
    )
}
