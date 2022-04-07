import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Demo from '../../Common/Demo'
import NormalCards from '../../Common/NormalCards'
import up0 from '../../images/up0.png'
import up1 from '../../images/up1.png'
import up2 from '../../images/up2.png'
import up3 from '../../images/up3.png'
export default function Upskill() {
    return (
        <>
            {/* top part */}
            <Container className='my-5'>
                <section className='text-center '>
                    <h2 className='fs-1 fw-bold'>Upskill Your Team.</h2>
                    <h3 className=' fs-2 mt-3'>Improve Their Code and Career.</h3>
                    <p className=' mt-5 '>Educative helps engineering managers and their teams learn, practice,<br />and test their coding skills using hands-on, interactive tools right from their internet browser.</p>
                    <p className=' '></p>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3 w-25' href="#">Request a demo</Button>
                    </div>
                    <div >
                        <img className='img-fluid w-50' src={up0} alt="" />

                    </div>
                </section>
            </Container>
            {/* How we help */}
            <Container fluid className='text-center py-5 middle'>
                <NormalCards
                    titleSection={"How we help"}
                    card1Msg={"Videos are boring. And slow. Learn at your own pace with our vast and growing library of interactive hands-on courses."}
                    card1Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card1Name={"Learn in a new way"}
                    card2Msg={"You hired a team of lifelong learners. Support their drive to improve with the tools to test their current skills, then get better."}
                    card2Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card2Name={"Strengthen and Measure"}
                    card3Msg={"Nothing to download, nothing to install, nothing to configure. You'll be online and learning in minutes, not hours."}
                    card3Img={"https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"}
                    card3Name={"Go Fast"}
                />

            </Container>

            {/* Custom leaerning */}
            <Container fluid className='text-center py-5 '>
                {/* middle part */}
                <section className='container my-5 '>

                    <Row>
                        <Col xs={6} className="text-start pt-5">
                            <h1 className='fw-bold'>Custom Learning Paths</h1>
                            <p className='text-start fs-4 pt-5'>No two engineers are exactly the same, so why is their curriculum? Educative helps you customize their training and paths so each engineer on your team gets exactly what they need and skip what they've already mastered.</p>

                        </Col>
                        <Col xs={6}>
                            <img className='mt-3 w-75' src={up1} alt="" />
                        </Col>
                    </Row>
                    <Row className='my-5 py-2'>
                        <Col xs={6}>
                            <img className='img-fluid' src={up2} alt="" />
                        </Col>
                        <Col xs={6} className="text-start pt-3">
                            <h3 className='fs-4 fw-bold'>Active Participation</h3>
                            <p className='text-start fs-5'>Watching videos is great for the weekend but hands-on, in-browser practice ensures that engineers get real-time feedback. Active learning increases retention and ensures that engineers spend more time coding and less time watching.</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="text-start">
                            <h3 className='fw-bold'>Engagement Tracking</h3>
                            <p className='text-start fs-4 pt-3'>Educative empowers you with insights into your team's learning— who is taking the courses, and more importantly, who is not. Celebrate your team's progress and remind passive participants to accept your invitation to grow, learn and improve using the Educative platform.</p>

                        </Col>
                        <Col xs={6}>
                            <img className='mt-5 w-75' src={up3} alt="" />
                        </Col>
                    </Row>
                </section>

            </Container>

            <Container fluid className='text-center py-5 middle'>

                <Demo />
            </Container>




        </>
    )
}
