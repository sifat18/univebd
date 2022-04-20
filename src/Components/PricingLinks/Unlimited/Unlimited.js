import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Companies from '../../Common/Companies'
import Demo from '../../Common/Demo'
import PriceCard from '../../Common/PriceCard'
import home2 from '../../images/home2.png'
import unlimited from '../../images/unlimited.png'


export default function Unlimited() {
    return (
        <>
            {/* top part */}
            <Container data-aos="fade-up-right" className='my-5'>
                <section className='text-center '>
                    <h2 className=''>Career এ এগিয়ে থাকুন with Unive </h2>
                    <h4 className=' mt-3 smallText mx-auto'>75% of developers learn new tech skills at least once a year <br /> Stand out from the crowd with real-world skills and accelerate your career.</h4>
                    <div className=" mt-3   ">
                    </div>

                </section>
            </Container>

            <Container fluid data-aos="fade-up-left" className='middle text-center my-5 py-5'>
                <PriceCard />
                <p className='my-5'> <a href='/home'> explore for your team</a></p>
                <p className='my-5'> Trusted by more than 1.1 million learners working for companies like</p>
                <Container >
                    <Companies />
                </Container>

            </Container>
            {/* Course you need */}
            <Container data-aos="fade-up" >
                <Row className='gx-5'>
                    <Col xs={12} md={4} className='text-center mb-3 '>
                        <img src="" alt="someimage" />
                        <h3>Courses you need</h3>
                        <p>With a vast (and growing) library of 380+ hands-on courses, you’ll find plenty of content to sink your teeth into no matter what your goals are.</p>
                    </Col>
                    <Col xs={12} md={4} className='text-center mb-3'>
                        <img src="" alt="someimage" />
                        <h3>Always expanding</h3>
                        <p>As a subscriber, you’ll get access to not just courses currently on the site, but to all our new and upcoming courses as well. Look out for new releases each week.</p>
                    </Col>
                    <Col xs={12} md={4} className='text-center '>
                        <img src="" alt="someimage" />
                        <h3>Cancel anytime</h3>
                        <p>Prefer not to continue? No problem. Cancel any time to stop future charges. Your access will remain active until the current subscription period ends.</p>
                    </Col>
                </Row>
                <Row className='my-5 py-5 smallCenter'>
                    <Col xs={12} md={6} className='my-5 py-5'>
                        <h3>Show off your skills with <br /> certificates</h3>
                        <p>Built-in assessments let you test your skills. Certificates <br /> let you show them off.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={unlimited} className='img-fluid' alt="" />
                    </Col>
                </Row>

            </Container>
            {/* demo */}
            <Container data-aos="fade-down" fluid className='middle my-5 py-5'>
                <Demo />
            </Container>
        </>
    )
}
