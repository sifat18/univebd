import React, { Suspense } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import bus from '../images/bus.jpg'
// import bus2 from '../images/bus2.png'
import { BsCheck2Circle } from "react-icons/bs";
import bus3 from '../images/bus3.png'
// import ar from '../images/icons8-arrow-.png'
import bus4 from '../images/bus4.png'
// import Demo from '../Common/Demo'
// import Companies from '../Common/Companies'
// import ReviewCard from '../Common/ReviewCard'
// import Resources from '../Common/Resources'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Demo = React.lazy(() => import("../Common/Demo"));
const Companies = React.lazy(() => import("../Common/Companies"));
const ReviewCard = React.lazy(() => import("../Common/ReviewCard"));
const Resources = React.lazy(() => import("../Common/Resources"));

export default function Business() {
    return (
        <>
        <Suspense>
            <Header />
            {/* top part */}
            <Container className='my-5'>
                <section className='text-center '>
                    <h2 className=''>Start new developers.</h2>
                    <h2 className=' mt-3 smallText ps-1'>Keep the ones you already have.</h2>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3 bluebtn ' href="#">Start a free trial</Button>
                    </div>
                    <div >
                        <img className='img-fluid w-50' src={bus} alt="" />
                        {/* logos */}
                        <Companies />
                    </div>
                </section>
            </Container>
            {/* Full Unive Experience */}
            <Container fluid className='text-center py-5 middle'>
                <section className='container mt-5'>
                    <h1 className=''>The Full Unive Experience</h1>
                    <Row className='my-5'>
                        <Col xs={12} md={6}>
                            <img className='img-fluid' src={bus3} alt="" />
                        </Col>
                        <Col xs={12} md={6} className='mt-5'>
                            <h3 className='text-center'>Introducing Educative Onboarding</h3>
                            <p className='text-start'>The clock is ticking on your team. The average tenure of a software engineer is just 2 years. Help them contribute to code faster and keep them longer by leveraging best practices</p>
                            <div className="text-start">
                                <p><BsCheck2Circle className='text-success fs-4 me-2' /> Asynchronous learning</p>
                                <p><BsCheck2Circle className='text-success fs-4 me-2' /> Ask for help</p>
                                <p><BsCheck2Circle className='text-success fs-4 me-2' /> Organized documentation</p>
                                <p><BsCheck2Circle className='text-success fs-4 me-2' />Upskill your current team</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <h3>The Classic: Educative Learning</h3>
                            <p className='text-start'>Access to our world-class catalog of 300 hands-on, interactive courses that help software engineers learn by doing, not watching. Nothing to configure. Explore the new courses added each week</p>
                            <div className="text-start">

                                <p><BsCheck2Circle className='text-success fs-4 me-2' /> Learn at your own pace</p>
                                <p><BsCheck2Circle className='text-success fs-4 me-2' />  Retain more information</p>
                                <p><BsCheck2Circle className='text-success fs-4 me-2' /> Practice</p>
                            </div></Col>
                        <Col xs={12} md={6}>
                            <img className='img-fluid' src={bus4} alt="" />
                        </Col>
                    </Row>
                </section>

            </Container>
            {/* review */}
            <Container fluid className='text-center py-5 '>
                <section className='container mt-5'>
                    <h1 className=''>What our users are saying</h1>
                    <ReviewCard />
                </section>

            </Container >
            {/* resources */}
            <Container fluid className='text-center py-5 middle'>
                <Resources />
                {/* demo */}
            </Container>
            <Demo />
            <Footer />
            </Suspense>
        </>
    )
}
