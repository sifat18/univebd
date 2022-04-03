import React from 'react'
import { Button, Container } from 'react-bootstrap'
import home from '../images/home.png'
import home2 from '../images/home2.png'
import './home.css'
export default function Home() {
    return (
        <>
            <Container className='my-5'>
                {/* top part */}
                <section className='text-center '>
                    <h1 className=''>Learn something new. Everyday.</h1>
                    <h5 className=' mt-3 ms-5 ps-5'>Educative helps software engineers and their teams increase productivity and reach their </h5>
                    <h5 className=' ms-5 '>potential</h5>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3' href="#">I'm an individual</Button>
                        <Button className='p-3 m-3' href="#">I'm a business</Button>
                    </div>
                    <div >
                        <img className='image-fluid' src={home} alt="" />
                        <p className='my-3'>Trusted by more than 1.1 million learners working for companies like
                            <img className='img-fluid my-5' src={home2} alt="" />

                        </p>
                    </div>
                </section>
            </Container>
            <Container fluid className='text-center p-5 middle'>
                {/* middle part */}
                <section className=' mt-5'>
                    <h1 className=''>Hands-on coding environments</h1>
                    <h5 className=' mt-3  ps-2'>You don’t get better at swimming by watching others. Coding is no different. Practice as </h5>
                    <h5 className=' ms-5 '>you learn with live code environments inside your browser.</h5>
                    <div className=" mt-3   ">
                        <Button className='p-3 m-3' href="#">I'm an individual</Button>
                        <Button className='p-3 m-3' href="#">I'm a business</Button>
                    </div>
                    <div >
                        <img className='image-fluid' src={home} alt="" />
                        <p className='my-3'>Trusted by more than 1.1 million learners working for companies like
                            <img className='img-fluid my-5' src={home2} alt="" />

                        </p>
                    </div>
                </section>

            </Container>
        </>
    )
}
