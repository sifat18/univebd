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
                <Container className=' text-center'>
                    <img className='img-fluid ' src={conactImage} alt="" />
                </Container>
            </Container>
            <Footer />
        </>
    )
}
