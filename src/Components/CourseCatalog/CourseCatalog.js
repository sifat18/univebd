import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import RestCourses from '../Common/RestCourses';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ar from '../images/icons8-arrow-.png'
import st from '../images/steps.png'
import dr from '../images/icons8-down-arrow-40.png'
import CourseCard from '../Common/CourseCard';

export default function CourseCatalog() {
  const { tag } = useParams()
  const [course, setCourse] = useState([])
  const [disp, setdisp] = useState(false)

  const handleShow = () => {
    setdisp(!disp)
  }
  // https://fierce-woodland-01411.herokuapp.com
  useEffect(() => {
    fetch(`https://unive.site/api/courses/${tag}`).then(res => res.json()).then(data => setCourse(data))
  }, [tag])



  return (
    <><Header />
      {!course.length === 0 && <Spinner animation="border" variant="danger" />}
      {course.length > 0 && <Container className='my-5'>
        <h2 className='text-center'>Explore the {tag === 'IT' ? "IT" : "Technical"} Courses</h2>
        <hr className=' w-50 fw-bold  mx-auto' />
        <Row xs={1} md={3} className="g-4 bigMargin">
          {course.slice(0, 5).map((id) => (
            <CourseCard id={id} />
          ))}
          <RestCourses show={disp} courses={course.slice(5)} />
        </Row>
        <Button className='my-5 px-5 py-3' onClick={handleShow} variant="outline-dark">{!disp ? "show more" : "show Less"} <img src={dr} height={22} alt="" /></Button>
      </Container>

      }
      <Footer /></>
  )
}
