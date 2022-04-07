import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function ReviewCard() {
    return (
        <section className='container mt-5'>
            <h1 className=''>Why learners love Educative</h1>
            <Container className='my-5 text-start'>
                <Row>
                    <Col xs={12} md={5} className='bg-white shadow h-50 p-5'>
                        <div><i class="fa-solid fa-quote-left"></i></div>
                        <p className=' mx-1 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>
                    </Col>
                    <Col xs={0} md={1} ></Col>
                    <Col xs={12} md={5} className='bg-white p-5 shadow '>
                        <div style={{ paddingTop: "-50px" }}> <i className="fa-solid fa-quote-left"></i>
                        </div>
                        <p className='mx-1 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>

                    </Col>
                </Row>
            </Container>

        </section>
    )
}
