import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import useData from '../dataloadHooks/dataload';
import blog from '../images/blogs/blog.png'
import face from '../images/facebook-64.png'
import linkd from '../images/linkedin-64.png'
import twit from '../images/twitter-64.png'
export default function Blogs() {
    const [item] = useData();
    return (
        <>
            <Container fluid className='bg-primary mb-5 py-5'>
                <Container className='text-light text-center py-5'>
                    <h2 className='fs-1 mb-4'>Unive.blog()</h2>
                    <p className='fs-5'>For developers. By developers.</p>
                    <hr className='w-25  bg-white fw-bolder text-light mx-auto' />
                    <div className='d-flex text-center justify-content-center  mt-2 '>
                        <img src={face} alt="" height='25' width='25' className='me-2 text-light' />
                        <img src={linkd} alt="" height='25' width='25' className='mx-2 text-light' />
                        <img src={twit} alt="" height='25' width='25' className='mx-2 text-light' />
                    </div>

                </Container>
            </Container>
            <Container className='bg-color my-5'>
                {/* search div  */}
                <div className=" text-center my-4 ">
                    <input className='w-75 py-1 rounded-pill ' onChange='{handlesearch}' placeholder='Search ' type="text" name="search" id="search" />
                </div> </Container>
            <Container>
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={blog} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2> 3 philosophies that influenced software development</h2>
                        <p className='fs-4 my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, aperiam. Dignissimos laboriosam velit commodi vel quo ipsam quis odit architecto soluta, </p>
                    </Col>
                </Row>

                <Row xs={1} md={3} className="g-4 my-3 ">
                    {item.map((id) => (
                        <Col key={id.key}>
                            <Card className='py-1'>
                                <Card.Img variant="top" className='img-fluid ' src={id.coverImageUrl} />
                                <Card.Body className='text-start'>
                                    <p>educative</p>
                                    <Card.Title >{id.title}</Card.Title>
                                    <Card.Text>{id.synopsis.slice(0, 100)}              </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={5} className='ms-2 ps-3 mt-3'>
                                        <p className='fs-7'>Beginner</p>
                                    </Col>
                                    <Col xs={6} className='py-3'>
                                        <Button className=' w-100 h-100' variant="warning">Get Started <img src='{ar}' alt="" /></Button>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}

                </Row>

            </Container >
        </>
    )
}
