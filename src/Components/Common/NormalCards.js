import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function NormalCards({ titleSection, card1Msg, card1Img, card1Name, card2Msg, card2Img, card2Name, card3Msg, card3Img, card3Name }) {
    return (
        <section className='container mt-5'>
            <h1 className=''>{titleSection}</h1>
            <Row className='my-5'>
                <Col xs={12} md={4} className='my-5'>
                    <Card>
                        <Card.Img variant="img-fluid" height={250} src={card1Img} />
                        <Card.Body className='text-start'>
                            <Card.Title className='fw-bold'>{card1Name}</Card.Title>
                            <Card.Text>
                                {card1Msg}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col xs={12} md={4} className=''>
                    <Card>
                        <Card.Img variant="img-fluid" height={250} src={card2Img} />
                        <Card.Body className='text-start'>
                            <Card.Title className='fw-bold' >{card2Name}</Card.Title>
                            <Card.Text>
                                {card2Msg}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col xs={12} md={4} className='mt-5'>
                    <Card>
                        <Card.Img variant="img-fluid" height={250} src={card3Img} />
                        <Card.Body className='text-start'>
                            <Card.Title className='fw-bold'>{card3Name}</Card.Title>
                            <Card.Text>
                                {card3Msg}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </section>
    )
}
