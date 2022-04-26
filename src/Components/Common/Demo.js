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
                    <h2 className='smallCenter'>আপনি কি আগ্রহী?</h2>
                    <p >দেখুন Unive কিভাবে আপনার প্রতিষ্ঠানের এমপ্লয়ী প্রোডাক্টিভিটি এবং এমপ্লয়ী এক্সপেরিয়েন্স কে এনরিচ করতে পারে।</p>
                    <Button variant="primary" className='mx-auto bluebtn'> ডেমো এর জন্য ক্লিক করুন</Button>

                </Col>
            </Row>
        </Container>
    )
}
