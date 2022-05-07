import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useData from '../dataloadHooks/dataload';
import Header from '../Header/Header';
import blog from '../images/blogs/blog.png'
import face from '../images/facebook-64.png'
import linkd from '../images/linkedin-64.png'
import twit from '../images/twitter-64.png'
export default function Blogs() {
    const [item] = useData();
    return (
        <>
            <Header />
            <Container data-aos="fade-up-left" fluid className='bg-primary mb-5 py-5'>
                <Container className='text-light text-center py-5'>
                    <h2 className='fs-1 mb-4'>Unive Blog</h2>
                    <p className='fs-5'>যারা লাইফে গ্রোথ ওরিয়েন্টেড তাদের জন্য</p>
                    <hr className='w-25  bg-white fw-bolder text-light mx-auto' />
                    <div className='d-flex text-center justify-content-center  mt-2 '>
                        <img src={face} alt="" height='25' width='25' className='me-2 text-light' />
                        <img src={linkd} alt="" height='25' width='25' className='mx-2 text-light' />
                        <img src={twit} alt="" height='25' width='25' className='mx-2 text-light' />
                    </div>

                </Container>
            </Container>
            <Container data-aos="fade-up" className='bg-color my-5'>
                {/* search div  */}
                <div className=" text-center my-4 ">
                    <input className='w-75 py-1 rounded-pill ' onChange='{handlesearch}' placeholder='Search ' type="text" name="search" id="search" />
                </div> </Container>
            <Container data-aos="fade-up-left">
                <Row className='my-5'>
                    <Col xs={12} md={7}>
                        <img className='img-fluid' src={blog} alt="" />
                    </Col>
                    <Col xs={12} md={5}>
                        <h2> জীবন সম্পর্কে কিছু আলোচনা</h2>
                        <p className='fs-4 my-5'>আমরা যদি পৃথিবী বদলাতে চাই তবে মনে রাখতে হবে পৃথিবী বদলানোর চেয়ে নিজেকে বদলানো খুবি সহজ। এবং নিজেকে বদলানোর মাধ্যমেই আমরা পারি পৃথিবীকে বদলাতে। ভালো সবকিছুর শুরু হোক আমাদের নিজেদের দিয়ে।</p>
                    </Col>
                </Row>

                <Row xs={1} md={3} className="g-4 my-3 ">
                    {item.map((id) => (
                        <Col key={id.key}>
                            <Card className='py-1'>
                                <Card.Img variant="top" className='img-fluid ' src={id.image} />
                                <Card.Body className='text-start'>
                                    <p>Unive</p>
                                    <Card.Title >{id.name}</Card.Title>
                                    <Card.Text>{id.aboutCourse.slice(0, 100)}              </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col xs={5} className='ms-2 ps-3 mt-3'>
                                        <p className='fs-7'>Beginner</p>
                                    </Col>
                                    <Col xs={6} className='py-3'>
                                        <NavLink to={`/learn/${id.name}`}>  <Button className=' w-100 h-100' variant="warning">Get Started <img src='{ar}' alt="" /></Button></NavLink>

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
