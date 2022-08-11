import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import pic1 from '../images/How-It-works/Picture2-1.png'
import pic2 from '../images/How-It-works/Picture3-1-e1640099208951.png'
import pic3 from '../images/How-It-works/Picture4-1.png'
import pic4 from '../images/How-It-works/Picture5-1.png'
import pic5 from '../images/How-It-works/Picture6-1.png'
import pic6 from '../images/How-It-works/Picture7-1.png'
import pic7 from '../images/How-It-works/Picture8-1.png'
import gif1 from '../images/How-It-works/mouse-click.gif'
import gif2 from '../images/How-It-works/step-progressbar.gif'
import gif3 from '../images/How-It-works/certificate.gif'
import gif4 from '../images/How-It-works/trophy.gif'
import gif5 from '../images/How-It-works/certificate2.gif'
import gif6 from '../images/How-It-works/support-centre.gif'
import gif7 from '../images/How-It-works/communicate-with-customer.gif'
import gif8 from '../images/How-It-works/premium-gold.gif'
export default function HowItworks() {
    return (
        <>
            <Header />
            <h2 data-aos="fade-up-right" className='text-center my-5 py-5'>
                ইউনিভ কিভাবে কাজ করে?
            </h2>
            {/* pic1 */}
            {/* <Container data-aos="fade-up-left" fluid className='middle my-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic1} alt="" />
                </Container>
            </Container> */}
            {/* gif1 */}
            <Container data-aos="fade-up-left" fluid className=' my-5'>
                <h2 className='text-center'>এক ক্লিকেই কোর্স শুরু করুন
</h2>
                <Container className='w-50 h-50 text-center'>
                    <img className='img-fluid w-50 h-50' src={gif1} alt="" />
                </Container>
            </Container>
            {/* gif2 */}
            <Container data-aos="fade-up-left" fluid className=' my-5'>
                <h2 className='text-center'>কোর্স প্রোগ্রেস সেভ করে রাখতে ইমেইল বা ফোন নাম্বার দিয়ে লগইন করুন </h2>
                <Container className='w-50  text-center'>
                    <img className='img-fluid ' src={gif2} alt="" />
                </Container>
            </Container>
            {/* gif3 */}
            <Container data-aos="fade-up-left" fluid className=' my-5'>
                <h2 className='text-center'>সকল কোর্স ছোট ছোট সহজবোধ্য লার্নিং মডিউলে বিভক্ত।
 </h2>
                <Container className='w-50  text-center'>
                    <img className='img-fluid ' src={gif3} alt="" />
                </Container>
            </Container>
            {/* gif4 */}
            <Container data-aos="fade-up-left" fluid className=' my-5'>
                <h2 className='text-center'>আপনার কোর্স পারফরম্যান্স বা স্কিল অ্যাসেসমেন্ট এর উপরে <br/>লিডারবোর্ডে স্থান করে জিতে নিন আকর্ষণীয় পুরস্কার।

 </h2>
                <Container className='w-50  text-center'>
                    <img className='img-fluid ' src={gif4} alt="" />
                </Container>
            </Container>
            {/* gif5 */}
            <Container data-aos="fade-up-left" fluid className=' my-5'>
                <h2 className='text-center'>কোর্স সম্পন্ন করার পর আপনার লাইফটাইম ইউনিক <br/>Unive সার্টিফিকেট লিংক শেয়ার করুন এম্প্লয়ারদের সাথে।


 </h2>
                <Container className='w-50  text-center'>
                    <img className='img-fluid ' src={gif5} alt="" />
                </Container>
            </Container>
            {/* gif6 */}
            <Container data-aos="fade-up-left" fluid className=' my-5'>
                <h2 className='text-center'>আপনি যে কোর্স এ পাশ করেছেন সেই কোর্স রিলেটেড ইন্ডাস্ট্রি <br />সার্ভারে জয়নের মাধ্যমে যেকোনো সাহায্য বা জব সার্কুলার এর অ্যাকসেস পান নিমিষেই।
 </h2>
                <Container className='  text-center'>
                    <img className='img-fluid ' src={gif6} alt="" />
                </Container>
            </Container>
            {/* gif7 */}
            <Container data-aos="fade-up-left" fluid className=' my-5'>
                <h2 className='text-center'>কোর্সের যেকোনো কনফিউশন বা জিজ্ঞাসা দ্রুততম সময়ে সমাধান করুন <br/>ইন্ডাস্ট্রি রিসোর্স পারসনদের কাছ থেকে।
 </h2>
                <Container className='  text-center'>
                    <img className='img-fluid ' src={gif7} alt="" />
                </Container>
            </Container>
            {/* gif8 */}
            <Container data-aos="fade-up-left" fluid className=' my-5'>
                <h2 className='text-center'>আপনার টেকনিক্যাল জবের যে কোনও প্রবলেমে ইন্ডাস্ট্রি এক্সপার্টদের মতামত <br/>এবং সাজেশন নিতে ব্যবহার করুন  Unive Premium.

 </h2>
                <Container className='  text-center'>
                    <img className='img-fluid ' src={gif8} alt="" />
                </Container>
            </Container>
            {/* pic2 */}
            {/* <Container fluid data-aos="fade-right" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic2} alt="" />
                </Container>
            </Container>
            {/* pic3 */}
            <Container fluid data-aos="fade-up" className=' my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic3} alt="" />
                </Container>
            </Container>
            {/* pic4 */}
            <Container fluid data-aos="fade-up-left" className='my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic4} alt="" />
                </Container>
            </Container>
            {/* pic5 */}
            <Container fluid data-aos="fade-up-right" className=' my-5 py-5' >
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic5} alt="" />
                </Container>
            </Container>
            {/* pic6 */}
            <Container fluid data-aos="fade-down" className='my-5 py-5'>
                <Container className='w-75 text-center py-5'>
                    <img className='img-fluid ' src={pic6} alt="" />
                </Container>
            </Container>
            {/* pic7 */}
            {/* {<Container fluid data-aos="fade-up" className='middle my-5 py-5'>
                <Container className='w-75 text-center'>
                    <img className='img-fluid ' src={pic7} alt="" />
                </Container>
            </Container> */} 
            */


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
