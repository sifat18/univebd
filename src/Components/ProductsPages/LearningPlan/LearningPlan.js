import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import NormalCards from '../../Common/NormalCards'
import learn from '../../images/learn.png'
import learn1 from '../../images/learn1.png'
import learn2 from '../../images/learn2.png'
import learn3 from '../../images/learn3.png'
import learn4 from '../../images/learn4.png'
// import learn from '../../images/learn.png'
export default function LearningPlan() {
    return (
        <>
            {/* top part */}
            <Container fluid className=' middle '>
                <Container className=' py-5'>
                    <section className='text-center '>
                        <h2 className='fs-1 fw-bold'>Personalized Learning Plans</h2>
                        <h3 className=' fs-2 mt-3'>Achieve your goals faster with a plan designed just for you.</h3>
                        <div className=" mt-3   ">
                            <Button className='p-3 m-3 w-25' href="#">Continue where you left off</Button>
                        </div>
                        <div >
                            <img className='img-fluid w-50' src={learn} alt="" />

                        </div>
                    </section>
                </Container>
            </Container>

            {/* Custom leaerning */}
            <Container fluid className='text-center py-5 '>
                {/* middle part */}
                <section className='container my-5 '>

                    <Row>
                        <Col xs={6} className="text-start pt-5">
                            <h1 className='fw-bold'>Curated by industry experts</h1>
                            <p className='text-start fs-4 pt-5'>Dig into personalized content on topics you want to learn. Your plan will be tailored to your skills, objectives and time constraints.</p>

                        </Col>
                        <Col xs={6}>
                            <img className='mt-3 w-75' src={learn1} alt="" />
                        </Col>
                    </Row>
                    <Row className='my-5 py-2'>
                        <Col xs={6}>
                            <img className='img-fluid' src={learn2} alt="" />
                        </Col>
                        <Col xs={6} className="text-start mt-5 pt-5">
                            <h3 className='fs-4 fw-bold'>Stop searching, start learning</h3>
                            <p className='text-start fs-5'>Finding the best coursework and building a curriculum on your own is time consuming. Start learning now – just answer a few quick questions to begin.</p>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} className="text-start mt-5 pt-5">
                            <h3 className='fw-bold'>Your personalized curriculum</h3>
                            <p className='text-start fs-4 pt-3'>No two software engineers are the same, neither are their learning needs. Personalized Learning Plans are customized and focused on your individual learning needs and career goals.</p>

                        </Col>
                        <Col xs={6}>
                            <img className='mt-5 w-75' src={learn3} alt="" />
                        </Col>
                    </Row>
                    <Row className='my-5 py-2'>
                        <Col xs={6}>
                            <img className='img-fluid' src={learn4} alt="" />
                        </Col>
                        <Col xs={6} className="text-start pt-3 mt-5 pt-5">
                            <h3 className='fs-4 fw-bold'>Reports and Analytics</h3>
                            <p className='text-start fs-5'>Stay on top of your progress with learning reports and analytics built by data scientists to help you reach your learning goals.</p>

                        </Col>
                    </Row>
                </section>

            </Container>

            {/* How we help */}
            <Container fluid className='text-center py-5 middle'>
                <NormalCards
                    titleSection={"How we help"}
                    card1Msg={"Answer a few questions to share your learning goals and preferences."}
                    card1Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card1Name={"Share your Learning Objectives"}
                    card2Msg={"Based on your responses, we recommend a personalized learning plan tailor-made to achieve your learning objectives."}
                    card2Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card2Name={"Get Personalized Learning Plan"}
                    card3Msg={"Make the most out of the Educative platform and achieve your learning goals."}
                    card3Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card3Name={"Start Learning"}
                />

            </Container>

            <Container fluid className=' my-4 '>
                <Container className=' py-5'>
                    <section className='text-center '>
                        <h4 className='fs-1 fw-bold'>Personalized Learning Plans</h4>
                        <div className=" mt-3   ">
                            <Button className='p-3 m-3 w-25' href="#">Continue where you left off</Button>
                        </div>
                    </section>
                </Container>
            </Container>



        </>
    )
}
