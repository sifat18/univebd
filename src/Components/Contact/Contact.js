import { Container } from 'react-bootstrap'
import ContactForm from '../Common/ContactForm'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import conactImage from '../images/Contact/contact.png'
export default function Contact() {


    return (
        <>
            <Header />
            <h2 data-aos="fade-down" className='text-center my-5 py-5'>
                সরাসরি মেসেজ করুন        </h2>
            {/* form */}
            <Container fluid className='middle my-5'>
                <Container className=' text-center  bigWidth py-2' >
                    <ContactForm />
                </Container>
            </Container>
            {/* pic2 */}
            <Container data-aos="fade-up-right" fluid className='my-5 py-5'>
                <Container className=' text-center my-3'>
                   <p className='fs-2 fw-bold'>যোগাযোগের ঠিকানা</p>
<p className='text-primary fs-3 fw-bold'>ইউনিভ</p>                   
<p className='fs-3 fw-bold'>লেভেল ৪, ভিশন ২০২১ টাওয়ার </p>                   
<p className='fs-3 fw-bold'>কারওয়ান বাজার বাণিজ্যিক এলাকা, ঢাকা-১২১৫, বাংলাদেশ</p>                   
<p className='fs-3'> <span className=' fw-bold'>ইমেইল:</span>  contact@unive.work</p>                   
<p className='fs-3'> <span className=' fw-bold'> যোগাযোগঃ :</span> 8801881997646, 8801886997646</p>                   
<p className='fs-3'> <span className=' fw-bold'> Website:</span> www.unive.work</p>                   
                </Container>
            </Container>
            <Footer />
        </>
    )
}
