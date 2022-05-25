import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import pic1 from '../images/whyUnive/Picture1.png'
import pic2 from '../images/whyUnive/Picture2.png'
import pic3 from '../images/whyUnive/Picture3-4.png'
import pic4 from '../images/whyUnive/Picture5.png'
import pic5 from '../images/whyUnive/Picture6.png'
import pic6 from '../images/whyUnive/Picture7.png'
import pic7 from '../images/whyUnive/Picture8.png'
import pic8 from '../images/whyUnive/Picture9.png'
export default function Univewhy() {
    return (
        <>
            <Header />
            <h2 data-aos="fade-up" className='text-center my-5 py-5'>
                কেন আপনার ক্যারিয়ার গঠনে ইউনিভ ব্যবহার করবেন?
            </h2>
            {/* pic1 */}
            <Container fluid className='middle my-5'>
                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={pic1} alt="" />
                </Container>
            </Container>
            {/* pic2 */}
            <Container fluid data-aos="fade-left" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic2} alt="" />
                </Container>
            </Container>
            {/* pic3 */}
            <Container fluid data-aos="fade-right" className='middle my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic3} alt="" />
                </Container>
            </Container>
            {/* pic4 */}
            <Container fluid data-aos="fade-left" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic4} alt="" />
                </Container>
            </Container>
            {/* pic5 */}
            <Container fluid data-aos="fade-right" className='middle my-5 py-5' >
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic5} alt="" />
                </Container>
            </Container>
            {/* pic6 */}
            <Container fluid data-aos="fade-left " className='my-5 py-5'>
                <Container className='w-75 text-center py-5'>
                    <img className='img-fluid ' src={pic6} alt="" />
                </Container>
            </Container>
            {/* pic7 */}
            <Container fluid data-aos="fade-up" className='middle my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic7} alt="" />
                </Container>
            </Container>
            {/* pic8 */}
            <Container fluid data-aos="fade-down" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic8} alt="" />
                </Container>
            </Container>
            {/* pic9 */}
            {/* <Container fluid className='middle'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic9} alt="" />
                </Container>
            </Container> */}
            <Footer />
        </>
    )
}
