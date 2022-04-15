import React from 'react'
import { Container } from 'react-bootstrap'
import conactImage from '../images/Contact/contact.png'
export default function Contact() {
    return (
        <>
            <h2 className='text-center my-5 py-5'>
                সরাসরি মেসেজ করুন        </h2>
            {/* form */}
            <Container fluid className='middle my-5'>
                <Container className='w-75 text-center'>
                    নাম ,ইমেইল ,মেসেজ আপনার নাম,সেন্ড করুন,আপনার মেসেজটি লিখুন
                </Container>
            </Container>
            {/* pic2 */}
            <Container fluid className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={conactImage} alt="" />
                </Container>
            </Container>

        </>
    )
}
