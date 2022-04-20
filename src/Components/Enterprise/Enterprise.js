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
                    <h2 className='fs-1'>The Ultimate Engineering Enablement Platform</h2>
                    <h4 className=' mt-3 smallText ps-1'>Personalized learning & onboarding at scale for high-growth <br />software engineering teams</h4>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3 bluebtn' href="#">Start a Interactive Demo</Button>
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
                    <h1 className='fs-3 fw-bold'>A Complete Enablement Toolkit for High-growth Teams</h1>
                    {/* Enable Engineer */}
                    <Row className='my-5'>
                        <Col xs={12} md={6} className='mb-3'>
                            <img className='img-fluid' src={row1} alt="" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3 className='text-start'>Enable Your Engineers to Reach Their Potential Faster</h3>
                            <p className='text-start'>Educative Enterprise has all the tools and integrations you need to seamlessly onboard new hires and level up your team. Educative's integrated learning resources never require setup, and include in-browser quizzes, projects, and playgrounds – no passive learning through videos.</p>
                            <div className="text-start">
                                <p><img src={check} alt="" className='img-fluid ' /> Personalized, Just-in-Time Learning</p>
                                <p>Create and deliver personalized, just-in-time learning for every engineer. Leave behind the burden of side-by-side onboarding so you can grow and lead at scale.</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Learning & Onboarding Built for Engineers</p>
                                <p>Enable growth through personalized, hands-on developer learning resources created by industry pros.</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Curate Custom Growth Plans</p>
                                <p>Identify rising stars within your team and easily curate customized growth paths for their learning and onboarding.</p>
                            </div>
                        </Col>
                    </Row>

                </section>

            </Container>
            {/* 2nd row */}
            <Container data-aos="fade-left">
                <Row>
                    <Col xs={12} md={6}>
                        <h3>The Quickest Path To Engineering Productivity</h3>
                        <p className='text-start'>Every developer's needs are different. Educative Onboarding empowers you to easily create and monitor custom growth plans for everyone. Accelerate onboarding and learning so engineering teams can reach their potential, faster.</p>
                        <div className="text-start">
                            <p><img src={check} alt="" className='img-fluid ' /> Customizable Plan Library</p>
                            <p>Quickly create or adapt custom training modules using Educative's powerful creator platform, or pull from Educative's entire library of hands-on tech skills courses.</p>
                            <p><img src={check} alt="" className='img-fluid ' />Monitor Individual and Team Progress</p>
                            <p>Get real-time progress updates and insights from a streamlined onboarding dashboard.</p>
                            <p><img src={check} alt="" className='img-fluid ' /> Personalized Learning at Scale</p>
                            <p>Accelerate time to production for new hires and focus on growing and leading at scale.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img className='img-fluid' src={row2} alt="" />
                        <img className='img-fluid' src={row22} alt="" />
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
                            <h3 className='text-start '>Just-in-Time Learning For Developers, By Developers</h3>
                            <p className='text-start'>Educative offers a robust course library covering today's most in-demand technologies, including cloud computing, full-stack web development, DevOps, networking, cybersecurity, data science, AI, and more.</p>
                            <div className="text-start">
                                <p><img src={check} alt="" className='img-fluid ' /> Learn Quickly and Actively with No Setup</p>
                                <p>Accelerate learning through interactive, expert-created courses, all supported in-browser with an embedded coding environment.</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Practice Makes Perfect</p>
                                <p>Engineers learn by doing. Using dev-approved and scientifically-backed features, Educative Courses provides an interactive experience designed to improve learning outcomes.</p>
                                <p><img src={check} alt="" className='img-fluid ' />Drive Business Outcomes with Just-in-Time Learning</p>
                                <p>Real-world engineering problems aren’t always expected. Educative Courses are created to help solve skill gaps that may block implementation of new technology..</p>
                            </div>
                        </Col>
                    </Row>

                </section>

            </Container>
            {/* 4th row */}
            <Container data-aos="fade-left">
                <Row>
                    <Col xs={12} md={6}>
                        <h3 className='smallCenter'>Learn. Practice. Build. Repeat.</h3>
                        <p className='text-start'>Educative Projects enables software engineers to learn and practice in-demand skills by building functional projects, without wasting time on setup or risking production environments. No downloads, no configs, no setup.</p>
                        <div className="text-start">
                            <p><img src={check} alt="" className='img-fluid ' /> Hassle Free, In-browser Coding</p>
                            <p>Cut the time needed to set up dev environments and code inside your browser. No more Zips, .EXEs, .PKGs, and .DMGs. No passive video-based learning.</p>
                            <p><img src={check} alt="" className='img-fluid ' />Learn by Doing, Not by Watching</p>
                            <p>Software engineers learn best by building. Actively develop skills through full-featured projects in over 20 technologies.</p>
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
                <h2 className='my-5'>The Enablement Platform Your Entire Team Will Love</h2>
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
