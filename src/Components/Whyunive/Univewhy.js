import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
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
import gif1 from '../images/whyUnive/easy-to-learn.gif'
import gif2 from '../images/whyUnive/exams-preparation.gif'
import gif3 from '../images/whyUnive/skills.gif'
import gif4 from '../images/whyUnive/business-man-winner-with-trophy.gif'
import gif5 from '../images/whyUnive/recruitment-get-ready-to-work-job-recruitment-isometric-hiring-process.gif'
import gif6 from '../images/whyUnive/skilled-team.gif'
import gif7 from '../images/whyUnive/man-works-online.gif'
import gif8 from '../images/whyUnive/business-illustration.gif'
import gif9 from '../images/whyUnive/engineering.gif'
export default function Univewhy() {
    return (
        <>
            <Header />
            <h2 data-aos="fade-up" className='text-center my-5 py-5'>
                কেন আপনার ক্যারিয়ার গঠনে ইউনিভ ব্যবহার করবেন?
            </h2>
            {/* pic1 */}
            {/* <Container fluid className='middle mt-5'>
                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={pic1} alt="" />
                </Container>
            </Container> */}
            {/* gif1 */}
            <Container fluid className=' mt-5'>
                <Row>
                    <Col xs={12} md={6} className='my-auto order-1 order-md-2'>
                        <Container>
            <h2 className='text-center '>
            সম্পূর্ণ বাংলায় টেকনিক্যাল বিষয় শিখুন
            </h2>   </Container>
            </Col>
            <Col xs={12} md={6} className=' order-2 order-md-1'>
                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={gif1} alt="" />
                </Container>
                </Col>
                </Row>
            </Container>
            {/* gif2 */}
            <Container fluid className=' '>
            <Row>
            <Col xs={12} md={6} className='order-md-1 order-2 '>
                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={gif2} alt="" />
                </Container>
                </Col>
               
                    <Col xs={12} md={6} className='my-auto order-md-2 order-1 '>
                    <Container>
            <h2 className='text-center '>
            নিজের স্কিল যাচাই করতে স্কিল টেস্ট করুন
            </h2>   
            </Container>
            </Col>
                </Row>
            </Container>
            {/* gif3 */}
            <Container fluid className=' '>
            <Row>
                    <Col  xs={12} md={6} className='my-auto order-md-2 order-1 '>
                <Container>

            <h2 className='text-center '>
            স্কিল টেস্টে ভালো ফলাফল করে পেতে পারেন <br/> নিশ্চিত জব অফার দেশের প্রথম সারির কোম্পানি থেকে।
            </h2>   
            </Container>

            </Col>
            <Col  xs={12} md={6} className='order-md-1 order-2 '>

                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={gif3} alt="" />
                </Container>
               </Col>
                </Row>
            </Container>
            {/* gif4 */}
            <Container fluid className='mt-5 '>
                <Row>
                   <Col  xs={12} md={6} className='order-md-1 order-2'  >
                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={gif4} alt="" />
                </Container>
                </Col>
                <Col  xs={12} md={6} className='order-md-2 order-1' >
                <Container>

            <h2 className='text-center pt-5'>
            স্কিল টেস্ট, প্রয়োজনীয় ভাষাগত যোগ্যতা এবং পাসপোর্ট প্রস্তুত থাকলে পেতে পারেন জব <br/> অফার বিশ্বের যেকোনো প্রান্ত থেকে।
            </h2>   
            </Container>

            </Col>
                </Row>
            </Container>
            {/* gif5 */}
            <Container fluid className=' '>
                <Row>
                    <Col xs={12} md={6} className='my-auto order-md-2 order-1' >
                    <Container>

            <h2 className='text-center '>
            সফলভাবে কোর্স সম্পন্ন করে ইউনিভ অ্যাফিলিয়েটেড কোম্পানি তে চাকরির সুযোগ।

            </h2>   
            </Container>

            </Col>
            <Col xs={12} md={6} className='order-md-1 order-2' >
                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={gif5} alt="" />
                </Container>
                </Col></Row>
            </Container>
            {/* gif6 */}
            <Container fluid className=' '>
                <Row>
                   <Col xs={12} md={6} className='order-md-1 order-2' >
                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={gif6} alt="" />
                </Container>
                </Col>
                <Col xs={12} md={6} className='my-auto order-md-2 order-1' >
                <Container>

            <h2 className='text-center '>
            Unive এর সম্পূর্ণ অটোমেটেড বাছাই প্রক্রিয়ায় প্রার্থী <br/>বাছাই করুন অতিরিক্ত সময় নষ্ট করা ছাড়াই।
            </h2>   
            </Container>

            </Col>
                </Row>
            </Container>
            {/* gif7 */}
            <Container fluid className=' '>
                <Row>
                    <Col xs={12} md={6} className='my-auto'>
                    <Container>

            <h2 className='text-center pt-5'>
            Unive ইন্টারভিউ টেস্ট এর মাধ্যমে অনলাইনে ইন্টারভিউ এর মাঝেই নিয়ে নিন <br/>প্রার্থীদের কারিগরি ও অন্যান্য প্রয়োজনীয় টেস্ট।
            </h2>  
            </Container>
             </Col>
            <Col xs={12} md={6}>
                <Container data-aos="fade-right" className='w-75 text-center'>
                    <img className='img-fluid ' src={gif7} alt="" />
                </Container>
                </Col>
                </Row>
                </Container>
            {/* gif8 */}
            <Container fluid className=' '>
           <Row>
            
            <Col xs={12} md={6} className=' order-md-1 order-2'>  
                <Container data-aos="fade-right" className='w-100 text-center'>
                    <img className='img-fluid ' src={gif8} alt="" />
                </Container>
                </Col>
                <Col  xs={12} md={6} className='my-auto order-md-2 order-1'>
                <Container>

             <h2 className='text-center pt-5'>
            Unive এর মাধ্যমে বাছাইকৃত প্রার্থীদের জব অনবোর্ডিং করে <br/>প্রোডাক্টিভিটি নিশ্চিত করুন দ্রুততম সময়ে।

            </h2>
            </Container>
             </Col>
            </Row>
            </Container>
            {/* gif9 */}
            <Container fluid className=' '>
                <Row>
                    <Col className='my-auto'>
                    <Container>

            <h2 className='text-center '>
            ভালো ফলাফল অর্জনকারীদের জন্য অফলাইনে ব্যবহারিক কাজ শেখার সুযোগ

            </h2> 
            </Container>

            </Col>
            <Col>  
                <Container data-aos="fade-right" className='w-100 text-center'>
                    <img className='img-fluid ' src={gif9} alt="" />
                </Container>
                </Col>
                </Row>
            </Container>
            {/* pic2 */}
            {/* <Container fluid data-aos="fade-left" className='my-2'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic2} alt="" />
                </Container>
            </Container> */}
            {/* pic3 */}
            {/* <Container fluid data-aos="fade-right" className='middle my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic3} alt="" />
                </Container>
            </Container> */}
            {/* pic4 */}
            {/* <Container fluid data-aos="fade-left" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic4} alt="" />
                </Container>
            </Container> */}
            {/* pic5 */}
            {/* <Container fluid data-aos="fade-right" className='middle my-5 py-5' >
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic5} alt="" />
                </Container>
            </Container> */}
            {/* pic6 */}
            {/* <Container fluid data-aos="fade-left " className='my-5 py-5'>
                <Container className='w-75 text-center py-5'>
                    <img className='img-fluid ' src={pic6} alt="" />
                </Container>
            </Container> */}
            {/* pic7 */}
            {/* <Container fluid data-aos="fade-up" className='middle my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic7} alt="" />
                </Container>
            </Container> */}
            {/* pic8 */}
            {/* <Container fluid data-aos="fade-down" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic8} alt="" />
                </Container>
            </Container> */}
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
