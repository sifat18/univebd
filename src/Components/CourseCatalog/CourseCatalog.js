import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import RestCourses from '../Common/RestCourses';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ar from '../images/icons8-arrow-.png'
import st from '../images/steps.png'
import dr from '../images/icons8-down-arrow-40.png'

export default function CourseCatalog() {
  const { tag } = useParams()
  const [course, setCourse] = useState([])
  const [disp, setdisp] = useState(false)

  const handleShow = () => {
    setdisp(!disp)
  }
  // https://fierce-woodland-01411.herokuapp.com
  useEffect(() => {
    fetch(`http://localhost:7000/courses/${tag}`).then(res => res.json()).then(data => setCourse(data))
  }, [tag])



  return (
    <><Header />
      {!course.length === 0 && <Spinner animation="border" variant="danger" />}
      {course.length > 0 && <Container className='my-5'>
        <h2 className='text-center'>Explore the {tag === 'IT' ? "IT" : "Technical"} Courses</h2>
        <hr className=' w-50 fw-bold  mx-auto' />
        <Row xs={1} md={3} className="g-4 bigMargin">
          {course.slice(0, 5).map((id) => (
            <Col key={id._id}>
              <Card className='py-1'>
                <Card.Img variant="top" className='img-fluid ' src={id.imageLink} />
                <Card.Body className='text-start'>
                  <p>Unive</p>
                  <Card.Title >{id.coursename}</Card.Title>
                  <Card.Text>{id.about.slice(0, 100)}              </Card.Text>
                </Card.Body>
                <Row>
                  <Col xs={6}>
                    <p><img src={st} alt="" height={25} /></p>
                    <p className='fs-7'>Beginner</p>
                  </Col>
                  <Col xs={6}>
                    <NavLink to={`/learn/${id._id}`}> <Button className='p-3' variant="outline-dark">preview <img src={ar} alt="" /></Button></NavLink>

                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
          <RestCourses show={disp} courses={course.slice(5)} />
        </Row>
        <Button className='my-5 px-5 py-3' onClick={handleShow} variant="outline-dark">{!disp ? "show more" : "show Less"} <img src={dr} height={22} alt="" /></Button>
      </Container>

      }
      <Footer /></>
  )
}
