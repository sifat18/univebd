import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './style.css'
export default function Demo() {
    return (
        <Container className='my-5 w-75'>
            <Row className='my-5 demo'>
                <Col xs={12} md={6}>
                    <img className='img-fluid' src="https://thumbs.dreamstime.com/b/solution-loading-vector-illustration-concepts-problem-solving-progress-doodle-121718155.jpg" alt="" /></Col>
                <Col xs={12} md={6} className='text-start mt-5 mx-0 pb-5 smallCenter'>
                    <h2 className='smallCenter'>Ready for a demo?</h2>
                    <p >See Educative in action to learn how the power of developer experiences can push your team faster and farther than ever before.</p>
                    <Button variant="primary" className='mx-auto bluebtn'>Request Demo</Button>

                </Col>
            </Row>
        </Container>
    )
}
