import { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CourseCard from '../Common/CourseCard'
import RestCourses from '../Common/RestCourses'
import useAuth from '../Context/useAuth'
import useData from '../dataloadHooks/dataload'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import dr from '../images/icons8-down-arrow-40.png'
export default function Learn() {
    const { user, admin } = useAuth()

    const [item] = useData();
    const [disp, setdisp] = useState(false)
    const [disp2, setdisp2] = useState(false)

    const handleShow = () => {
        setdisp(!disp)
    }

    const handleShow2 = () => {
        setdisp2(!disp2)
    }
    return (
        <>
            <Header />
            <Container fluid className='my-5'>
                {/* free courses */}
                <Container className='text-center'>
                    <h2 className='my-5 fw-bold'>{user.displayName && `Welcome ${user.displayName}`}</h2>
                    <section className='text-start my-5 ms-5'>
                        <p className='fs-4 smallText'>Get started with our free courses</p>
                    </section>
                    <Row xs={1} md={3} className="g-4 bigMargin">
                        {item.slice(0, 5).map((id) => (
                         <CourseCard id={id} key={id._id} admin={admin}/>
                        ))}
                        <RestCourses show={disp} admin={admin} courses={item.slice(5)} />
                    </Row>
                    <Button className='my-5 px-5 py-3' onClick={handleShow} variant="outline-dark">{!disp ? "show more" : "show Less"} <img src={dr} height={22} alt="" /></Button>

                </Container>

            </Container>
            {/* popular */}
            <Container fluid className='py-5 middle'>
                <Container className='text-center'>
                    <section className='text-start my-5 ms-5'>
                        <p className='fs-4 ps-3'>Popular Courses For You</p>
                    </section>
                    <Row xs={1} md={3} className="g-4 bigMargin">
                        {item.slice(0, 5).map((id) => (
                           <CourseCard id={id} key={id._id} admin={admin}/>
                        ))}
                        <RestCourses show={disp2} admin={admin} courses={item.slice(5)} />
                    </Row>
                    <Button className='my-5 px-5 py-3' onClick={handleShow2} variant="outline-dark">{!disp2 ? "show more" : "show Less"} <img src={dr} height={22} alt="" /></Button>

                </Container>

            </Container>
            <Container className='text-center py-5'>
                <h3>Take your skills to the next level.</h3>
                <NavLink to='/learn'>  <Button className=' my-2 text-center' variant="primary">Explore all courses and paths </Button></NavLink>

            </Container>
            <Footer />
        </>
    )
}
