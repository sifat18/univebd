import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import indi from '../images/indi.png'
import indi2 from '../images/indi2.png'
import check from '../images/check.png'
import indi4 from '../images/indi4.webm'
import indi3 from '../images/indi3.png'
import st from '../images/steps.png'
import ar from '../images/icons8-arrow-.png'

import useData from '../dataloadHooks/dataload'
import ReviewCard from '../Common/ReviewCard'
import NormalCards from '../Common/NormalCards'
import PriceCard from '../Common/PriceCard'
export default function Individual() {
    const [item] = useData();

    return (
        <>
            {/* top part */}
            <Container data-aos="fade-up-right" className='my-5'>
                <section className='text-center '>
                    <h2 className=''>বর্তমানের ইন্ডাস্ট্রি প্র্যাকটিস ফোকাসড ট্রেইনিং শুরু করুন এখনি!</h2>
                    {/* <h4 className=' mt-3  ps-1'>World-class courses for world-class software developers</h4> */}
                    <div className=" mt-3   ">
                        <Button className='p-3 smallText bluebtn m-3' href="#">ট্রেইনিং শুরু করুন</Button>
                    </div>
                    <div >
                        <img className='img-fluid ' src={indi} alt="" />

                    </div>
                </section>
            </Container>
            {/* how can we help */}
            <Container fluid data-aos="fade-up-left" className='text-center py-5 middle'>
                <NormalCards
                    titleSection={"আমরা কিভাবে সাহায্য করি"}
                    card1Msg={"আপনার ইউনিভার্সিটি/ কলেজ/ ইন্সটিটিউট এর পুরানো কারিকুলাম ইন্ডাস্ট্রিতে ব্যবহার করার সম্ভাবনা খুবি সীমিত। ইউনিভ আপনাকে বর্তমানের ইন্ডাস্ট্রি প্র্যাকটিস এবং প্র্যাকটিকাল নলেজ নির্ভর ট্রেইনিং দিয়ে আপনার জব রোলের জন্য সর্বাত্মক সহযোগিতা করবে।"}
                    card1Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card1Name={"ইন্ডাস্ট্রি নলেজ"}
                    card2Msg={"আমরা আপনাকে দেশের কিংবা বিদেশের ড্রিম জবে ল্যান্ড করার জন্যে প্রয়োজনীয় প্রিপারেশন থেকে শুরু করে জবে অনবোর্ড হতে সাহায্য করি।"}
                    card2Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card2Name={"ইন্টারভিউ প্রিপারেশন"}
                    card3Msg={"বেশিরভাগ ক্ষেত্রে আপনার ক্যারিয়ার স্থবির হয়ে যায় নিজেকে যুগের সাথে তাল মিলিয়ে নতুন নতুন স্কিল শিখতে না পারলে। আমরা নিশ্চিত করি প্রয়োজনীয় রিসোর্সেস পেয়ে আপনি যাতে আপনার ক্যারিয়ারে গ্রো করতে পারেন অবিরাম।"}
                    card3Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card3Name={"ক্যারিয়ারে আগাতে"}
                />

            </Container>

            {/* Unive difference */}
            <Container fluid data-aos="fade-down" className='text-center py-5 '>
                <section className='container my-5 '>
                    <h1 className=''>ইউনিভ এর বিশেষত্ব</h1>
                    <Row className='my-5 py-5'>
                        <Col xs={12} md={6}>
                            <img className='img-fluid' src={indi2} alt="" />
                        </Col>
                        <Col xs={12} md={6} className="text-start">
                            <h3>ইন্টারেকটিভ ভিডিও লেসন</h3>
                            <p className='text-start'>শিখুন ছোট ছোট ইন্টারেক্টিভ ভিডিও এর মাধ্যমে। শিখার সাথে সাথে নিজেকে যাচাই করে নিন ঝটপট।</p>
                            <h3 className='mt-5 '>ইন্টারভিউ আয়োজন</h3>
                            <p className='text-start'>সাক্সেসফুল কোর্স কমপ্লিটের ১৫ দিনের মাঝে ইন্টারভিউ এর ব্যবস্থা আপনার ট্রেনিং রিলেটেড ইন্ডাস্ট্রি সেক্টরে।</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="text-start">
                            <h3>ইন্টারন্যাশনাল জব প্লেসমেন্ট</h3>
                            <p className='text-start'>ভালো ফলাফল অর্জনের মাধ্যমে আপনি পেতে পারেন ইন্টারন্যাশনাল জব এর অফার। প্রয়োজনীয় ইন্টারভিউ থেকে শুরু করে জব অনবোর্ডিং এর যাবতীয় কাজ ইউনিভ আপনার হয়ে সম্পন্ন করবে।
                            </p>
                            {/* <div className="text-start">

                                <p><img src={check} alt="" className='img-fluid ' /> No time is wasted on set-up</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Dozens of technologies supported</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Test skills with in-course Assessment</p>
                            </div> */}
                            <img className='mt-5 w-75' src={indi3} alt="" />
                        </Col>
                        <Col xs={12} md={6}>
                            <video loop="true" className='w-50' autoplay="autoplay" muted >
                                <source src={indi4} type='video/mp4' />
                            </video>
                        </Col>
                    </Row>
                </section>

            </Container>
            {/* start coding */}
            <Container fluid data-aos="fade-left" className='text-center py-5 middle'>
                <section className='container mt-5'>
                    <h3 className='text-center fw-bold fs-2'>কোর্স/ ট্রেইনিং শুরু করুন</h3>
                    <p className=' text-center fs-7 mt-2 ps-2'>নতুন স্কিল যোগ করুন আপনার সিভিতে / স্কিল আপডেট করুন কারেন্ট ইন্ডাস্ট্রি এর জন্যে।</p>
                    <Container className='my-5 mx-2'>
                        <Row xs={1} md={3} className="g-4 bigMargin">
                            {item.map((id) => (
                                <Col key={id.key}>
                                    <Card className='py-1'>
                                        <Card.Img variant="top" className='img-fluid ' src={id.coverImageUrl} />
                                        <Card.Body className='text-start'>
                                            <p>Unive</p>
                                            <Card.Title >{id.title}</Card.Title>
                                            <Card.Text>{id.synopsis.slice(0, 100)}              </Card.Text>
                                        </Card.Body>
                                        <Row>
                                            <Col xs={6}>
                                                <p><img src={st} alt="" height={25} /></p>
                                                <p className='fs-7'>Beginner</p>
                                            </Col>
                                            <Col xs={6}>
                                                <Button className='p-3' variant="">Get Started <img src={ar} alt="" /></Button>

                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

            </Container>
            {/* curated paths */}
            <Container fluid data-aos="fade-down" className='text-center py-5 '>
                <section className='container mt-5'>
                    <h1 className=''>ট্রেইনিং পাথ</h1>
                    <h5 className='text-center smallText'>সেক্টর এক্সপার্ট হয়ে উঠুন ইন্ডাস্ট্রি এক্সপার্টদের তৈরি করা ট্রেনিং থেকে। </h5>
                    <h5 className='text-center smallText'> নিশ্চিত করুন স্মুথ ক্যারিয়ার।</h5>
                    <Row className='my-5 gx-5 bigMargin '>
                        <Col xs={12} md={5} className='mb-5'>
                            <Card className='bg-dark text-white'>
                                <Card.Img variant="img-fluid" height={250} src="https://repository-images.githubusercontent.com/353592899/33d81200-a1d0-11eb-87ec-74fc98b824ea" />
                                <Card.Body className='text-start'>
                                    <Card.Title className='fw-bold'>প্রাকটিক্যাল মেশিন লার্নিং ট্রেইনিং</Card.Title>
                                    <Card.Text>
                                    শিখুন হ্যান্ডস অন মেশিন লার্নিং ইন্ডাস্ট্রি প্র্যাকটিস এবং ক্যারিয়ার গড়ে তুলুন মেশিন লার্নিং ইন্ডাস্ট্রিতে।
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={6}>
                                        <h4 className='text-start ms-3'>মডিউল সংখ্যা: ৫</h4>
                                    </Col>
                                    <Col xs={6}>
                                        <Button className='p-3' variant="dark">এক্সপ্লোর করুন <img src={ar} alt="" /></Button>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={12} md={5}>
                            <Card className='bg-dark text-white'>
                                <Card.Img variant="img-fluid" height={250} src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30316331.jpg" />
                                <Card.Body className='text-start'>
                                    <Card.Title className='fw-bold' >হ্যান্ডস অন সেমিকন্ডাক্টর</Card.Title>
                                    <Card.Text>
                                    সেমিকন্ডাক্টর ইন্ডাস্ট্রিতে ক্যারিয়ার গড়তে শুরু করে দিন স্মার্টফোন রিপেয়ার ট্রেনিং। ট্রেনিং থেকে বাছাইকৃত প্রার্থীদের জন্য থাকছে সেমিকন্ডাক্টর ইন্ডাস্ট্রি তে কাজ করার সুযোগ। এছাড়া স্মার্টফোন রিপেয়ার করে নিজেই হয়ে উঠতে পারেন একজন উদ্যোক্তা।
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={6}>
                                        <h4 className='text-start ms-3'>মডিউল সংখ্যা: ৫</h4>
                                    </Col>
                                    <Col xs={6}>
                                        <Button className='p-3' variant="dark">এক্সপ্লোর করুন<img src={ar} alt="" /></Button>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        {/* <Col xs={4} >
                            <Card className='bg-dark text-white'>
                                <Card.Img variant="img-fluid" height={250} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhd8iGwfvol0_yRJ0jOhD-oEI9cIjGqMuwQ&usqp=CAU" />
                                <Card.Body className='text-start'>
                                    <Card.Title className='fw-bold'>C++ for programmers </Card.Title>
                                    <Card.Text>
                                        95% of engineers want to learn a new skill each year. Join them and accelerate your growth with our interactive experiences that help you test, learn, and grow.
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={6}>
                                        <h4 className='text-start ms-3'>6 modules</h4>
                                    </Col>
                                    <Col xs={6}>
                                        <Button className='p-3' variant="dark">Preview <img src={ar} alt="" /></Button>

                                    </Col>
                                </Row>
                            </Card>
                        </Col> */}
                    </Row>

                </section>

            </Container>
            {/* pricing */}
            <Container fluid data-aos="fade-up" className='text-center py-5 middle'>
                <h1 className='smallText'>আপনার পছন্দমত প্রাইসিং</h1>
                <PriceCard />

            </Container>

            {/* Review */}
            <Container fluid data-aos="fade-down" className='text-center py-5 '>
                <h3>
                    যারা কোর্স সম্পন্ন করেছেন তাদের মতামত-
                </h3>
                <p className='text-muted my-4'>

                    ইউনিভে যারা কোর্স করে জব পেয়েছে –
                </p>
                <ReviewCard />

            </Container >
        </>
    )
}
