import { Col, Container, Ratio, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import vid5 from '../images/How-It-works/certificate.mp4'
import vid3 from '../images/How-It-works/certificate2.mp4'
import vid7 from '../images/How-It-works/communicate-with-customer.mp4'
import vid1 from '../images/How-It-works/mouse-click.mp4'
import vid8 from '../images/How-It-works/premium-gold.mp4'
import vid2 from '../images/How-It-works/step-progressbar.mp4'
import vid6 from '../images/How-It-works/support-centre.mp4'
import vid4 from '../images/How-It-works/trophy.mp4'
export default function HowItworks() {
    return (
        <>
            <Header />
            <h2 data-aos="fade-up-right" className='text-center my-5 py-5'>
                ইউনিভ কিভাবে কাজ করে?
            </h2>
       {/* vid1 */}
            <Container  fluid className=' my-5'>
             <Row>
                
                <Col data-aos="fade-up-left" xs={12} md={6}>
                <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid1} type='video/mp4' />
                </video>
      </Ratio>
                </Col>
                <Col data-aos="fade-right" xs={12} md={6} className='my-auto'>
<Container>
                <h2 className='text-center'>এক ক্লিকেই কোর্স শুরু করুন</h2>
                </Container>
                </Col>

                </Row> 
            </Container>
        {/* gif2 */}
            <Container  fluid className=' my-5'>
             <Row>               
                <Col data-aos="fade-up" xs={12} md={6} className='my-auto order-md-1  order-2 '><Container>
                <h2 className='text-center'>কোর্স প্রোগ্রেস সেভ করে রাখতে ইমেইল বা ফোন নাম্বার দিয়ে লগইন করুন </h2>
                </Container></Col>
                <Col data-aos="fade-left" xs={12} md={6} className='order-md-2  order-1'>
                <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid2} type='video/mp4' />
                </video>
      </Ratio>
                </Col>
                </Row>
            </Container>
            {/* gif3 */}
            <Container  fluid className=' my-5'>
                <Row>
                <Col data-aos="fade-down" xs={12} md={6}>
                <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid3} type='video/mp4' />
                </video>
      </Ratio>
                </Col>
<Col data-aos="fade-up" xs={12} md={6} className='my-auto'><Container>
                <h2 className='text-center'>সকল কোর্স ছোট ছোট সহজবোধ্য লার্নিং মডিউলে বিভক্ত।
 </h2></Container></Col>
 
                </Row>

            </Container>
            {/* gif4 */}
            <Container  fluid className=' my-5'>
                <Row>
                    <Col data-aos="fade-down" xs={12} md={6} className='my-auto order-md-1 order-2'><Container>
                <h2 className='text-center'>আপনার কোর্স পারফরম্যান্স বা স্কিল অ্যাসেসমেন্ট এর উপরে <br/>লিডারবোর্ডে স্থান করে জিতে নিন আকর্ষণীয় পুরস্কার।</h2>
                </Container></Col>
                <Col data-aos="fade-left" xs={12} md={6} className='order-md-2 order-1'>
                <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid4} type='video/mp4' />
                </video>
      </Ratio>
                </Col>
                </Row>
                
            </Container>
            {/* gif5 */}
            <Container  fluid className=' my-5'>
              <Row>
                
 <Col data-aos="fade-right" xs={12} md={6}>
 <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid5} type='video/mp4' />
                </video>
      </Ratio>
                </Col>
                <Col data-aos="fade-down" xs={12} md={6} className='my-auto'><Container>
                <h2 className='text-center'>কোর্স সম্পন্ন করার পর আপনার লাইফটাইম ইউনিক <br/>Unive সার্টিফিকেট লিংক শেয়ার করুন এম্প্লয়ারদের সাথে।


 </h2></Container></Col>
              </Row>

            </Container>
            {/* gif6 */}
            <Container fluid className=' my-5'>
                <Row>
                    <Col  data-aos="fade-down" xs={12} md={6} className='my-auto order-md-1 order-2'><Container>
                <h2 className='text-center'>আপনি যে কোর্স এ পাশ করেছেন সেই কোর্স রিলেটেড ইন্ডাস্ট্রি <br />সার্ভারে জয়নের মাধ্যমে যেকোনো সাহায্য বা জব সার্কুলার এর অ্যাকসেস পান নিমিষেই।
 </h2></Container></Col>
 <Col  data-aos="fade-up" xs={12} md={6} className='order-md-2 order-1'>
 <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid6} type='video/mp4' />
                </video>
      </Ratio></Col>
                </Row>

            </Container>
            {/* gif7 */}
            <Container  fluid className=' my-5'>
          <Row>
 <Col data-aos="fade-up" xs={12} md={6}>
 <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid7} type='video/mp4' />
                </video>
      </Ratio>
                </Col>      
                <Col data-aos="fade-down" xs={12} md={6} className='my-auto'><Container>
                <h2 className='text-center'>কোর্সের যেকোনো কনফিউশন বা জিজ্ঞাসা দ্রুততম সময়ে সমাধান করুন <br/>ইন্ডাস্ট্রি রিসোর্স পারসনদের কাছ থেকে।
 </h2></Container></Col>    </Row>
            </Container>
            {/* gif8 */}
            <Container  fluid className=' my-5'>
            <Row>
                <Col data-aos="fade-down" xs={12} md={6} className='my-auto order-md-1 order-2'><Container>
                <h2 className='text-center'>আপনার টেকনিক্যাল জবের যে কোনও প্রবলেমে ইন্ডাস্ট্রি এক্সপার্টদের মতামত <br/>এবং সাজেশন নিতে ব্যবহার করুন  Unive Premium.

 </h2>
 </Container></Col>
 <Col data-aos="fade-up-left"xs={12} md={6} className='order-md-2 order-1 '>
 <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid8} type='video/mp4' />
                </video>
      </Ratio>
                </Col>
                </Row>
            </Container>
            {/* pic2 */}
            {/* <Container fluid data-aos="fade-right" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic2} alt="" />
                </Container>
            </Container>
            {/* pic3 */}
            {/* <Container fluid data-aos="fade-up" className=' my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic3} alt="" />
                </Container>
            </Container> */}
            {/* pic4 */}
            {/* <Container fluid data-aos="fade-up-left" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic4} alt="" />
                </Container>
            </Container> */}
            {/* pic5 */}
            {/* <Container fluid data-aos="fade-up-right" className=' my-5 py-5' >
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic5} alt="" />
                </Container>
            </Container> */}
            {/* pic6 */}
            {/* <Container fluid data-aos="fade-down" className='my-5 py-5'>
                <Container className='w-75 text-center py-5'>
                    <img className='img-fluid ' src={pic6} alt="" />
                </Container>
            </Container> */}
            {/* pic7 */}
            {/* {<Container fluid data-aos="fade-up" className='middle my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic7} alt="" />
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
