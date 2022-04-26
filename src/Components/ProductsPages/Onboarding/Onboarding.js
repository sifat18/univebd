import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Demo from '../../Common/Demo'
import onb0 from '../../images/onb0.png'
import onb1 from '../../images/onb1.png'
import bus4 from '../../images/bus4.png'
import onb2 from '../../images/onb2.png'
import onb3 from '../../images/onb3.png'
import onb4 from '../../images/onb4.png'
import onb5 from '../../images/onb5.png'
import onb6 from '../../images/onb6.png'
import onb7 from '../../images/onb7.png'
import onb8 from '../../images/onb8.png'
import onb9 from '../../images/onb9.png'
import check from '../../images/check.png'
import './onboard.css'
import Companies from '../../Common/Companies'
import Header from '../../Header/Header'
export default function Onboarding() {
    const [flag, setFlag] = useState(true)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)
    const handleOnb = (param) => {
        if (param === 'onb') {
            setFlag(true)
            setFlag2(false)
            setFlag3(false)
        }
        else if (param === 'up') {
            setFlag2(true)
            setFlag(false)
            setFlag3(false)
        }
        else if (param === 'retain') {
            setFlag3(true)
            setFlag2(false)
            setFlag(false)
        }
    }
    return (

        <>
            <Header />
            {/* top part */}
            <Container className='my-5' data-aos="fade-up-left">
                <section className='text-center '>
                    <h2 className='fs-1 fw-bold'>Onboard your new software engineers. <br />Upskill the ones you already have.</h2>
                    <h3 className=' mt-5 smallText'>Onboarding your growing team of developers is monotonous, <br />difficult, and time-consuming. It doesn't have to be.</h3>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3  bluebtn' href="#">Request a demo</Button>
                    </div>
                    <div >
                        <img className='img-fluid ' src={onb0} alt="" />

                    </div>
                    <Companies />
                </section>

            </Container>
            {/* How we help */}
            <Container fluid data-aos="fade-up" className='text-center py-5 middle'>
                <Container className='my-5 onboarding75'>
                    <div className="bg-white smallWidth  onboarding50 mx-auto py-4  my-5 rounded-pill d-flex justify-content-around">
                        <Button onClick={() => handleOnb('onb')} variant="outline-light onbButton  py-3 onboardingPad  rounded-pill ">Onboard</Button>
                        <Button onClick={() => handleOnb('up')} variant="outline-light onbButton  py-3  onboardingPad rounded-pill ">Upskill</Button>
                        <Button onClick={() => handleOnb('retain')} variant="outline-light onbButton  py-3 onboardingPad rounded-pill">Retain</Button>
                    </div>
                    <Row className={flag ? ` my-5 demo` : `d-none my-5 demo`} >
                        <Col xs={12} md={6}>
                            <img className='img-fluid' src={onb7} alt="" /></Col>
                        <Col xs={12} md={6} className='text-start mt-5 mx-0'>
                            <h2>Accelerate Engineer Learning</h2>
                            <p>Onboarding engineers doesn't have to be haphazard, unscalable, and time-consuming. Educative helps you code, ship, and scale your teams faster and farther than ever before.</p>
                            <div className="text-start">

                                <p><img src={check} alt="" className='img-fluid ' /> Asynchronous and structured documentation</p>
                                <p><img src={check} alt="" className='img-fluid ' /> In-browser coding environments</p>
                                <p><img src={check} alt="" className='img-fluid ' />Track and measure progress</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={flag2 ? ` my-5 demo` : `d-none my-5 demo`}>
                        <Col xs={12} md={6}>
                            <img className='img-fluid' src={onb8} alt="" /></Col>
                        <Col xs={12} md={6} className='text-start mt-5 mx-0'>
                            <h2>Upskill your engineering team</h2>
                            <p>54% of engineers say not offering resources to drive confidence in work is unappealing. Educative offers active-learning opportunities for even the most seasoned developers. Hands-on, interactive training ensures everyone learns exactly what they need.</p>
                            <div className="text-start">

                                <p><img src={check} alt="" className='img-fluid ' /> Learn new technologies</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Address skill gaps</p>
                                <p><img src={check} alt="" className='img-fluid ' />Drive confidence in work</p>
                            </div>

                        </Col>
                    </Row>
                    <Row className={flag3 ? ` my-5 demo` : `d-none my-5 demo`}>
                        <Col xs={12} md={6}>
                            <img className='img-fluid' src={onb9} alt="" /></Col>
                        <Col xs={12} md={6} className='text-start mt-5 mx-0'>
                            <h2>Retain your best engineers</h2>
                            <p>74% of the engineers are actively looking for new opportunities and consider opportunity to learn as being an important factor when comparing current to future employers.</p>
                            <div className="text-start">

                                <p><img src={check} alt="" className='img-fluid ' /> Access to 320+ courses for your entire team</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Text based, interactive coding environments</p>
                                <p><img src={check} alt="" className='img-fluid ' />Practice while learning with built in assessments</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Container>

            {/* Custom leaerning */}
            <Container fluid data-aos="fade-down" className='text-center py-5 '>
                <h2 className=''>How we help you onboard your <br /> teams more efficiently</h2>
                <section className='container my-5 '>

                    <Row>
                        <Col xs={12} md={6}>
                            <img className='img-fluid' src={onb2} alt="" />
                        </Col>
                        <Col xs={12} md={6} className="text-start pt-3">
                            <h3 className='fs-4 fw-bold'>Custom Onboarding Plans</h3>
                            <p className='text-start fs-5'>Engineering teams are like fingerprints - no two are exactly alike. Tailor unique paths for teams so new hires fill their knowledge gaps and ramp on broader technology, your products, and internal processes. Include in your custom plans things like:</p>
                            <div className="text-start">

                                <p><img src={check} alt="" className='img-fluid ' /> Release process</p>
                                <p><img src={check} alt="" className='img-fluid ' /> Code Libraries</p>
                                <p><img src={check} alt="" className='img-fluid ' />Team structure</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-5 py-2'>
                        <Col xs={12} md={6} className="text-start pt-5">
                            <h1 className='fw-bold'>Educative Courses Integration</h1>
                            <p className='text-start fs-4 pt-5'>Need to teach a new language or technology? Want to knock the rust off an established skill? Integrate your onboarding with the leading provider of hands-on interactive coding so your software engineers grow faster and farther.</p>

                        </Col>
                        <Col xs={12} md={6}>
                            <img className='mt-3 w-75' src={bus4} alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className='mt-5 w-75' src={onb3} alt="" />
                        </Col>
                        <Col xs={12} md={6} className="text-start">
                            <h3 className='fw-bold mt-5 pt-5'>Assign Mentors</h3>
                            <p className='text-start fs-4 pt-3'>New hires can quickly get overwhelmed during Onboarding and are unaware of whom to reach out to for help. Enhance their onboarding experience by assigning them Mentors.</p>

                        </Col>

                    </Row>
                    <Row className='my-5 py-2'>
                        <Col xs={12} md={6} className="text-start pt-5">
                            <h1 className='fw-bold'>Unblock your mentees</h1>
                            <p className='text-start fs-4 pt-5'>Jump in when help is needed. Stay out of the way when it’s not. Mentees can raise their virtual hand to signal their mentor when they’re stuck. Notifications alert the mentor upon login to answer the question and get the mentee back on track.</p>

                        </Col>
                        <Col xs={12} md={6}>
                            <img className='mt-3 w-75' src={onb4} alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className='mt-5 w-75' src={onb5} alt="" />
                        </Col>
                        <Col xs={12} md={6} className="text-start">
                            <h3 className='fw-bold mt-5 pt-5'>Capture Actionable Insights</h3>
                            <p className='text-start fs-4 pt-3'>Oversee the progress of your new hires, the performance of your mentors, and the overall efficiency of your Onboarding program, with our reports and dashboards.</p>

                        </Col>

                    </Row>
                    <Row className='my-5 py-2'>
                        <Col xs={12} md={6} className="text-start pt-5">
                            <h1 className='fw-bold'>White Glove Service</h1>
                            <p className='text-start fs-4 pt-5'>Migrate your existing content and assets from anywhere to Onboarding or let Educative create a tailored Onboarding program from scratch just for you.</p>

                        </Col>
                        <Col xs={12} md={6}>
                            <img className='mt-3 w-75' src={onb6} alt="" />
                        </Col>
                    </Row>
                </section>

            </Container>

            <Container fluid data-aos="fade-down" className='text-center py-5 middle'>

                <Demo />
            </Container>




        </>
    )
}
