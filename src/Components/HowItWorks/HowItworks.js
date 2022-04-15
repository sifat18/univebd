import React from 'react'
import { Container } from 'react-bootstrap'
import pic1 from '../images/How-It-works/Picture2-1.png'
import pic2 from '../images/How-It-works/Picture3-1-e1640099208951.png'
import pic3 from '../images/How-It-works/Picture4-1.png'
import pic4 from '../images/How-It-works/Picture5-1.png'
import pic5 from '../images/How-It-works/Picture6-1.png'
import pic6 from '../images/How-It-works/Picture7-1.png'
import pic7 from '../images/How-It-works/Picture8-1.png'
export default function HowItworks() {
    return (
        <>
            <h2 className='text-center my-5 py-5'>
                ইউনিভ কিভাবে কাজ করে?
            </h2>
            {/* pic1 */}
            <Container fluid className='middle my-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic1} alt="" />
                </Container>
            </Container>
            {/* pic2 */}
            <Container fluid className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic2} alt="" />
                </Container>
            </Container>
            {/* pic3 */}
            <Container fluid className='middle my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic3} alt="" />
                </Container>
            </Container>
            {/* pic4 */}
            <Container fluid className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic4} alt="" />
                </Container>
            </Container>
            {/* pic5 */}
            <Container fluid className='middle my-5 py-5' >
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic5} alt="" />
                </Container>
            </Container>
            {/* pic6 */}
            <Container fluid className='my-5 py-5'>
                <Container className='w-75 text-center py-5'>
                    <img className='img-fluid ' src={pic6} alt="" />
                </Container>
            </Container>
            {/* pic7 */}
            <Container fluid className='middle my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic7} alt="" />
                </Container>
            </Container>


            {/* pic9 */}
            {/* <Container fluid className='middle'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic9} alt="" />
                </Container>
            </Container> */}
        </>
    )
}
