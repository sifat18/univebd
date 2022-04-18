import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import check from '../images/check.png'
export default function PriceCard() {
    return (
        <section className='container mt-5'>
            <Row className='my-5'>
                <Col xs={12} md={4} className='mt-5'>
                    <Card className="text-center pt-5">
                        <Card.Title>Free Plan</Card.Title>
                        <p className='text-decoration-line-through'>$16.66</p>
                        <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                        <p>discounted price for </p>
                        <p className='fs-5'> $139 billed annually</p>
                        <Button variant="outline-primary text-center w-50 mx-auto">Get Unlimited</Button>
                        <p className='text-decoration-underline'>Unlimited Course video access</p>
                        <Card.Body className='text-start mx-auto my-3'>

                            <p><img src={check} alt="" />Unlimited Course video access</p>
                        </Card.Body>
                        <Card.Footer className="text-muted">Gift A subscription</Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="text-center pt-5">
                        <Card.Title>Annual Plan</Card.Title>
                        <p className='text-decoration-line-through'>$16.66</p>
                        <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                        <p>discounted price for </p>
                        <p className='fs-5'> $139 billed annually</p>
                        <Button variant="outline-primary text-center w-50 mx-auto">Get Unlimited</Button>
                        <p className='text-decoration-underline'>Pay annually with a 50% discount</p>
                        <Card.Body className='text-start mx-auto my-3'>
                            <p><img src={check} alt="" />Lifetime accesses</p>
                            <p><img src={check} alt="" />Certifications</p>
                            <p><img src={check} alt="" />Interview scheduling</p>
                            <p><img src={check} alt="" />Job support 24/7</p>
                            <p><img src={check} alt="" />Growth path</p>
                        </Card.Body>
                        <Card.Footer className="text-muted">Gift A subscription</Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} md={4} className='mt-5'>
                    <Card className="text-center pt-5">
                        <Card.Title>Per course</Card.Title>
                        <p className='text-decoration-line-through'>$16.66</p>
                        <h4 className='text-primary fs-2'>$11.<span className='text-primary fs-4'>66</span><span className='text-dark'>/per month</span></h4>
                        <p>discounted price for </p>
                        <p className='fs-5'> $139 billed annually</p>
                        <Button variant="outline-primary text-center w-50 mx-auto">Get Unlimited</Button>
                        <p className='text-decoration-underline'>Choose a 2 year plan</p>
                        <Card.Body className='text-start mx-auto my-3'>
                            <p><img src={check} alt="" />Unlimited Course Access with assessments</p>
                            <p><img src={check} alt="" />Completion certificates</p>
                            <p><img src={check} alt="" />Interview scheduling</p>
                            <p><img src={check} alt="" />Job support 24/7</p>
                        </Card.Body>
                        <Card.Footer className="text-muted">Gift A subscription</Card.Footer>
                    </Card>
                </Col>
            </Row>

        </section>
    )
}
